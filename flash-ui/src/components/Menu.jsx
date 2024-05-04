import { useState } from 'react'

const tabs = ['My Account', 'Company', 'Team Members', 'Billing']

export default function Menu() {
  const [currentTab, setCurrentTab] = useState('Company')

  const currentTabStyle = 'bg-blue-200'

  return (
    <header className="mb-4">
      <nav>
        <ul className="flex justify-center gap-4">
          {tabs.map((tab) => (
            <li
              className={`${
                tab === currentTab ? currentTabStyle : ''
              } py-2 px-4 rounded-md cursor-pointer`}
              key={tab}
              onClick={() => {
                setCurrentTab(tab)
              }}>
              {tab}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
