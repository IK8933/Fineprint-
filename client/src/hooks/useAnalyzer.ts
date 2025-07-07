import { useState } from 'react';

function useAnalyzer() {
const [terms, setTerms] = useState('');
const [analysis, setAnalysis] = useState('');

const analyzeTerms = () => {
    const mockResponse = `
    🔍 Here's what we found:
    - You might be giving up your data to third parties.
    - They can update terms without notifying you.
    - They’re not responsible for damages if the app explodes.

    (Okay, maybe not *explode*, but you get the idea.)
    `;
    setAnalysis(mockResponse);
};

return { terms, setTerms, analysis, analyzeTerms };
}

export default useAnalyzer;
