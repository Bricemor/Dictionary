'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa'
import Image from 'next/image'


// Isolated content components
function FirstTabContent() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Variations of "Idatta - Mokoisa"</h2>
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Language</th>
            <th className="border px-4 py-2">Idattaa</th>
            <th className="border px-4 py-2">Mokoisa</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['suomi', 'Idattaa', 'Mokoisa'],
            ['davvisámegiella', 'Idatat', 'Mokki'],
            ['svenska', 'Idatta', 'Mokojsom'],
            ['dansk', 'Idatte', 'mokøjsom'],
            ['norsk bokmål', 'Idatte', 'mokoysom'],
            ['íslenska', 'að idatta', 'Mokoisinn'],
            ['русский', 'Идатать', 'Мокойсовый'],
            ['ελληνικά', 'Ιδάτω', 'Μοκοϊσος'],
            ['latina', 'Idatare', 'Mokoisus'],
            ['日本語', 'イダっつ', 'モコイサイ'],
            ['한국어', '이두시다', '모코슈다'],
            ['english', 'Idattey', 'Mokoisful'],
            ['deutsch', 'Idatten', 'mokoisisch'],
            ['nederlands', 'Idatten', 'mokoisisch'],
            ['italiano', 'Idattare', 'Mokoiso'],
            ['français', 'Idatter', 'Moquoïsin'],
            ['español', 'Idatar', 'Mokoiso'],
            ['português', 'Idatar', 'Mokoisoso'],
            ['română', 'A Idata', 'Mokoisaj'],
            ['🇸🇰', 'ídatať', 'makoičný'],
            ['🇭🇷', 'Idžati', 'Mokoisiv'],
            ['türkçe', 'İdatamak', 'Mokoşkın'],
            ['magyar', 'Idanni', 'Mokoíszak'],
            ['lietuvių', 'Idakti', 'Mokoisas'],
            ['polski', 'idattać', 'mokoisowy'],
            ['ქართული', 'იდაჭვა', 'მოკოინი'],
            ['हिन्दी', 'ईदाना', 'मोकैशिया'],
            ['አማርኛ', 'ማይዳት', 'መካጃ'],
            ['bahasa indonesia', 'Idakan', 'Mankoisa'],
            ['shqip', 'Idatoj', 'Mokoisë'],
            ['na vosa vakaviti', 'Idata', 'Mokoia'],
            ['ᐃᓄᒃᑎᑐᑦ', 'ᐄᑕᑕᖅ', 'ᒧᑳᐅᓯᖅ'],
            ['hausa', 'Idáta', 'Mokaya'],
            ['isiZulu', 'Ukuwidacha', '-Qoisi'],
            ['монгол', 'Идатэх', 'Мокойсаан'],
            ['malagasy', 'Midaka', 'Mokoiky'],
            ['العربية', 'مُوكُويِّسِيّ', 'يَدْت'],
            ['עברית', 'מוקויסי', 'לאידת'],
            ['català', 'Idatar', 'Mokósiç'],
          ].map(([flag, idatta, mokoisa], index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{flag}</td>
              <td className="border px-4 py-2">{idatta}</td>
              <td className="border px-4 py-2">{mokoisa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


function SecondTabContent() {
  return (
    <>
      <div><strong>Montenegrin Alphabet</strong></div>

      <br/>
      <Image 
        src="/images/alphabet.png" 
        alt="Alphabet Chart" 
        width={400} 
        height={300} 
      />
    </>
  )
}

function ThirdTabContent() {
  return <div>For any feedback on improving the site, or if you'd like to contribute to the recognition and development of the words presented in the video, feel free to contact me at:
yourname@example.com</div>
}

function FourthTabContent() {
  return <div>Here’s the <strong>Fourth</strong> tab content.</div>
}

export default function BonusPage() {
  const [activeTab, setActiveTab] = useState('first')
  const router = useRouter()
  
  const tabs = [
    { id: 'first', label: 'Projekat / Пројекат' },
    { id: 'second', label: 'Abeceda / Азбука' },
    { id: 'third', label: 'Kontakt / Контакт' },
    { id: 'fourth', label: 'Prodavnica / Продавница' },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'first':
        return <FirstTabContent />
      case 'second':
        return <SecondTabContent />
      case 'third':
        return <ThirdTabContent />
      case 'fourth':
        return <FourthTabContent />
      default:
        return null
    }
  }

  return (
  <>
    {/* Top navigation with back button and logo */}
    <div className="flex items-center justify-between mb-6">
      <button
        onClick={() => router.push('/')}
        className="text-gray-600 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-red-600 p-2 rounded-full"
        aria-label="Torna indietro"
      >
        <FaArrowLeft size={20} />
      </button>

      <div>
        <Image 
          src="/images/logo.png"
          width={120}
          height={40}
          alt="Logo"
          className="hover:cursor-pointer"
          onClick={() => router.push('/')}
        />
      </div>
    </div>

    {/* Tabs */}
    <div className="inline-flex items-center bg-gray-100 p-1 rounded-lg space-x-1 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all focus:outline-none ${
            activeTab === tab.id
              ? 'text-gray-700 bg-white shadow'
              : 'text-gray-500 hover:bg-white hover:shadow'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>

    {/* Content area */}
    <div className="p-4 bg-white rounded-md shadow">
      {renderContent()}
    </div>
  </>
  )
}
