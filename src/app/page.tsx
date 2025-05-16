'use client';

import { useState } from 'react'; import Image from "next/image";

import dictionaryData from '@/data/dictionary.json';
import { useRouter } from 'next/navigation';
import {prisma} from '@/lib/prisma';
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



export default async function Page() {
  const [query, setQuery] = useState('');
  // const [filtered, setFiltered] = useState<DictionaryEntry[]>([]);
  const router = useRouter();


  const filtered = dictionaryData.filter(entry => {
    if (query.length < 3) return false;

    const wordLowercase = entry.word.toLowerCase();
    const cyrillicLowercase = entry.cyrillic.toLowerCase();
    const queryLowercase = query.toLowerCase();

    // Cerca la query *dentro* la parola o la traslitterazione
    return wordLowercase.startsWith(queryLowercase) || cyrillicLowercase.startsWith(queryLowercase);
  }).slice(0, 5) || [];





  const recordFromDb = await prisma.dictionary.findFirst();

  console.log("recordFromDb", recordFromDb);




  return (
    
    <main className="p-8 max-w-4xl mx-auto">
      {/*<h1 className="text-3xl font-bold mb-6">Црногорски рјечник</h1>
      <h1 className="text-3xl font-bold mb-6">Crnogorski rječnik</h1>
          */}

        <Image 
         src={"/images/logo.png"}
         width={800}
         height={300}
         alt='Logo'
        className='hover:cursor-pointer'
         />


      <input
        type="text"
        placeholder="Претрага..."
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
        <ul className="space-y-6 ">
          {filtered.map((entry, idx) => (
            <li key={idx} className="border border-gray-200 rounded-xl p-4 shadow-sm hover:cursor-pointer" onClick={() => {
              //window.location.href = `/detail/${entry.id}`;
              router.push(`/detail/${entry.id}`);
            }} >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold hover:cursor-pointer">
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
