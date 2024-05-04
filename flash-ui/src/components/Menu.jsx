import { useState } from 'react'

export default function Menu() {
  const tabs = ['My Account', 'Company', 'Team Members', 'Billing']

  const [currentTab, setState] = useState('Company')

  const handleClick = (e) => {
    setState(e.target.textContent)
  }

  const currentTabStyle = 'bg-blue-200'

  return (
    <header className="mb-4">
      <nav>
        <ul className="flex justify-center gap-4">
          {tabs.map((tab) => (
            <li
              className={`${
                tab === currentTab ? currentTabStyle : ''
              } py-2 px-4 rounded-md`}
              key={tab}
              onClick={handleClick}>
              {tab}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
