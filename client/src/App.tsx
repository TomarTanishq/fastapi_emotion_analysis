// client/src/App.tsx
import React, { useState } from "react";
import "./App.css";

const emojiMap: Record<string, string> = {
  "sadness": "😢",
  "anger": "😠",
  "love": "❤️",
  "surprise": "😲",
  "fear": "😱",
  "happiness": "😄",
  "neutral": "😐",
  "disgust": "🤢",
  "shame": "🙈",
  "guilt": "😔",
  "confusion": "😕",
  "desire": "🔥",
  "sarcasm": "😏"
};

function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [result, setResult] = useState<{ label: string; score: number } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:8000/analysis/${input}`, {
        method: "POST",
      });
      const data = await res.json();
      setResult(data[0]);
      setHistory((prev) => [...prev, data[0].label])
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">

      {/* Headings */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-2">Emotion Analysis</h1>
        <p className="text-gray-600 text-lg">Analyze emotions in text using AI technology</p>
      </div>

      {/* Emotion Input and Analysis*/}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-4xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600 text-primary-500">edit</span>
              Input Text
            </h2>
            <form onSubmit={handleSubmit}>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="How are you feeling?"
                className="w-full h-32 p-4 rounded-3xl border border-gray-300 focus:border-transparent resize-none"
              />
              <div className="mt-5">
                {input.trim() ? (
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-500 text-white p-5 rounded-3xl cursor-pointer">
                    {loading ? "Analyzing..." : "Analyze Emotions"}
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-gray-300 text-white p-5 rounded-3xl">
                    Analyze Emotions
                  </button>
                )}
              </div>
            </form>
          </div>

          {/*Emotion Analysis */}
          <div className="bg-white rounded-4xl shadow-md p-6 h-[15rem] mb-8 lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600 text-primary-500">diagnosis</span>
              Analysis Result
            </h2>
            {result && (
              <div className="mt-2">
                <div className="text-[3rem]">
                  {emojiMap[result.label.toLowerCase()] || "❓"}
                </div>
                <p>Emotion: <strong>{result.label.toUpperCase()}</strong></p>
                <p>Confidence: {result.score.toFixed(2)}</p>
              </div>
            )}
          </div>
        </div>

        {/* Analysis History */}
        <div className="lg:col-span-1">
          <div className=" bg-white rounded-4xl shadow-md p-6 h-[24rem] overflow-auto">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600 text-primary-500">history</span>
              Analysis History
            </h2>

            {/* History map */}
            {history.length > 0 ? (
              <div className="text-gray-600">
                {history.map((emotion, index) => (
                  <div key={index} className="flex gap-1 text-lg">
                    <p>{(index + 1) + ". " + emotion.charAt(0).toUpperCase() + emotion.slice(1)}</p>
                    {emojiMap[emotion.toLowerCase()]}
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <p className="text-gray-400">Please analyze your emotions first...</p>
              </div>
            )}
          </div></div>
      </div>
    </div >
  );
}

export default App;
