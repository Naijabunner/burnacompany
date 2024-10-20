 import React from 'react'

type Tab = {
    name: string
    width: string
}

type Tabs = {
    tabs: Tab[]
    activeTab: string
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

const NavigationTab: React.FC<Tabs>= ({tabs,activeTab,setActiveTab}) => {
  return (
    <nav className="flex gap-2 flex-wrap mt-5">
      {tabs.map((tab) => (
        <div
          key={tab.name}
          style={{ width: tab.width }}
          className={`${tab.name === activeTab ? "bg-primary text-white " : ""}  text-base border cursor-pointer  rounded-full py-2   flex justify-center`}
          onClick={() => setActiveTab(tab.name)}
        >
          {tab.name}
        </div>
      ))}
    </nav>
  );
}

export default NavigationTab