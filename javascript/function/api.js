const API_KEY = "1bd191a3ddba932a50d8337c447a21a4";

export const getDataFromCity = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=Malmo&appid=${API_KEY}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching city data:", error);
    }
}

export const getWeatherData = async (lon, lat) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching weather data:", error);
    }
}