/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Header, SearchBar, WeatherResult } from '../../components';
import { getLocation } from '../../utils/getLocation';
import { getWeatherForecast } from '../../utils/getWeatherReport';
import styled from 'styled-components';

function Home() {
  const [location, setLocation] = useState<any>('0,0');
  const [weatherReport, setWeatherReport] = useState({})
  const initialLocation: string[] = [
    'Lagos', 'Abuja', 'London', 'Los Angeles', 'Paris'
  ]
  useEffect(() => {
    getLocation(setLocation)
    console.log(location)
    console.log(weatherReport)
  }, [])
  const handleEnter = async () => {
    const response = await getWeatherForecast({location});
    console.log({debug: true, response})
    setWeatherReport(response)
  }
  return (
    <React.Fragment>
      <Header />
        <MainContainer>
            <SearchBar 
              getWeatherForecast={getWeatherForecast} 
              setLocation={setLocation} 
              location={location} 
              handleEnter={handleEnter} 
              initialLocation={initialLocation}
            />
            <div style={{marginTop: 10}}>
              {weatherReport !== {} && <WeatherResult weatherReport={weatherReport}/>}
            </div>
        </MainContainer>
    </React.Fragment>
  );
}
const MainContainer = styled.div`
    
`;
export default Home;
