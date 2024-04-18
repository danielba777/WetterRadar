import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"

function App() {

  const [geoData, setGeoData] = useState(null)
  const [weatherData, setWeatherData] = useState(null)

  async function fetchWeatherData(){

    console.log("fetchWeatherData() START")
    console.log(geoData)

    const lat = geoData.lat
    const lon = geoData.lon

    console.log(lat)
    console.log(lon)

    const url = `https://api.openweathermap.org/data/2.5/weather?${lat}={lat}&${lon}={lon}&appid=64b3fbab07e17133eb798ebbf4e98ce4`

    try{

      const res = await fetch(url)
      const data = await res.json()

      setWeatherData(data)
      
      console.log('WEATHER DATA: ')
      console.log(data)
        
    }catch(err){

      console.log("Weather API Error: " + err.message)
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

  useEffect(() =>{
    if(geoData !== null){
      fetchWeatherData()
    }
  }, [geoData])

  return (
    <>    
      <Header fetchGeoData={fetchGeoData} geoData={geoData}></Header>
      <Body></Body>
      <Footer></Footer>
    </>

  )
}

export default App
