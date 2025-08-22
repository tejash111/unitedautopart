import React from 'react'
import { Button } from './ui/button'
import { Star } from 'lucide-react'
import { Card, CardHeader, CardTitle } from './ui/card';


const Header = () => {
  return (
    <div className='flex items-center justify-between h-16 border-b-1 border-gray-500 shadow bg-black'>
      <div className='flex items-center justify-center ml-5 text-2xl text-gray-300'>
        logo
      </div>
      <div className='flex justify-center items-center gap-3'> 
        <Button className='text-gray-300'>Home</Button>
        <Button className='text-gray-300'>About us</Button>
        <Button className='text-gray-300'>Our policy</Button>
        <Button className='text-gray-300'>Auto Parts</Button>
        <Button className='text-gray-300'>Contact</Button>
      </div>
      <div className='flex items-center justify-center gap-20 mr-6'>
        <div>
          <div className='text-center text-lg text-gray-300'>REVIEWS</div>
        <div className='flex justify-center'>
          <Star  fill={'#FFBF00'} height={16} width={16}/>
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