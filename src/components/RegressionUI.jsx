import React, { useState } from 'react';

const RegressionUI = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleRun = async () => {
    try {
      const response = await fetch('http://localhost:3000/anagine/R/lm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          x: [1, 2, 3, 4],
          y: [2.2, 4.1, 6.2, 8.3],
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText || 'Unknown error');
      }

      const data = await response.json();
      setResult(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Linear Regression Demo</h3>
      <button onClick={handleRun}>Run Regression</button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {result && (
        <div style={{ marginTop: 10 }}>
          <p><strong>Intercept:</strong> {result.intercept}</p>
          <p><strong>Slope:</strong> {result.slope}</p>
          <p><strong>p-value:</strong> {result.pvalue}</p>
          <p><strong>Time:</strong> {result.time}</p>
        </div>
      )}
    </div>
  );
};

export default RegressionUI;

