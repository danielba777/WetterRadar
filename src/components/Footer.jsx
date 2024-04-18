import React from 'react'

export default function Footer() {
  return (
    <div className='w-full flex flex-col items-center'>
        <div className='w-1/2 flex flex-col justify-start items-center gap-8 py-8'>
            <hr className='w-full'></hr>
            <div className='flex items-center gap-1'>
                <i className="fa-regular fa-copyright h-4"></i> 
                <p className='h-4'>2024 WetterRadar - alle Rechte vorbehalten</p>
            </div>
        </div>
    </div>
  )
}
