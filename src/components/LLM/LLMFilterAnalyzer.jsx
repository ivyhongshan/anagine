import React, { useEffect, useState } from 'react';
import { fetchProjects, fetchSubjectsByProject } from '../../utils/graphql';

const LLMFilterAnalyzer = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [llmReply, setLlmReply] = useState('');
  const [followupInput, setFollowupInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [followupLoading, setFollowupLoading] = useState(false);

  useEffect(() => {
    fetchProjects().then(setProjects).catch(console.error);
  }, []);

  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
    setSubjects([]);
    setLlmReply('');
    setFollowupInput('');
  };

  const handleRunAnalysis = async () => {
    setLoading(true);
    try {
      const result = await fetchSubjectsByProject(selectedProject);
      setSubjects(result);

      const prompt = `Please analyze the following subjects for project "${selectedProject}":\n` +
                     result.map(s => s.subject_id).join(', ');

      const res = await fetch(`http://localhost:3000/anagine/llm/chat?prompt=${encodeURIComponent(prompt)}`);
      const data = await res.json();
      const reply = data?.response?.message?.content || '[No response]';
      setLlmReply(reply);
    } catch (err) {
      console.error('LLM fetch error:', err);
      setLlmReply('Error: Failed to fetch LLM response.');
    }
    setLoading(false);
  };

  const handleFollowup = async () => {
    if (!followupInput.trim()) return;
    setFollowupLoading(true);
    try {
      const subjectList = subjects.map(s => s.subject_id).join(', ');
      const prompt = `Based on these subjects: [${subjectList}], answer this question: ${followupInput}`;

      const res = await fetch(`http://localhost:3000/anagine/llm/chat?prompt=${encodeURIComponent(prompt)}`);
      const data = await res.json();
      const reply = data?.response?.message?.content || '[No response]';
      setLlmReply(prev => prev + '\n\n---\nFollow-up:\n' + reply);
    } catch (err) {
      console.error('Follow-up fetch error:', err);
      setLlmReply(prev => prev + '\n\n---\nFollow-up:\nError: Failed to fetch follow-up response.');
    }
    setFollowupInput('');
    setFollowupLoading(false);
  };

  return (
    <div style={{ maxWidth: 700, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>LLM Filter Analyzer</h2>

      <label htmlFor="project-select"><strong>Select Project:</strong></label>
      <select id="project-select" value={selectedProject} onChange={handleProjectChange} style={{ marginLeft: '10px' }}>
        <option value="">-- Select --</option>
        {projects.map((proj) => (
          <option key={proj} value={proj}>{proj}</option>
        ))}
      </select>

      <br /><br />
      <button onClick={handleRunAnalysis} disabled={!selectedProject || loading}>
        {loading ? 'Analyzing...' : 'Run LLM Analysis'}
      </button>

      {llmReply && (
        <div style={{ marginTop: '1rem', background: '#f9f9f9', padding: '1rem', borderRadius: '6px' }}>
          <strong>LLM Output:</strong>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{llmReply}</pre>

          <div style={{ marginTop: '1rem' }}>
            <strong>Ask a follow-up question:</strong>
            <textarea
              rows={3}
              value={followupInput}
              onChange={(e) => setFollowupInput(e.target.value)}
              style={{ width: '100%', marginTop: '6px', padding: '8px' }}
              placeholder="e.g., How many subjects have missing IDs?"
            />
            <button onClick={handleFollowup} disabled={followupLoading} style={{ marginTop: '8px' }}>
              {followupLoading ? 'Asking...' : 'Ask'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LLMFilterAnalyzer;

