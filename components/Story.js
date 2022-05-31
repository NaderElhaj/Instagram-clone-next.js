import React from 'react'

function Story({img,username}) {
  return (
    <div className=''>
      <img className=' h-14 w-14 object-cover  p-[1.5px] border-red-500 border-2 cursor-pointer rounded-full hover:scale-110 transition transform duration-200 ease-out ' src={img} alt="Profile Pic"   />
      <p className='text-xs w-14 truncate text-center'>{username}  </p>
    </div>
  )
}

export default Story