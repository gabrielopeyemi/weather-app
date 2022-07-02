import axios from "axios";
import { weatherAPI } from './../config';
interface Props {
    location?: string;
    days?: string;
}
export const getAnswer = async (props: Props): Promise<any> => {
    const response = await axios(`http://api.weatherapi.com/v1/forecast.json?key=${weatherAPI}&q=48.8567,2.3508&days=${props.days ? props.days : '4'}&aqi=yes&alerts=yes`);
    console.log(response);
};
