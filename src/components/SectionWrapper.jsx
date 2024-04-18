import React,{useId, useState} from 'react'

export default function SectionWrapper() {

    const day00 = dayjs()
    const day01 = day00.add(1, 'day')
    const day02 = day00.add(2, 'day')
    const day03 = day00.add(3, 'day')
    const day04 = day00.add(4, 'day')
    const day05 = day00.add(5, 'day')

    const days = [day00,day01,day02,day03,day04,day05]
    const weekDays = ['So','Mo','Di','Mi','Do','Fr','Sa']

    const [selDate,setSelDate] = useState(day00)

  return (
    <>
    <div className='flex gap-2 w-1/2 mt-4'>
        {days.map((day) => {
            return (
                <button onClick={() =>{
                    setSelDate(day)
                }} key={useId} className={'flex flex-col w-1/6 p-2 rounded-t-lg ' + (selDate.isSame(day, 'day') ? 'bg-white text-dark-blue01' : 'bg-gradient-to-b from-light-blue01 via-dark-blue01 to-light-blue01 text-white hover:text-dark-blue01')}>
                    <div className='flex flex-col items-start w-full'>
                        <p className='font-medium text-lg'>{weekDays[day.day()]} {day.format('DD.MM.')}</p>
                        <div className='flex justify-between px-4 w-full'>
                            <i className="fa-solid fa-cloud-sun-rain fa-2xl mt-5"></i>
                            <div className='flex flex-col'>
                                <p>11°/3°</p>
                                <div><i className="fa-solid fa-umbrella"></i> 75%</div>
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
                <p className='text-2xl'>Berlin</p>
            </div>
            <div className='flex items-center'>
                <i className="fa-solid fa-sun fa-2xl pr-4"></i>          
                <div>
                    <p className='text-2xl'>6°</p>
                    <p>sonnig</p>
                </div>
            </div>
        </div>
        <h2 className='text-2xl mt-4'>Wie wird das Wetter heute in Berlin?</h2>
        <div>
            <table className='w-full text-center'>
                <tr className='border border-t-0 border-b-0 border-r-0 text-left'>
                    <p className='pl-4 py-4'>{weekDays[selDate.day()]} {selDate.format('DD.MM.')}</p>
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
                        <p>9°<span className='text-sm'>/ 0°</span></p>
                    </td>
                    <td className='border border-t-0 border-b-0 text-2xl'>
                        <p>9°<span className='text-sm'>/ 0°</span></p>
                    </td>
                    <td className='border border-t-0 border-b-0 text-2xl'>
                        <p>9°<span className='text-sm'>/ 0°</span></p>
                    </td>
                    <td className='border border-t-0 border-b-0 text-2xl'>
                        <p>9°<span className='text-sm'>/ 0°</span></p>
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
                        <i className="fa-solid fa-umbrella"></i>  75%
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-umbrella"></i>  50%
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-umbrella"></i>  85%
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-umbrella"></i>  30%
                    </td>
                </tr>
                <tr className='text-left'>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-location-arrow"></i>  N 7km/h
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-location-arrow"></i>  N 7km/h
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-location-arrow"></i>  N 7km/h
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-location-arrow"></i>  N 7km/h
                    </td>
                </tr>
                <tr className='text-left'>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-heart"></i>  gefühlt 7°/0°
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-heart"></i>  gefühlt 7°/0°
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-heart"></i>  gefühlt 7°/0°
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-heart"></i>  gefühlt 7°/0°
                    </td>
                </tr>
                <tr className='text-left'>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-droplet"></i>  76%
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-droplet"></i>  76%
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-droplet"></i>  76%
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-droplet"></i>  76%
                    </td>
                </tr>
                <tr className='text-left'>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-crosshairs"></i>  1014hPa
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-crosshairs"></i>  1014hPa
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-crosshairs"></i>  1014hPa
                    </td>
                    <td className='border border-t-0 border-b-0 p-4'>
                        <i className="fa-solid fa-crosshairs"></i>  1014hPa
                    </td>
                </tr>
            </table>
        </div>
        <div className='flex justify-between gap-2 w-full p-4'>
            <div className='flex justify-between w-3/4 bg-slate-200 py-2 px-4 rounded-2xl'>
                <span className='flex gap-1'><i className="fa-solid fa-arrow-up"></i><p>06:01 Uhr</p></span>
                <span className='flex gap-1'><i className="fa-solid fa-arrow-down"></i><p>20:11 Uhr</p></span>
                <span className='flex gap-1'><i className="fa-solid fa-sun fa-md"></i><p>4 Stunden</p></span>
            </div>
            <div className='flex justify-center w-1/4 bg-slate-200 py-2 px-4 rounded-2xl'>
                <span className='flex gap-1'><i class="fa-solid fa-moon"></i><p>Zunehmender Mond</p></span>
            </div>
        </div>
        <div>
            <h2 className='text-2xl mt-4'>Stündliche Vorhersage Berlin</h2>
            <div className='grid grid-cols-5 gap-4 border p-4'>
                <div>
                    <p className='text-xl'>09-10 Uhr</p>
                    <p>wolkig</p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <i class="fa-solid fa-cloud-sun fa-xl"></i>
                    <p className='text-2xl'>7°</p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <i className="fa-solid fa-umbrella fa-xl"></i>
                    <p>5%</p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <i className="fa-solid fa-droplet fa-xl"></i>
                    <p>0l/m2</p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <i className="fa-solid fa-location-arrow fa-xl"></i> N
                    <p>8km/h</p>
                </div>
            </div>

            <p className='p-4'>Letzte Aktualisierung der Vorhersage: Do, 9:20 Uhr (Ortszeit)</p>

            <div className='w-full flex justify-center m-2'>
                <button className='text-white p-2 rounded-lg bg-gradient-to-b from-light-blue01 via-dark-blue01 to-light-blue01 hover:bg-gradient-to-b hover:from-white hover:via-light-blue02 hover:to-white hover:text-dark-blue01 hover:shadow-2xl'>Weitere Tage laden</button>
            </div>
        </div>
    </div>
    
    </>     
  )
}
