import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"

function App() {

  const day00 = dayjs()
  const day01 = day00.add(1, 'day')
  const day02 = day00.add(2, 'day')
  const day03 = day00.add(3, 'day')
  const day04 = day00.add(4, 'day')
  const day05 = day00.add(5, 'day')

  const days = [day00,day01,day02,day03,day04,day05]
  const weekDays = ['So','Mo','Di','Mi','Do','Fr','Sa']

  const [selDate,setSelDate] = useState(day00)
  const [geoData, setGeoData] = useState({'city': 'Berlin','lat': 52.520008,'lon': 13.404954})
  const [weatherData, setWeatherData] = useState(null)

  function extractData(day){

    const selDay = day.format("YYYY-MM-DD")

    const timeData = weatherData?.hourly.time.filter(hour => hour.startsWith(selDay))
    const timeDayData = weatherData?.daily.time.filter(hour => hour.startsWith(selDay))

    if(timeData.length > 0){

      const startIndex = weatherData?.hourly.time.indexOf(timeData[0])
      const endIndex = weatherData?.hourly.time.indexOf(timeData[timeData.length - 1])
      
      const startDayIndex = weatherData?.daily.time.indexOf(timeDayData[0])
      const endDayIndex = weatherData?.daily.time.indexOf(timeDayData[timeDayData.length - 1])

      return { startIndex, endIndex, startDayIndex, endDayIndex }
    }else{
      return { startIndex: -1, endIndex: -1, startDayIndex: -1, endDayIndex: -1 }
    }
  }

  async function fetchGeoData(str){

    const urlStart = 'https://api.geoapify.com/v1/geocode/search?text='
    const urlEnd = '&format=json&apiKey=bf468c247792437a8e19741a930cb499'
      
    str = str.replaceAll(' ','%20').replaceAll(',','%2C')

    const url = urlStart + str + urlEnd

    try{

      const res = await fetch(url)
      const data = await res.json()
      
      setGeoData(data.results[0])
    
    }catch(err){

      console.log("Geo API Error: " + err.message)
    }
  }

  async function fetchWeatherData(){

    const lat = geoData.lat
    const lon = geoData.lon

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timezone=auto&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_mean,sunrise,sunset,sunshine_duration&hourly=precipitation_probability,precipitation,wind_speed_10m,wind_direction_10m,temperature_2m,apparent_temperature,relative_humidity_2m,surface_pressure&current=temperature_2m`

    try{

      const res = await fetch(url)
      const data = await res.json()

      setWeatherData(data)

      console.log(data)

      console.log(data.daily.sunshine_duration[extractData(selDate).startDayIndex])
        
    }catch(err){

      console.log("Weather API Error: " + err.message)
    }
  }

  useEffect(() =>{
    if(geoData !== null){
      fetchWeatherData()
    }
  }, [geoData,selDate])

  return (
    <>    
      <Header fetchGeoData={fetchGeoData} geoData={geoData} weatherData={weatherData}></Header>
      <Body geoData={geoData} weatherData={weatherData} days={days} weekDays={weekDays} selDate={selDate} setSelDate={setSelDate} extractData={extractData}></Body>
      <Footer></Footer>
    </>
  )
}

export default App
