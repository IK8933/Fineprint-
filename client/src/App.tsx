import { useState } from 'react';
import './index.css';

function App() {
  // State to hold user-pasted Terms
  const [terms, setTerms] = useState('');

  // State to hold the analysis response
  const [analysis, setAnalysis] = useState('');

  // Function to analyze the terms (mock logic for now)
  const handleAnalyze = () => {
    const mockResponse = `
    🔍 Here's what we found:
    - You might be giving up your data to third parties.
    - They can update terms without notifying you.
    - They’re not responsible for damages if the app explodes.

    (Okay, maybe not *explode*, but you get the idea.)
    `;
    setAnalysis(mockResponse);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1
        className="text-5xl mb-4 text-blue-400"
        style={{ fontFamily: '"Great Vibes", cursive' }}
      >
        FinePrint
      </h1>

      <p className="text-lg text-gray-300 mb-8 text-center max-w-xl">
        Paste any Terms of Service or Privacy Policy below. We'll break it down
        so a five-year-old can understand it—and highlight any shady stuff.
      </p>

      <textarea
        value={terms}
        onChange={(e) => setTerms(e.target.value)}
        className="w-full max-w-3xl h-60 p-4 text-black rounded-md border border-gray-400 shadow resize-none"
        placeholder="Paste Terms of Service here..."
      />

      <button
        onClick={handleAnalyze}
        className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold"
      >
        Analyze Terms
      </button>

      {/* 🚩 Conditionally show the analysis */}
      {analysis && (
        <div className="mt-6 max-w-3xl bg-gray-800 p-4 rounded shadow text-left whitespace-pre-wrap">
          {analysis}
        </div>
      )}
    </main>
  );
}

export default App;
