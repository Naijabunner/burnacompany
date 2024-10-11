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
    console.log(activeTab);
    const filterData =
      activeTab === "All"
        ? data
        : data.filter((item) => {
            console.log(item.keyword);
            return item.keyword.toLowerCase() === activeTab.toLowerCase();
          });
  return (
    <section className="mx-20 max-md:px-10   h-screen max-h-[650px]">
      <div>
        <h3 className="font-bold text-3xl">Choose your area of interest</h3>
        <div className='mb-10'>
          <NavigationTab
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filterData.map((item,index) => (
            <div key={index}>
              <Tools
                keyword={item.keyword}
                title={item.title}
                description={item.description}
                learn={item.learn}
                tools={item.tools}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features