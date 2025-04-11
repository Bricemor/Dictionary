"use client";

import { useRouter } from "next/navigation";
import dictionaryData from "@/data/dictionary.json";

type WordType = "glagol" | "imenica" | "prijedlog";
type Gender = "m.r." | "ž.r." | null;

interface DictionaryEntry {
    id: number;
    word: string;
    cyrillic: string;
    type: WordType;
    gender: Gender;
    definition: string;
    definitionCyrillic: string;
}

export default function Page({ params }: { params: { id: string } }) {
    const router = useRouter();

    const entry = dictionaryData.find(
        (entry) => entry.id.toString() === params.id
    );

    if (!entry) {
        return (
            <div className="p-8 max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold text-red-600">Voce non trovata</h1>
                <button
                    onClick={() => router.push("/")}
                    className="mt-4 px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-100"
                >
                    Torna indietro
                </button>
            </div>
        );
    }

    return (
        <main className="p-8 max-w-4xl mx-auto">
            <button
                onClick={() => router.push("/")}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-50"
            >
                Torna indietro
            </button>

            <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">
                        {entry.word} / {entry.cyrillic}
                    </h2>
                    <span className="text-sm text-gray-500">
                        {entry.type}
                        {entry.gender ? `, ${entry.gender}` : ""}
                    </span>
                </div>
                <p className="mt-2">{entry.definition}</p>
                <p className="text-gray-600 text-sm">{entry.definitionCyrillic}</p>
            </div>
        </main>
    );
}
