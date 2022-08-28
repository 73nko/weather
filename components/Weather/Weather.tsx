import { Header } from "../Header"
import useWeather from "../../hooks/useWeather"
import WeatherForm from "./WeatherForm"
import WeatherData from "./WeatherData"

export default function Weather() {
    const { weather, setCity, callApi, city } = useWeather()
    const { temperature, wind, resume, description } = weather || {}

    return (
        <>
            <Header>{"What's the Weather"}</Header>
            <WeatherForm setCity={setCity} callApi={callApi} />
            {WeatherData ? <WeatherData city={city} temperature={temperature} wind={wind} resume={resume} description={description} /> : null}
        </>
    )
}

{
    /* Removed component DatePicker before WeatherForm */
}
