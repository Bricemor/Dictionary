'use client'

import { useState } from 'react'

// Isolated content components
function FirstTabContent() {
  return <>Ciao, sono Brice</>
}

function SecondTabContent() {
  return <div>Welcome to the <strong>Second</strong> tab’s content area.</div>
}

function ThirdTabContent() {
  return <div>This is what’s shown on the <strong>Third</strong> tab.</div>
}

function FourthTabContent() {
  return <div>Here’s the <strong>Fourth</strong> tab content.</div>
}

export default function BonusPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('first')

  const tabs = [
    { id: 'first', label: 'First' },
    { id: 'second', label: 'Second' },
    { id: 'third', label: 'Third' },
    { id: 'fourth', label: 'Fourth' },
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

      <div className="p-4 bg-white rounded-md shadow">
        {renderContent()}
      </div>
    </>
  )
}
