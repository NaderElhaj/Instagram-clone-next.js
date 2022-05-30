import Image from 'next/image'
import React from 'react'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import {HomeIcon} from "@heroicons/react/solid"
function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0">
      <div className="flex max-w-6xl justify-between bg-white mx-5 lg:mx-auto">
        <div className="relative hidden h-24 w-24 cursor-pointer lg:inline-grid">
          <Image
            src="/images/instagram.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10  flex-shrink-0 cursor-pointer lg:hidden">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className='max-w-xs'>
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon className='navBtn' />  
          <MenuIcon className='h-6 md:hidden cursor-pointer' />
          <div className='relative navBtn'>
            <PaperAirplaneIcon className='navBtn rotate-45' />
            <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>

          </div>
          <PlusCircleIcon className='navBtn'/>
          <UserGroupIcon  className='navBtn'/>
          <HeartIcon className='navBtn' /> 
          <img src="images/me.jpg" alt="profile pic" className='h-10 w-10 rounded-full cursor-pointer object-cover' />
          
        </div>
      </div>
    </div>
  )
}

export default Header
