'use client'

import * as React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Hambuger from "./ui/HambugerBtn"

export function NavbarComponent() {
  return (
    <nav className=" flex items-center justify-between px-6 py-3 md:py-6 lg:px-10 border-b max-w-screen-2xl mx-auto " >
      {/* logo for small screen  */}
      {/* responsiveness break is lg */}
      <Link href="/" className="text-2xl font-bold text-indigo-600 mr-4 lg:hidden">
          NAME
        </Link>
        {/* logo and navItems for large screen */}
      <div className="flex items-center space-x-5  max-lg:hidden ">
        <Link href="/" className="text-2xl font-bold text-indigo-600 ">
          NAME
        </Link>
        <NavItem title="Services" items={["Feature 1", "Feature 2", "Feature 3"]} />
        <NavItem title="Features" href="/enterprise"/>
        <NavItem title="Our Company" items={["Resource 1", "Resource 2", "Resource 3"]} />
        <NavItem title="Pricing" href="/enterprise" />
        <NavItem title="Our Data" href="/pricing" />
        <NavItem title="Blogs" href="/blog"  />
      </div>
      <div className="flex items-center gap-x-5 ">
        <Link href={''} className="text-base max-lg:hidden">Contact Sales</Link>
        <Link href={''} className="text-base max-lg:hidden">Login</Link>
        <Button size={"sm"} className=" max-sm:hidden border-2 border-solid border-zinc-800 shadow-[3px_3px_0px_rgba(46,47,53,1)]">Sign up free →</Button>
        {/* hambuger btn for small screen */}
        <Hambuger/>
      </div>
    </nav>
  )
}





// nav item
function NavItem({ title, href, items }: { title: string; href?: string; items?: string[] }) {
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
        <div className="py-1 relative  bg-black" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {items?.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="block px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}