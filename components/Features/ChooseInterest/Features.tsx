'use client'

import React, { useState } from 'react'
import NavigationTab from './NavigationTab'
import Tools from './Tools'
import Card from '@/components/Features/ChooseInterest/Card'
import{ data, tabs }from '@/lib/data'
import Hero from '../Hero'

const dummydesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam natus quidem asperiores, tenetur iusto harum. Fugiat sapiente repellendus id, magnam mollitia voluptas provident deleniti consequuntur maiores vitae nulla, sequi nobis!"

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
    <section className=" max-md:px-[5%] h-screen min-h-fit">
      <div className=" md:mx-20">
        <Hero title='Our Tools' inside="Fuziondot's" description={dummydesc}/>
        <h3 className="font-bold text-3xl">Choose your area of interest</h3>
        <div className="mb-10">
          <NavigationTab
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filterData.map((item, index) => (
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
        <Card />
      </div>
    </section>
  );
}

export default Features