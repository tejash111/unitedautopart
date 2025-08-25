"use client"
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { Star } from 'lucide-react'
import { Card, CardHeader, CardTitle } from './ui/card'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/aboutus' },
    { name: 'Our policy', path: '/policy' },
    { name: 'Auto Parts', path: '/autoparts' },
    { name: 'Contact', path: '/contact' }
  ]

  const handleNavigation = (path :string) => {
    router.push(path)
  }

  const isActive = (path : string) => {
    return pathname === path
  }

  return (
    <div className='flex items-center justify-between h-16 border-b-1 dark:border-white/[0.2] shadow bg-black'>
      <div className='flex items-center justify-center ml-5 text-2xl text-gray-300'>
        logo
      </div>
      
      <div className='flex justify-center items-center gap-3 '>
        {navItems.map((item) => (
          <Button 
            key={item.path}
            className={`transition-colors duration-200 text-[15px] ${
              isActive(item.path)
                ? ' text-gray-400 shadow-md' 
                : ' text-gray-200 hover:text-gray-500'
            }`}
            onClick={() => handleNavigation(item.path)}
          >
            {item.name}
          </Button>
        ))}
      </div>
      
      <div className='flex items-center justify-center gap-20 mr-6'>
        <div>
          <div className='text-center text-lg text-gray-300'>REVIEWS</div>
          <div className='flex justify-center'>
            <Star fill={'#FFBF00'} height={16} width={16}/>
            <Star fill={'#FFBF00'} height={16} width={16} />
            <Star fill={'#FFBF00'} height={16} width={16}/>
            <Star fill={'#FFBF00'} height={16} width={16} />
            <Star fill={'#FFBF00'} height={16} width={16}/>
          </div>
        </div>
                 
        <div className=''>
          <Button className='text-gray-300' variant={'outline'}>+1234234234</Button>
        </div>
      </div>
    </div>
  )
}

export default Header