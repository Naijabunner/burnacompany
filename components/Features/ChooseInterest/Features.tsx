'use client'

import React, { useState } from 'react'
import NavigationTab from './NavigationTab'
import Tools from './Tools'
import{ data }from '@/lib/data'

const tabs = [
    {name: "All", width:"9.7rem"},
    {name: "SEO", width:"9.7rem"},
    {name: "Content", width:"9.7rem"},
    {name: "Market Research", width:"9.7rem"},
    {name: "Advertising", width:"9.7rem"},
    {name: "Social Media", width:"9.7rem"}
]

const Features = () => {
    const [activeTab,setActiveTab] = useState("All")
    const filterData = activeTab === "All" ? data : data.filter((item)=> item.keyword === activeTab)
  return (
    <section className="max-w-screen-2xl mx-20 max-md:px-10   h-screen max-h-[650px]">
      <div>
        <h1 className="font-bold text-2xl">Choose your area of interest</h1>
        <div>
          <NavigationTab
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div>
          {filterData.map((item) => (
            <div key={item.keyword}>
              <Tools keyword={item.keyword} title={item.title} description={item.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features