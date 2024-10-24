import ginger from '@/Assets/shared/create-content.svg'
import ginger1 from '@/Assets/shared/keyword-overview.svg'
import ginger2 from '@/Assets/shared/seo-content-template.svg'
import ginger3 from '@/Assets/shared/topic-research.svg'
import location from '@/Assets/shared/icons8-location-24.png'
import message from '@/Assets/shared/icons8-message-50.png'
import telephone from '@/Assets/shared/icons8-telephone-32.png'
import { Binoculars, Lightbulb, Megaphone, SquareChartGantt } from 'lucide-react'

import { StaticImageData } from 'next/image'
interface dataItem  {
    keyword: string,
    title: string,
    description: string
    learn: string
    tools: string
    image?: string
}

interface GetInTouch {
    details: string,
    image: StaticImageData
}
export const data: dataItem[] = [
    {
        keyword: "SEO",
        title: "Keyword Research ",
        description: "Bring traffic to your site by finding the best keywords",
         learn: "Learn more",
         tools: "6 tools",
         image: ginger
            
    },
    {
        keyword: "SEO",
        title: "On-page SEO ",
        description: "Get new ideas to improve your site’s health and SEO performance",
         learn: "Learn more",
         tools: "3 tools",
         image:ginger1
    },
    {
        keyword: "SEO",
        title: "Local SEO",
        description: " Optimize your site for local searches to get more customers in your area",
        learn: "Learn more",
        tools: "6 tools",
        image: ginger2
    },
    {
        keyword: "SEO",
        title: "Rank Tracking ",
        description: "Track daily changes of your target keywords in your target location",
        learn: "Learn more",
        tools: "4 tools",
        image: ginger3
    },
    {
        keyword: "SEO",
        title: "Link Building ",
        description: " Find unique opportunities to strengthen your backlink profile",
        learn: "Learn more",
        tools: "6 tools"
    },
    {
        keyword: "SEO",
        title: "Competitor SEO Analysis ",
        description: "Find all of the keywords and content in your competitor's strategy",
         learn: "Learn more",
         tools: "8 tools"
    },
    {
        keyword: "Social Media",
        title: "Social Media Management",
        description: " Increase your brand awareness with our social media posting and analytics platform",
        learn: "Learn more",
        tools: "3 tools"
    },
    {
        keyword: "Content",
        title: "Content Marketing",
        description: "Develop a powerful content strategy with data-driven solutions",
        learn: "Learn more",
        tools: "4 tools"
    },
    {
        keyword: "Content",
        title: "Content Creating and Distribution",
        description: "Create and share traffic-driving articles that make your target audience take action",
        learn: "Learn more",
        tools: "3 tools"
    },
    {
        keyword: "Content",
        title: "Content Optimization",
        description: "Drive more organic traffic with personalized recommendations to optimize your content",
        learn: "Learn more",
        tools: "3 tools" 
    },
   
    {
        keyword: "Advertising",
        title: "PPC Keyword Research",
        description: "Build your perfect paid search campaign with our keyword research tools",
        learn: "Learn more",
        tools: "4 tools" 
    },
    {
        keyword: "Advertising",
        title: "Website Monetization",
        description: "Monetize your audience with our powerful tools for bloggers, ad publishers, and affiliate managers",
        learn: "Learn more",
        tools: "2 tools" 
    },
    {
        keyword: "Advertising",
        title: "Paid Ad Management",
        description: "Set up, launch, and optimize your paid ads campaigns directly through Semrush",
        learn: "Learn more",
        tools: "1 tools" 
    },
    {
        keyword: "Market Research",
        title: "Competitor Analysis",
        description: "Boost your performance by unpacking competitor strategies with daily and weekly traffic data.",
        learn: "Learn more",
        tools: "5 tools" 
    },
    {
        keyword: "Market Research",
        title: "Market Analysis",
        description: "Analyze your position and get ahead of the competition in a current or new market",
        learn: "Learn more",
        tools: "2 tools" 
    },
    {
        keyword: "Market Research",
        title: "Paid Advertising",
        description: "See the paid keywords and ad copy from your competitor's PPC ads to craft a winning strategy",
        learn: "Learn more",
        tools: "3 tools" 
        
    },
    {
        keyword: "Market Research",
        title: "Competitor PR Monitoring",
        description: "Track your rivals’ online mentions and social media presence to build your brand’s reputation",
        learn: "Learn more",
        tools: "1 tool" 
    },
]

     export const categories=[
     {
       label:'Digital marketing',
       value:'Digital',
       icon:Megaphone
     },
     {
       label:'SEO',
       value:'SEO',
       icon:Binoculars
     },
     {
       label:'Content management',
       value:'Content_mgt',
       icon:SquareChartGantt
     },
     {
       label:'Tips',
       value:'Tips',
       icon: Lightbulb
     }
   ]

export const companyLinks = [
    'Popular Service',
    'Team Members',
    'Privacy & Setting',
    'Pricing Package'
  ]
 export const CommunityLinks = [
    'Company overview',
    'Teams',
    'Careers',
    'Testimonals',
    'Core Traits'
  ]

//   export const GetInTouch:GetInTouch[] = [
//   {
//     details: '55 Main Street block Malborne, Australia',
//     image: location,
//   },
//   {
//     details: 'support@gmail.com',
//     image: message,
//   },
//   {
//     details: '+000 (123)456 88',
//     image: telephone,
//   },
// ];

    
  
  
 export const tabs = [
      {name: "All", width:"9.7rem"},
      {name: "SEO", width:"9.7rem"},
      {name: "Content", width:"9.7rem"},
      {name: "Market Research", width:"9.7rem"},
      {name: "Advertising", width:"9.7rem"},
      {name: "Social Media", width:"9.7rem"}
  ]