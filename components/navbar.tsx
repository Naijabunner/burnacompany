'use client'

import * as React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Hambuger from "./ui/HambugerBtn"
import Image from "next/image"
import logo from "@/assets/FuziondotLogoNew.svg"

interface subItem{
  title:string,
  href:string
}

interface navs{
  title:string,
  href?: string,
  items?:subItem[]
}

const navData: navs[] = [
  {
    title: "Services",
    items: [
      {
        title: "SEO",
        href: "",
      },
      {
        title: "SEO",
        href: "",
      },
      {
        title: "SEO",
        href: "",
      },
    ],
  },
  {
    title: "Features",
    href: '/features' 
  },
  {
    title: "Our Company",
    items: [
      {
        title: "SEO",
        href: "",
      },
      {
        title: "SEO",
        href: "",
      },
      {
        title: "SEO",
        href: "",
      },
    ],
  },
  {
    title: "Pricing",
    href:"/pricing"
  },
  {
    title: "Our Data",
    href:"/data"
  },
  {
    title: "Blog",
    href:"/blog"
  },
];

export function NavbarComponent() {
  return (
    <nav className=' bg-white flex items-center justify-between px-6 py-3 md:py-6 lg:px-10 border-b max-w-screen-2xl mx-auto '>
      {/* logo for small screen  */}
      {/* responsiveness break is lg */}
      <Link href='/' className='text-2xl font-bold mr-4 lg:hidden'>
        <Image src={logo} alt='logo' width={125} height={150} />
      </Link>
      {/* logo and navItems for large screen */}
      <div className='flex items-center space-x-5  max-lg:hidden '>
        <Link href='/' className='text-2xl font-bold mr-5'>
          <Image src={logo} alt='logo' width={150} height={150} />
        </Link>
        {navData.map((data, index) => {
          return <NavItem {...data} key={index} />;
        })}
        {/* <NavItem title='Services' items={["SEO", "Feature 2", "Feature 3"]} />
        <NavItem title='Features' href='/features' />
        <NavItem
          title='Our Company'
          items={["Resource 1", "Resource 2", "Resource 3"]}
        />
        <NavItem title='Pricing' href='/enterprise' />
        <NavItem title='Our Data' href='/pricing' />
        <NavItem title='Blogs' href='/blog' /> */}
      </div>
      <div className='flex items-center gap-x-5 '>
        <Link href={""} className='text-base max-lg:hidden'>
          Contact Sales
        </Link>
        <Link href={""} className='text-base max-lg:hidden'>
          Login
        </Link>
        <Button
          size={"sm"}
          className=' max-sm:hidden rounded-full h-10 px-5 shadow '
        >
          Sign up free →
        </Button>
        {/* hambuger btn for small screen */}
        <Hambuger />
      </div>

      {/* sidenav for smaller screens */}
      {/* <SideNav /> */}
    </nav>
  );
}









// nav item
function NavItem({ title, href, items }: navs) {
  const [isOpen, setIsOpen] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 300)
  }

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  if (href) {
    return (
      <Link href={href} className="hover:text-primary text-base text-gray-700 hover:text-gray-900">
        {title}
      </Link>
    )
  }

  return (
    <div className="relative group " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="absolute -top-6 left-0 w-full h-6  " />
      <button className="flex hover:text-primary items-center text-base  text-gray-700 ">
        {title} <ChevronDown className="w-5 h-5 ml-1" />
      </button>
      <div 
        className={cn(
          "absolute  left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px] pointer-events-none"
        )}
      >
        <div className="py-1 relative rounded-lg  bg-white" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm font-medium  text-black hover:bg-purple-400 hover:text-gray-900"
              role="menuitem"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


function SideNav(){
  return(
    <aside className=" z-50 absolute bg-primary min-h-screen w-[150px] sm:w-[250px] left-0 -bottom-[100vh]">
       {/* <Link href="/" className="text-2xl font-bold mr-4 lg:hidden h-[100px] flex justify-center items-center bg">
      <Image
          src={logo}
          alt="logo"
          width={125}
          height={150}
          />
        </Link> */}
       <SideNavItems/>
       <div className="bg-blue-500 h"></div>
    </aside>
 )
}

function SideNavItems({ items }){
  return(
    <>
      <ul className=" my-5 mx-5 text-white text-sm">
        <li className=" font-medium flex h-11 justify-between items-center border-b">
          SEO
        </li>
        <li className=" font-medium flex h-11 justify-between items-center border-b">
          SEO
          <ChevronDown className=" absolute right-5"/>
        </li>
        <li className=" font-medium flex h-11 justify-between items-center border-b">
          SEO
        </li>
        <li className=" font-medium flex h-11 justify-between items-center border-b">
          SEO
          <ChevronDown className=" absolute right-5"/>
        </li>
      </ul>
    </>
  )
}