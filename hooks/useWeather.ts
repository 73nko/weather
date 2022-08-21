import { useState } from "react"

export interface Weather {
    temperature: number
    wind: number
    resume: string
    description: string
}

const weatherURL = "https://api.openweathermap.org/data/2.5/weather"
const appid = process.env.NEXT_PUBLIC_APPID

const useWeather = () => {
    const [city, setCity] = useState<string>("")
    const [weather, setWeather] = useState<Weather | null>(null)

    const callApi = async () => {
        const data = await fetch(`${weatherURL}?q=${city}&units=metric&appid=${appid}`).then((res) => res.json())
        const temperature = data.main.temp
        const wind = (data.wind.speed * 3600) / 1000
        const resume = data.weather[0].main.toUpperCase()
        const description = data.weather[0].description
        setWeather({
            temperature,
            wind,
            resume,
            description
        })
    }

    return {
        weather,
        setCity,
        callApi,
        city
    }
}

export default useWeather
