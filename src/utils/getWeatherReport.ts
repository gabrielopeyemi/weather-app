import axios from "axios";
// import { weatherAPI } from './../config';
interface Props {
    location?: string;
    days?: string;
}
export const getWeatherForecast = async ({location, days}: Props): Promise<any> => {
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${days ? days : '2022-07-03/2022-07-15'}?unitGroup=metric&include=events%2Cdays%2Ccurrent%2Calerts&key=CMZDZ5XRLF2QQB5H5KV5Y8WZZ&contentType=json`;
    console.log({ location })
    const response = await axios(`${URL}`);
    return response.data;
};