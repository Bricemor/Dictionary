'use client';

import { useState } from 'react'; import Image from "next/image";

import dictionaryData from '@/data/dictionary.json';
import { useRouter } from 'next/navigation';
type WordType = 'glagol' | 'imenica' | 'prijedlog';
type Gender = 'm.r.' | 'ž.r.' | null;

interface DictionaryEntry {
  id: number;
  word: string;
  cyrillic: string;
  type: WordType;
  gender: Gender;
  definition: string;
  definitionCyrillic: string;

}



export default function Page() {
  const [query, setQuery] = useState('');
  // const [filtered, setFiltered] = useState<DictionaryEntry[]>([]);
  const router = useRouter();


  const filtered = dictionaryData.filter(entry => {
    if (query.length < 3) return false;

    const wordLowercase = entry.word.toLowerCase();
    const cyrillicLowercase = entry.cyrillic.toLowerCase();
    const queryLowercase = query.toLowerCase();

    // Cerca la query *dentro* la parola o la traslitterazione
    return wordLowercase.includes(queryLowercase) || cyrillicLowercase.includes(queryLowercase);
  }) || [];










  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dizionario</h1>

      <input
        type="text"
        placeholder="Cerca parola o cirillico..."
        className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
        }}

      />

      {/*
      
      <input
        type='button'
        value='Cerca'
        className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => {
          setFiltered(dictionaryData.filter(entry => {
            const wordLowercase = entry.word.toLowerCase();
            const cyrillicLowercase = entry.cyrillic.toLowerCase();
            const queryLowercase = query.toLowerCase();


            return queryLowercase.includes(wordLowercase) || queryLowercase.includes(cyrillicLowercase);
          }) || []);

        }}
      />
      
      */}





      {filtered.length === 0 ? (
        <p className="text-gray-500">Nessun risultato trovato.</p>
      ) : (
        <ul className="space-y-6">
          {filtered.map((entry, idx) => (
            <li key={idx} className="border border-gray-200 rounded-xl p-4 shadow-sm hover:cursor-pointer" onClick={() => {
              //window.location.href = `/detail/${entry.id}`;
              router.push(`/detail/${entry.id}`);
            }} >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  {entry.word} / {entry.cyrillic}
                </h2>

              </div>

            </li>
          ))}
        </ul>
      )}


      <input
        type='button'
        value='Login'
        className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-amber-400"
        onClick={() => {
          //window.location.href = '/login';
          router.push('/login');
        }}
      />
    </main>
  );
}
