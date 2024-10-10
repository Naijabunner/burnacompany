'use client'

import * as React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function NavbarComponent() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b max-w-screen-2xl mx-auto " >
      <div className="flex items-center space-x-5 px-5 ">
        <Link href="/" className="text-4xl font-bold text-indigo-600 mr-4">
          miro
        </Link>
        <NavItem title="Services" items={["Feature 1", "Feature 2", "Feature 3"]} />
        <NavItem title="Resources" items={["Solution 1", "Solution 2", "Solution 3"]} />
        <NavItem title="Our Company" items={["Resource 1", "Resource 2", "Resource 3"]} />
        <NavItem title="Pricing" href="/enterprise" />
        <NavItem title="Our Data" href="/pricing" />
        <NavItem title="Blogs" href="/pricing" />
      </div>
      <div className="flex items-center space-x-2 ">
        <Button variant="ghost" className="text-lg">Contact Sales</Button>
        <Button variant="ghost" className="text-lg">Login</Button>
        <Button className="text-lg">Sign up free →</Button>
      </div>
    </nav>
  )
}

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
      <Link href={href} className="text-lg font-medium text-gray-700 hover:text-gray-900">
        {title}
      </Link>
    )
  }

  return (
    <div className="relative group " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="absolute -top-6 left-0 w-full h-6  " />
      <button className="flex items-center text-lg font-medium text-gray-700 group-hover:text-gray-900">
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
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}