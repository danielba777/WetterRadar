import React from 'react'
import SectionWrapper from './SectionWrapper'

export default function Body(props) {

  const {geoData,weatherData,days,weekDays,selDate,setSelDate,extractData,getWeatherCode,nextDay} = props

  return (
    <section className='flex flex-col items-center mt-8'>    
        <div className='flex flex-col items-start w-2/4'>
            <h1 className='text-4xl'>Das Wetter heute in {geoData?.city}</h1>
        </div>
        <SectionWrapper geoData={geoData} weatherData={weatherData} days={days} weekDays={weekDays} selDate={selDate} setSelDate={setSelDate} extractData={extractData} getWeatherCode={getWeatherCode} nextDay={nextDay}/>
    </section>
  )
}
