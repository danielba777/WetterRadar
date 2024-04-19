import React from 'react'

export default function Header(props) {

  const {fetchGeoData, geoData, weatherData} = props

  return (
    <>
    <div className='w-full flex flex-col items-center'>
      <div className='w-1/2 flex justify-start items-center gap-4 p-4'>
          <img className='h-8 w-40' src='./public/WetterRadar_Logo.png'/>
          <input type='text' id='userInput' className='h-11 w-72 rounded-3xl text-slate-500 p-4 text-xl' placeholder='Deine Stadt...' onKeyDown={(e) =>{
            if(e.key === "Enter"){
              fetchGeoData(e.target.value)
            }
          }}></input>
          <div className='flex flex-col justify-center items-center gap-y-0'>
              <p>{geoData?.city}</p>
              <p>{weatherData?.daily.temperature_2m_max[0]}°<span className='text-sm text-slate-200'> / {weatherData?.daily.temperature_2m_min[0]}°</span></p>
          </div>
      </div>
      <hr className='w-2/4'></hr>
    </div>
    </>
  )
}
