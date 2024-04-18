import React from 'react'
import SectionWrapper from './SectionWrapper'

export default function Body() {
  return (
    <section className='flex flex-col items-center mt-8'>    
        <div className='flex flex-col items-start w-2/4'>
            <h1 className='text-4xl'>Das Wetter heute in Berlin</h1>
        </div>
        <SectionWrapper />
    </section>
  )
}
