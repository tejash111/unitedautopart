"use client"
import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { Star, Menu, X } from 'lucide-react'
import { Card, CardHeader, CardTitle } from './ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/aboutus' },
    {
      name: 'Our policy',
      path: '/policy',
      dropdown: [
        { name: 'Return Policy', path: '/policy/return' },
        { name: 'Cancel Policy', path: '/policy/cancel' },
        { name: 'Warranty Policy', path: '/policy/warranty' },
      ]
    },
    {
      name: 'Auto Parts',
      path: '/autoparts',
      dropdown: [
        { name: 'Used Engine', path: '/autoparts/engine' },
        { name: 'Used Transmission', path: '/autoparts/transmission' },
        { name: 'Used Transfer Case', path: '/autoparts/transfer-case' },
        { name: 'Used Steering Column', path: '/autoparts/steering' },
        { name: 'Used Car Airbag', path: '/autoparts/airbag' },
        { name: 'Used ABS Module', path: '/autoparts/abs' },
        { name: 'Used Cylinder Head', path: '/autoparts/cylinder' },
        { name: 'Used Alternators', path: '/autoparts/alternators' },
        { name: 'Used Bumpers', path: '/autoparts/bumpers' },
        { name: 'Used Radiators', path: '/autoparts/radiators' },
        { name: 'Used Turbo', path: '/autoparts/turbo' },
        { name: 'Used Axle', path: '/autoparts/axle' }
      ]
    },
    { name: 'Contact', path: '/contact' }
  ]

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className='relative'>
      {/* Header Bar */}
      <div className='fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm'>
        <div className='flex items-center justify-between h-16 px-4 mx-auto max-w-7xl'>
          <div className='text-xl lg:text-2xl text-gray-300 font-bold'>
            United Auto
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden w-10 h-10 flex items-center justify-center text-white focus:outline-none rounded-md hover:bg-gray-800 transition-colors'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className='hidden md:flex justify-center items-center gap-2 lg:gap-3'>
            {navItems.map((item) => (
              item.dropdown ? (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.path)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <DropdownMenu open={openDropdown === item.path}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        className={`transition-colors duration-200 text-sm lg:text-[15px] ${isActive(item.path)
                          ? 'text-gray-400 shadow-md'
                          : 'text-gray-200 hover:text-gray-500'
                          }`}
                      >
                        {item.name}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-56 bg-black/95 border-gray-800 backdrop-blur-sm"
                      onMouseEnter={() => setOpenDropdown(item.path)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <DropdownMenuItem
                          key={dropdownItem.path}
                          className="text-gray-200 hover:text-gray-400 cursor-pointer"
                          onClick={() => handleNavigation(dropdownItem.path)}
                        >
                          {dropdownItem.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <Button
                  key={item.path}
                  className={`transition-colors duration-200 text-sm lg:text-[15px] ${isActive(item.path)
                    ? 'text-gray-400 shadow-md'
                    : 'text-gray-200 hover:text-gray-500'
                    }`}
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.name}
                </Button>
              )
            ))}
          </div>

          {/* Desktop Reviews and Contact */}
          <div className='hidden md:flex items-center justify-center gap-8 lg:gap-20'>
            <div>
              <div className='text-center text-sm lg:text-lg text-gray-300'>REVIEWS</div>
              <div className='flex justify-center'>
                <Star fill={'#FFBF00'} height={14} width={14} className="lg:h-4 lg:w-4" />
                <Star fill={'#FFBF00'} height={14} width={14} className="lg:h-4 lg:w-4" />
                <Star fill={'#FFBF00'} height={14} width={14} className="lg:h-4 lg:w-4" />
                <Star fill={'#FFBF00'} height={14} width={14} className="lg:h-4 lg:w-4" />
                <Star fill={'#FFBF00'} height={14} width={14} className="lg:h-4 lg:w-4" />
              </div>
            </div>

            <div>
              <Button className='text-gray-300 text-sm lg:text-base' variant={'outline'}>+1234234234</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-16 bg-black/98 z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
      >
        <div className='h-full overflow-y-auto pb-16'>
          <div className='max-w-lg mx-auto px-6 py-8'>
            {/* Page Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">MENU</h1>
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <a href="/" className="hover:text-white">Home</a>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="space-y-6">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.dropdown ? (
                    <div className="space-y-3">
                      <div className="text-lg lg:text-xl font-bold text-white border-b border-gray-800 pb-2">
                        {item.name}
                      </div>
                      <div className="grid gap-2 pl-4">
                        {item.dropdown.map((dropdownItem) => (
                          <button
                            key={dropdownItem.path}
                            className="w-full text-left py-2 text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
                            onClick={() => {
                              handleNavigation(dropdownItem.path)
                              setMobileMenuOpen(false)
                            }}
                          >
                            {dropdownItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      className="w-full text-left text-lg lg:text-xl font-bold text-white border-b border-gray-800 pb-2"
                      onClick={() => {
                        handleNavigation(item.path)
                        setMobileMenuOpen(false)
                      }}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Reviews and Contact */}
            <div className="mt-12 pt-6 border-t border-gray-800">
              <div className="text-center mb-6">
                <div className='text-lg lg:text-xl font-bold text-white mb-3'>REVIEWS</div>
                <div className='flex justify-center gap-1 lg:gap-2'>
                  <Star fill={'#FFBF00'} height={20} width={20} className="lg:h-6 lg:w-6" />
                  <Star fill={'#FFBF00'} height={20} width={20} className="lg:h-6 lg:w-6" />
                  <Star fill={'#FFBF00'} height={20} width={20} className="lg:h-6 lg:w-6" />
                  <Star fill={'#FFBF00'} height={20} width={20} className="lg:h-6 lg:w-6" />
                  <Star fill={'#FFBF00'} height={20} width={20} className="lg:h-6 lg:w-6" />
                </div>
              </div>
              <button className='w-full py-4 text-lg lg:text-xl font-bold text-white bg-transparent hover:bg-gray-800 transition-colors rounded'>
                +1234234234
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header