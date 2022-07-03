/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Header, SearchBar, WeatherResult } from '../../components';
import { getLocation } from '../../utils/getLocation';
import { ToastContainer, toast } from 'react-toastify';
import { getWeatherForecast } from '../../utils/getWeatherReport';
import styled from 'styled-components';

function Home() {
  const [location, setLocation] = useState<any>('0,0');
  const [weatherReport, setWeatherReport] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const initialLocation: string[] = [
    'Lagos', 'Abuja', 'London', 'Los Angeles', 'Paris'
  ]
  useEffect(() => {
    getLocation(setLocation)
  }, [])
  const handleEnter = async () => {
    setIsLoading(true)
    try {
      const response = await getWeatherForecast({location});
      setWeatherReport(response)
      setIsLoading(false)
      return
    }catch(error){
      console.log(error);
      toast.error(`${error}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    setIsLoading(false)
    return
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
              isLoading={isLoading}
            />
            <div style={{marginTop: 10}}>
              <WeatherResult weatherReport={weatherReport}/>
            </div>
        </MainContainer>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </React.Fragment>
  );
}
const MainContainer = styled.div`
    
`;
export default Home;
