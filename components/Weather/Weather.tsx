import { Button, DatePicker, Space } from "antd"
import { Typography } from "antd"
import { Header } from "../Header"
import useWeather from "../../hooks/useWeather"
import WeatherForm from "./WeatherForm"
const { Title } = Typography

export default function Weather() {
    const { weather, setCity, callApi, city } = useWeather()
    const { temperature, wind, resume, description } = weather || {}

    return (
        <>
            <Header>{"What's the Weather"}</Header>
            <Title level={2} style={{ color: "white" }}>
                Select a date to see the weather
            </Title>
            <Space direction="vertical" size="middle" style={{ display: "flex" }}>
                <Space>
                    <DatePicker />
                    <Button type="primary" style={{ marginLeft: 8 }}>
                        Date
                    </Button>
                </Space>
                <WeatherForm setCity={setCity} callApi={callApi} />
            </Space>
            {weather ? (
                <div>
                    <p className="city-title" style={{ color: "#7928ca" }}>
                        {city.toUpperCase()}
                    </p>
                    <p className="temperature">{temperature} °C</p>
                    <p className="wind">Wind at this moment is {wind} km/h</p>
                    <p className="resume">{resume}</p>
                    <p className="description">{description}</p>
                </div>
            ) : null}
        </>
    )
}
