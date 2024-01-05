import {
    API_KEY,
    WEATHER_BASE_URL,
    LANG,
    UNITS
} from './apiConfig';

export const getWeather = async (city) => {
    try {
        const url = `${WEATHER_BASE_URL}?q=${city}&appid=${API_KEY}&lang=${LANG}&units=${UNITS}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données météo :", error);
    }
};
