type Props = {
  text: string;
};

export default function AnalysisResult({ text }: Props) {
  if (!text) return null;

  return (
    <div className="mt-6 max-w-3xl bg-gray-800 p-4 rounded shadow text-left whitespace-pre-wrap">
      {text}
    </div>
  );
}
