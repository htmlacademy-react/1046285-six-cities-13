import { CITIES } from "../const";

export const getRandomCityName = () => CITIES[Math.floor(Math.random() * CITIES.length)].name;
