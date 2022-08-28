const WeatherData = ({ city, temperature, wind, resume, description }) => {
    return (
        <div>
            <p className="city-title" style={{ color: "#7928ca" }}>
                {city.toUpperCase()}
            </p>
            {resume ? (
                <>
                    <p className="temperature">{temperature} °C</p>
                    <p className="wind">Wind at this moment is {wind} km/h</p>
                    <p className="resume">{resume}</p>
                    <p className="description">{description}</p>
                </>
            ) : null}
        </div>
    )
}

export default WeatherData
