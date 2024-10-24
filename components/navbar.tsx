'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Hambuger from "./ui/HambugerBtn"
import Image, { StaticImageData } from "next/image"
import logo from "@/assets/FuziondotLogoNew.svg"
import { SideNavItem } from "./navigation/SideNavItem"

export interface subItem{
  title:string,
  href:string
}

export interface navs{
  title:string,
  href?: string,
  items?:subItem[]
}

const navData: navs[] = [
  {
    title: "Services",
    items: [
      {
        title: "Search Engine Optimization (SEO)",
        href: "",
      },
      {
        title: "Social media management",
        href: "",
      },
      {
        title: "Content Marketing",
        href: "",
      },
      {
        title: "Web Development",
        href: "",
      },
      {
        title: "E-commerce Specialist",
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
        title: "FAQ",
        href: "/Faq",
      },
      {
        title: "Help Center",
        href: "/ContactUs",
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
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLLabelElement>(null); 


  // Toggle the body scroll based on navbar visibility
  useEffect(() => {
    if (isNavbarOpen) {
      document.body.style.overflowY = "hidden"; // Lock scroll
    } else {
      document.body.style.overflowY = "auto"; // Unlock scroll
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isNavbarOpen]);

  // Close navbar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node) && 
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setIsNavbarOpen(false);
      }
    };

    if (isNavbarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavbarOpen]);

  return (
    <nav className=' bg-white flex items-center justify-between px-6 py-5 md:py-7 lg:px-10  max-w-screen-2xl mx-auto '>
      <Logo logo={logo} />
      <div className='flex items-center space-x-5  max-lg:hidden flex-wrap'>
        {navData.map((data, index) => {
          return <NavItem {...data} key={index} />;
        })}
      </div>
      {/* others */}
      <div className='flex items-center gap-x-5 font-semibold  '>
        <Link href={""} className='text-base max-lg:hidden'>
          Contact Sales
        </Link>
        <Link href={""} className='text-base max-lg:hidden'>
          Login
        </Link>
        <Button
          size={"sm"}
          className=' max-sm:hidden font-medium rounded-full h-10 px-5 shadow '
        >
          Sign up free →
        </Button>
        {/* hambuger btn for small screen */}
        <Hambuger ref={hamburgerRef} checked={isNavbarOpen} action={setIsNavbarOpen} />
      </div>

      {/* sidenav for smaller screens */}
        <SideNav isOpen={isNavbarOpen} ref={navbarRef} navItems={navData}/> 
      
    
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
      <Link href={href} className="hover:text-primary font-semibold text-base text-gray-700 hover:text-gray-900">
        {title}
      </Link>
    )
  }

  return (
    <div className="relative group font-semibold " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
              className="block px-4 py-3 text-sm font-semibold  text-black hover:bg-black hover:bg-opacity-5 hover:text-primary hover:text-gray-900"
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
//logo
function Logo({ logo }:{ logo : StaticImageData}){
  return(
    <>
       {/* logo for small screen  */}
      {/* responsiveness break is lg */}
      <Link href='/' className='text-2xl font-bold mr-4 lg:hidden'>
        <Image src={logo} alt='logo' width={150} height={170} />
      </Link>
      {/* logo and navItems for large screen */}
      <div className='flex items-center space-x-5  max-lg:hidden flex-wrap'>
        <Link href='/' className='text-2xl font-bold mr-5'>
          <Image src={logo} alt='logo' width={175} height={175} />
        </Link>
        </div>
    </>
  )
}
// side nav
function SideNav({isOpen, navItems, ref }: {isOpen:boolean, navItems : navs[], ref: React.LegacyRef<HTMLElement>}){
  return(
    <aside ref={ref} className={ `${!isOpen?"!w-0 ": "min-w-[200px] w-[70%] md:w-[50%]"} transition-all ease-in-out overflow-hidden lg:hidden z-50 absolute bg-white min-h-screen   left-0 -bottom-20 pt-2`}>
       <SideNavItems items={navItems}/>
       <div className="bg-blue-500 h"></div>
    </aside>
 )
}

// map nav items
// move item to its own component and it will work 
function SideNavItems({ items }: { items : navs[]}){
  return(
    <>
      <div className=" my-5 mx-5 text-gray-700 text-sm">
        {items.map((item, index)=>{
        return(
          <SideNavItem item={item} key={index}/>
        )
        })}
        
      </div>
    </>
  )
}