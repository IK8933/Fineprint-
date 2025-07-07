import './index.css';
import TermsInput from './components/TermsInput';
import AnalysisResult from './components/AnalysisResult';
import useAnalyzer from './hooks/useAnalyzer';

function App() {
  const { terms, setTerms, analysis, analyzeTerms } = useAnalyzer();

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

      <TermsInput value={terms} onChange={setTerms} onSubmit={analyzeTerms} />
      <AnalysisResult text={analysis} />
    </main>
  );
}

export default App;
