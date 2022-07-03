import axios from "axios";
import { getDays } from "./getDays";
import { weatherAPI } from './../config';
interface Props {
    location?: string;
    days?: string;
}
export const getWeatherForecast = async ({location, days}: Props): Promise<any> => {
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${days ? getDays(days) : getDays()}?unitGroup=metric&include=events%2Cdays%2Ccurrent%2Calerts&key=${weatherAPI}&contentType=json`;
    try{
        const response = await axios(`${URL}`);
        return response.data;
    }catch(error: any){
        throw error.response.data;
    }
};