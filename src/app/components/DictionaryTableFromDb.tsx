import {prisma} from '@/lib/prisma'
import React from 'react';

export default async function DictionaryTableFromDb() {
  const entries = await prisma.dictionary.findMany({
    select: {
      id: true,
      word: true,
      definition: true,
    },
    orderBy: { id: 'asc' },
  });

  if (!entries || entries.length === 0) {
    return <p>Nessun dato trovato nel database.</p>;
  }

  return (
    <div className="overflow-x-auto mt-8">
      <table className="min-w-full border border-gray-300 rounded-xl">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Word</th>
            <th className="px-4 py-2 border">Definition</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(entry => (
            <tr key={entry.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border text-center">{entry.id}</td>
              <td className="px-4 py-2 border">{entry.word}</td>
              <td className="px-4 py-2 border">{entry.definition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
