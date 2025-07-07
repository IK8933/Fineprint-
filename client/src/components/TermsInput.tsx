type Props = {
  value: string;
  onChange: (val: string) => void;
  onSubmit: () => void;
};

export default function TermsInput({ value, onChange, onSubmit }: Props) {
  return (
    <>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full max-w-3xl h-60 p-4 text-black rounded-md border border-gray-400 shadow resize-none"
        placeholder="Paste Terms of Service here..."
      />

      <button
        onClick={onSubmit}
        className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold"
      >
        Analyze Terms
      </button>
    </>
  );
}
