import React from 'react'

export default function Header(props) {

  const {fetchGeoData, geoData, weatherData} = props

  return (
    <>
    <div className='w-full flex flex-col items-center'>
      <div className='w-full sm:w-10/12 md:w-10/12 lg:w-3/4 2xl:w-7/12 flex flex-col sm:flex-row justify-start xl:justify-between items-center gap-4 p-4'>
        <img className='h-8 w-40' src='/WetterRadar_Logo.png'/>
        <div className='flex justify-between items-center w-full md:max-w-md bg-white h-11 rounded-3xl text-xl text-slate-500 '>
          <input type='text' id='userInput' className='rounded-3xl pl-4 focus:outline-none focus:ring-0 w-full md:min-w-1/2' placeholder='Deine Stadt...' onKeyDown={(e) =>{
            if(e.key === "Enter"){
              fetchGeoData(e.target.value)
            }
          }}></input>
          <button className='pr-4 flex' onClick={() => fetchGeoData(userInput.value)}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className='flex flex-col items-center hidden xl:inline-flex '>
          <p>{geoData?.city}</p>
          <p>{weatherData?.daily.temperature_2m_max[0]}°<span className='text-sm text-slate-200'> / {weatherData?.daily.temperature_2m_min[0]}°</span></p>
        </div>
      </div>
      <hr className='w-full lg:w-3/4 2xl:w-7/12'></hr>
    </div>
    </>
  )
}
