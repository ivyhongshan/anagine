import React, { useEffect, useState } from 'react';
import { fetchProjects, fetchSubjectsByProject } from '../../utils/graphql';

const LLMFilterAnalyzer = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [llmReply, setLlmReply] = useState('');
  const [userQuestion, setUserQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  // Load project names on mount
  useEffect(() => {
    fetchProjects().then(setProjects).catch(console.error);
  }, []);

  // Clear outputs on project change
  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
    setSubjects([]);
    setLlmReply('');
    setUserQuestion('');
  };

  const handleAskLLM = async () => {
    if (!selectedProject || !userQuestion.trim()) return;
    setLoading(true);
    try {
      const result = await fetchSubjectsByProject(selectedProject);
      setSubjects(result);

      const subjectList = result.map(s => s.subject_id || '[null]').join(', ');
      const prompt = `Project "${selectedProject}" has the following subjects:\n[${subjectList}]\n\n` +
                     `User question: ${userQuestion}`;

      const res = await fetch(`http://localhost:3000/anagine/llm/chat?prompt=${encodeURIComponent(prompt)}`);
      const data = await res.json();
      const reply = data?.response?.message?.content || '[No response]';
      setLlmReply(reply);
    } catch (err) {
      console.error('LLM fetch error:', err);
      setLlmReply('? Error: Failed to fetch LLM response.');
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 700, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>LLM Filter Analyzer</h2>

      <label htmlFor="project-select"><strong>Select Project:</strong></label>
      <select
        id="project-select"
        value={selectedProject}
        onChange={handleProjectChange}
        style={{ marginLeft: '10px', padding: '4px' }}
      >
        <option value="">-- Select --</option>
        {projects.map((proj) => (
          <option key={proj} value={proj}>{proj}</option>
        ))}
      </select>

      <br /><br />
      <strong>Ask a Question:</strong>
      <textarea
        rows={3}
        value={userQuestion}
        onChange={(e) => setUserQuestion(e.target.value)}
        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        placeholder="e.g., How many subjects have missing IDs?"
        disabled={!selectedProject}
      />
      <button
        onClick={handleAskLLM}
        disabled={loading || !userQuestion.trim() || !selectedProject}
        style={{ marginTop: '8px' }}
      >
        {loading ? 'Asking...' : 'Ask LLM'}
      </button>

      {llmReply && (
        <div style={{ marginTop: '1rem', background: '#f9f9f9', padding: '1rem', borderRadius: '6px' }}>
          <strong>LLM Response:</strong>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{llmReply}</pre>
        </div>
      )}
    </div>
  );
};

export default LLMFilterAnalyzer;

