import React from 'react'

export default function Footer() {
  return (
    <div className='w-full flex flex-col items-center p-8'>
        <p className='text-xl'>Folgen Sie WetterRadar auf</p>
        <div className='flex gap-4 pb-8 pt-4'>
          <button><i class="fa-brands fa-facebook fa-xl"></i></button>
          <button><i class="fa-brands fa-instagram fa-xl"></i></button>
          <button><i class="fa-brands fa-square-x-twitter fa-xl"></i></button>
          <button><i class="fa-brands fa-linkedin fa-xl"></i></button>
        </div>
        <hr className='w-full'></hr>
        <div className='flex flex-col items-center gap-4 py-4'>
          <p>Datenschutz & Cookies</p>
          <p>Kontakt & Support</p>
          <p>Impressum</p>
          <p>Compliance</p>
        </div>
        <hr className='w-full'></hr>
        <div className='w-full flex flex-col justify-start items-center gap-8 py-4'>
            <div className='flex items-center gap-1'>
                <i className="fa-regular fa-copyright h-4"></i> 
                <p className='h-4'>2024 WetterRadar - alle Rechte vorbehalten</p>
            </div>
        </div>
    </div>
  )
}
