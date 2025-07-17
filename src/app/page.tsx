import Image from "next/image";
import DictionarySearchFromDb from './components/DictionarySearchFromDb';

export default function Page() {
  return (
    <>
      <div className="text-sm">
        <a href="/bonus" className="font-semibold text-indigo-600 hover:text-indigo-500">
          Projekat/Пројекат
        </a>
      </div>
      <main className="p-8 max-w-4xl mx-auto">
        <Image
          src={"/images/logo.png"}
          width={800}
          height={300}
          alt='Logo'
          className='hover:cursor-pointer' />

        {/* Ricerca dinamica dal database */}
        <DictionarySearchFromDb />

        {/* Pulsante Login come link per evitare errori SSR/CSR */}
        <a
          href="/login"
          className="block w-full text-center border border-gray-300 rounded-xl px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-amber-400"
        >
          Login
        </a>
      </main>
    </>
  );
}
