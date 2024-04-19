import React,{useState} from 'react'
import { mean } from "mathjs"

export default function SectionWrapper(props) {

    const {geoData,weatherData,days,weekDays,selDate,setSelDate,extractData} = props

    const currentTime = dayjs().hour()
    const nextDay = selDate.add(1, 'day')
    const directions = ['N','NE','E','SE','S','SW','W','NW']

  return (
    <>
    <div className='flex gap-2 w-1/2 mt-4'>
        {days?.map((day, index) => {
            return (
                <button onClick={() =>{
                    setSelDate(day)
                }} key={index} className={'flex flex-col w-1/6 p-2 rounded-t-lg ' + (selDate.isSame(day, 'day') ? 'bg-white text-dark-blue01' : 'bg-gradient-to-b from-light-blue01 via-dark-blue01 to-light-blue01 text-white hover:text-dark-blue01')}>
                    <div className='flex flex-col items-start w-full'>
                        <p className='font-medium text-lg'>{weekDays[day.day()]} {day.format('DD.MM.')}</p>
                        <div className='flex justify-between px-4 w-full'>
                            <i className="fa-solid fa-cloud-sun-rain fa-2xl mt-5"></i>
                            <div className='flex flex-col'>
                                <p>{weatherData?.daily.temperature_2m_max[index]}°/{weatherData?.daily.temperature_2m_min[index]}°</p>
                                <div><i className="fa-solid fa-umbrella"></i> {weatherData?.daily.precipitation_probability_mean[index]}%</div>
                            </div>
                        </div>
                    </div>
                </button>
            )
        })}
    </div>
    <div className='flex flex-col bg-white text-blue-900 w-1/2 p-8'>
        <div className='flex justify-between w-full bg-light-blue01 text-white p-4'>
            <div>
                <p>Aktuelles Wetter in</p>
                <p className='text-2xl'>{geoData?.city}</p>
            </div>
            <div className='flex items-center'>
                <i className="fa-solid fa-sun fa-2xl pr-4"></i>          
                <div>
                    <p className='text-2xl'>{weatherData?.current.temperature_2m}°</p>
                    <p>sonnig</p>
                </div>
            </div>
        </div>
        <h2 className='text-2xl mt-4'>Wie wird das Wetter heute in {geoData?.city}?</h2>
        
        <div>
            <table className='w-full text-center'>
                <tr className='flex flex-start border border-b-0 border-t-0 border-r-0'>
                    <p className='pl-4 py-4 text-xl'>{weekDays[selDate.day()]} {selDate.format('DD.MM.')}</p>
                </tr>
                <tr>
                    <th className='border border-t-0 border-b-0 text-xl'>
                        Morgens
                    </th>
                    <th className='border border-t-0 border-b-0 text-xl'>
                        Mittags
                    </th>
                    <th className='border border-t-0 border-b-0 text-xl'>
                        Abends
                    </th>
                    <th className='border border-t-0 border-b-0 text-xl'>
                        Nachts
                    </th>
                </tr>
                <tr>
                    <td className='border border-t-0 border-b-0'>
                        06 - 12 Uhr
                    </td>
                    <td className='border border-t-0 border-b-0'>
                        12 - 18 Uhr
                    </td>
                    <td className='border border-t-0 border-b-0'>
                        18 - 22 Uhr
                    </td>
                    <td className='border border-t-0 border-b-0'>
                        22 - 06 Uhr
                    </td>
                </tr>
                <tr>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-sun fa-2xl"></i>
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-sun fa-2xl"></i>
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-sun fa-2xl"></i>
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-sun fa-2xl"></i>
                    </td>
                </tr>


                <tr>
                    <td className='border border-t-0 border-b-0 text-2xl'>
                        <p>
                            {Math.max.apply(Math,weatherData?.hourly.temperature_2m.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(6,13))}°
                            <span className='text-sm'>/ {Math.min.apply(Math,weatherData?.hourly.temperature_2m.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(6,13))}°</span>
                        </p>
                    </td>
                    <td className='border border-t-0 border-b-0 text-2xl'>
                        <p>
                        {Math.max.apply(Math,weatherData?.hourly.temperature_2m.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(12,19))}°
                            <span className='text-sm'>/ {Math.min.apply(Math,weatherData?.hourly.temperature_2m.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(12,19))}°</span>
                        </p>
                    </td>
                    <td className='border border-t-0 border-b-0 text-2xl'>
                        <p>
                            {Math.max.apply(Math,weatherData?.hourly.temperature_2m.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(18,23))}°
                            <span className='text-sm'>/ {Math.min.apply(Math,weatherData?.hourly.temperature_2m.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(18,23))}°</span>
                        </p>
                    </td>
                    <td className='border border-t-0 border-b-0 text-2xl'>
                        <p>
                            {Math.max.apply(Math,weatherData?.hourly.temperature_2m.slice(extractData(selDate).startIndex,extractData(nextDay).endIndex).slice(22,31))}°
                            <span className='text-sm'>/ {Math.min.apply(Math,weatherData?.hourly.temperature_2m.slice(extractData(selDate).startIndex,extractData(nextDay).endIndex).slice(22,31))}°</span>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td className='border border-t-0 border-b-0 text-md'>
                        <p>leicht bewölkt</p>
                    </td>
                    <td className='border border-t-0 border-b-0 text-md'>
                        <p>leicht bewölkt</p>
                    </td>
                    <td className='border border-t-0 border-b-0 text-md'>
                        <p>leicht bewölkt</p>
                    </td>
                    <td className='border border-t-0 border-b-0 text-md'>
                        <p>leicht bewölkt</p>
                    </td>
                </tr>
                <tr className='text-left'>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-umbrella"></i>  {Math.round(mean(weatherData?.hourly.precipitation_probability.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(6,13)))}%
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-umbrella"></i>  {Math.round(mean(weatherData?.hourly.precipitation_probability.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(12,19)))}%
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-umbrella"></i>  {Math.round(mean(weatherData?.hourly.precipitation_probability.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(18,23)))}%
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-umbrella"></i>  {Math.round(mean(weatherData?.hourly.precipitation_probability.slice(extractData(selDate).startIndex,extractData(nextDay).endIndex).slice(22,31)))}%
                    </td>
                </tr>
                <tr className='text-left'>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-location-arrow"></i>  {directions[Math.round(mean(weatherData?.hourly.wind_direction_10m.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(6,13)) / 45) % 8]} {Math.round(mean(weatherData?.hourly.wind_speed_10m.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(6,13)))}km/h
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-location-arrow"></i>  {directions[Math.round(mean(weatherData?.hourly.wind_direction_10m.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(12,19)) / 45) % 8]} {Math.round(mean(weatherData?.hourly.wind_speed_10m.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(12,19)))}km/h
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-location-arrow"></i>  {directions[Math.round(mean(weatherData?.hourly.wind_direction_10m.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(18,23)) / 45) % 8]} {Math.round(mean(weatherData?.hourly.wind_speed_10m.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(18,23)))}km/h
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-location-arrow"></i>  {directions[Math.round(mean(weatherData?.hourly.wind_direction_10m.slice(extractData(selDate).startIndex,extractData(nextDay).endIndex).slice(22,31)) / 45) % 8]} {Math.round(mean(weatherData?.hourly.wind_speed_10m.slice(extractData(selDate).startIndex,extractData(nextDay).endIndex).slice(22,31)))}km/h
                    </td>
                </tr>
                <tr className='text-left'>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-heart"></i>  gefühlt {Math.round(mean(weatherData?.hourly.apparent_temperature.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(6,13)))}°
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-heart"></i>  gefühlt {Math.round(mean(weatherData?.hourly.apparent_temperature.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(12,19)))}°
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-heart"></i>  gefühlt {Math.round(mean(weatherData?.hourly.apparent_temperature.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(18,23)))}°
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-heart"></i>  gefühlt {Math.round(mean(weatherData?.hourly.apparent_temperature.slice(extractData(selDate).startIndex,extractData(nextDay).endIndex).slice(22,31)))}°
                    </td>
                </tr>
                <tr className='text-left'>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-water"></i>  {Math.round(mean(weatherData?.hourly.relative_humidity_2m.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(6,13)))}%
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-water"></i>  {Math.round(mean(weatherData?.hourly.relative_humidity_2m.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(12,19)))}%
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-water"></i>  {Math.round(mean(weatherData?.hourly.relative_humidity_2m.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(18,23)))}%
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-water"></i>  {Math.round(mean(weatherData?.hourly.relative_humidity_2m.slice(extractData(selDate).startIndex,extractData(nextDay).endIndex).slice(22,31)))}%
                    </td>
                </tr>
                <tr className='text-left'>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-crosshairs"></i>  {Math.round(mean(weatherData?.hourly.surface_pressure.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(6,13)))}hPa
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-crosshairs"></i>  {Math.round(mean(weatherData?.hourly.surface_pressure.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(12,19)))}hPa
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-crosshairs"></i>  {Math.round(mean(weatherData?.hourly.surface_pressure.slice(extractData(selDate).startIndex,extractData(selDate).endIndex).slice(18,23)))}hPa
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-crosshairs"></i>  {Math.round(mean(weatherData?.hourly.surface_pressure.slice(extractData(selDate).startIndex,extractData(nextDay).endIndex).slice(22,31)))}hPa
                    </td>
                </tr>

            </table>
        </div>

        <div className='flex justify-between gap-2 w-full p-4'>
            <div className='flex justify-between w-3/4 bg-slate-200 py-2 px-4 rounded-2xl'>
                <span className='flex gap-1'><i className="fa-solid fa-arrow-up"></i><p>{(weatherData?.daily.sunrise.filter(time => time.startsWith(selDate.format('YYYY-MM-DD')))).toString().substring(11,16)}</p></span>
                <span className='flex gap-1'><i className="fa-solid fa-arrow-down"></i><p>{(weatherData?.daily.sunset.filter(time => time.startsWith(selDate.format('YYYY-MM-DD')))).toString().substring(11,16)}</p></span>
                <span className='flex gap-1'><i className="fa-solid fa-sun fa-md"></i><p>{weatherData?.daily.sunshine_duration[extractData(selDate).startDayIndex]}</p></span>
            </div>
            <div className='flex justify-center w-1/4 bg-slate-200 py-2 px-4 rounded-2xl'>
                <span className='flex gap-1'><i class="fa-solid fa-moon"></i><p>Zunehmender Mond</p></span>
            </div>
        </div>
        <div>
            <h2 className='text-2xl mt-4 pb-2'>Stündliche Vorhersage für {geoData?.city}</h2>

            {weatherData?.hourly.time.map((hour,index) =>{

                if( (hour.startsWith(selDate.format('YYYY-MM-DD'))) && (index >= currentTime) ){

                    return(
                        <div key={index} className='grid grid-cols-5 gap-4 border p-4 w-full'>
                            <div>
                                <p className='text-xl'>{hour.slice(11,16)} - {((parseInt(hour.slice(11,13))+1 == 24 ? 0 : parseInt(hour.slice(11,13))+1).toString().length == 1 ? '0' + (parseInt(hour.slice(11,13))+1 == 24 ? 0 : parseInt(hour.slice(11,13))+1).toString() : (parseInt(hour.slice(11,13))+1 == 24 ? 0 : parseInt(hour.slice(11,13))+1).toString()) + ':00'} Uhr</p>
                                <p>wolkig</p>
                            </div>
                            <div className='flex items-center justify-right gap-2'>
                                <i class="fa-solid fa-cloud-sun fa-xl"></i>
                                <p className='text-2xl'>{weatherData?.hourly.temperature_2m[index]}°</p>
                            </div>
                            <div className='flex items-center justify-right gap-2'>
                                <i className="fa-solid fa-umbrella fa-xl"></i>
                                <p>{weatherData?.hourly.precipitation_probability[index]}%</p>
                            </div>
                            <div className='flex items-center justify-right gap-2'>
                                <i className="fa-solid fa-droplet fa-xl"></i>
                                <p>{weatherData?.hourly.precipitation[index]}l/m<sup>2</sup></p>
                            </div>
                            <div className='flex items-center justify-right gap-2'>
                                <i className="fa-solid fa-location-arrow fa-xl"></i> {directions[Math.round(weatherData?.hourly.wind_direction_10m[index] / 45) % 8]}
                                <p>{weatherData?.hourly.wind_speed_10m[index]}km/h</p>
                            </div>
                        </div>
                    )
                }
            })}

        </div>
    </div>
    
    </>     
  )
}
