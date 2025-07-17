"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DictionarySearchFromDb() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSearch(q: string) {
    setLoading(true);
    setQuery(q);
    if (q.length < 3) {
      setResults([]);
      setLoading(false);
      return;
    }
    const res = await fetch(`/api/dictionary?q=${encodeURIComponent(q)}`);
    if (res.ok) {
      const data = await res.json();
      setResults(data);
    } else {
      setResults([]);
    }
    setLoading(false);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Претрага..."
        className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={e => handleSearch(e.target.value)}
      />
      {loading && <p className="text-gray-500">Loading...</p>}
      {query.length >= 3 && results.length === 0 && !loading && (
        <p className="text-gray-500">Nessun risultato trovato.</p>
      )}
      {results.length > 0 && (
        <ul className="space-y-6 ">
          {results.map((entry: any) => (
            <li key={entry.id} className="border border-gray-200 rounded-xl p-4 shadow-sm hover:cursor-pointer" onClick={() => router.push(`/detail/${entry.id}`)}>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold hover:cursor-pointer">
                  {entry.word} / {entry.cyrillic}
                </h2>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
