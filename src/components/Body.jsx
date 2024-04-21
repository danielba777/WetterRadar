import React from 'react'
import SectionWrapper from './SectionWrapper'

export default function Body(props) {

  const {geoData,weatherData,days,weekDays,selDate,setSelDate,extractData,getWeatherCode,nextDay} = props

  return (
    <section className='flex flex-col items-center justify-center mt-8 w-full p-0'>    
        <div className='flex flex-col items-start w-full sm:w-10/12 md:w-10/12 lg:w-3/4 2xl:w-7/12'>
            <h1 className='text-2xl ml-4 md:ml-0 md:text-2xl lg:text-4xl'>Das Wetter heute in {geoData?.city}</h1>
        </div>
        <SectionWrapper geoData={geoData} weatherData={weatherData} days={days} weekDays={weekDays} selDate={selDate} setSelDate={setSelDate} extractData={extractData} getWeatherCode={getWeatherCode} nextDay={nextDay}/>
    </section>
  )
}
