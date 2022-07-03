import React, { useEffect } from 'react'
import { color } from '../../config';
import { Container, MainDiv, Sidebar, TemperatureDiv, TemperatureText, EachWeatherDayDiv } from './WeatherResult.style'
interface Prop {
    weatherReport?: any;
}
export default function WeatherResult({weatherReport}: Prop) {
  useEffect(() => console.log(weatherReport), [weatherReport])
  return (
    <Container>
        <Sidebar>
            <TemperatureDiv>
                <span className='degree'>Location</span>
                <span>{weatherReport?.address ? weatherReport.address : '-'}</span>
            </TemperatureDiv>
            <TemperatureDiv>
                <span className='degree'>Timezone</span>
                <span>{weatherReport?.timezone ? weatherReport.timezone : '-'}</span>
            </TemperatureDiv>
        </Sidebar>
        <MainDiv>
            {weatherReport?.days?.map((eachDay: any) => (
                <EachWeatherDayDiv key={eachDay.datetime}>
                    <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between', margin: '20px 0' }}>
                        <img src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${eachDay.icon}.png`} alt=''/>
                        <TemperatureText>{eachDay.temp}°C</TemperatureText>
                    </div>
                    <div style={{margin: '10px 0'}}>
                        <span style={{color: color.grey}}>weather</span>
                        <h3 style={{ margin: 0}}>{eachDay.icon}</h3>
                    </div>
                    <div style={{margin: '10px 0'}}>
                        <span style={{color: color.grey}}>date</span>
                        <h3 style={{ margin: 0}}>{eachDay.datetime}</h3>
                    </div>
                    <div style={{margin: '10px 0'}}>
                        <span style={{color: color.grey}}>cloud</span>
                        <h3 style={{ margin: 0}}>{eachDay.cloudcover}</h3>
                    </div>
                </EachWeatherDayDiv>
            ))}
        </MainDiv>
    </Container>
  )
}
    