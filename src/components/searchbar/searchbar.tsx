/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import styled  from 'styled-components';
import { fonts } from '../../config';
import { getLocation } from '../../utils/getLocation';

export default function SearchBar(props: any) {
  const {location} = props;
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    props.setLocation(value)
    props.getWeatherForecast({location: value})
  };
  return (
    <Main>
        <Container>
                <CallToAction>Check your weather</CallToAction>
                <InputContainer>
                    <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                        <Input 
                            type="search" 
                            placeholder="Search" 
                            value={props.location} 
                            onChange={(e: any) => props.setLocation(e.target.value)} 
                            onKeyPress={(e: any) => {
                                if (e.key === "Enter") {
                                    props.handleEnter()
                                }
                            }}
                        />
                        <SelectDiv name={location} id="cars" onChange={selectChange} className='col-4'>
                            <option value={location}>Present Location</option>
                            {props.initialLocation.map((eachLocation: string) => (
                                <option value={eachLocation} key={eachLocation}>{eachLocation}</option>
                            ))}
                        </SelectDiv>
                    </div>
                </InputContainer>
                <Button onClick={() => props.handleEnter()}>Search</Button>
        </Container>
    </Main>
  )
}
const CallToAction = styled.h2`
    color: #FFF;
    font-size: ${fonts.HEADER}
`;
const Main = styled.div`
        height: 700px;
        background-image: url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80');
        background-size: cover;
        align-content: center;
        display: flex;
    `;
const Container = styled.div`
    width: 100%;
    padding: 20px;
    margin: auto;
    max-width: 1400px;
    background: transparent;
`;
const Input = styled.input`
    font-size: ${fonts.BODY};
    width: 100%;
    padding: 15px;
    border: 0
`;
const InputContainer = styled.div`
    width: 100%;
    border-radius: 6px;
    display: flex;
    background-color: white;
    // padding: 5px;
    align-content: center;
    align-items: center;
    flex-direction: column;
    
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    padding: 10px;
    margin: 10px;
    grid-gap: 50px;
`;

const GridItem = styled.div`
    padding: 10px;
    font-size: ${fonts.BODY};
    text-align: center;
    width: 33%;
    margin: auto;
    background-color: #f9f9f9
    border: 2px solid red !important;
    border: 1px solid red !important;
    align-items: center;
    align-content: center;
`;
const Button = styled.button`
    padding: 10px 80px;
    width: 100%;
    margin: 20px 0;
    padding: 20px;
`;
    
const SelectDiv = styled.select`
    padding: 10px;
    border: 0;
    // width: 100%;
`;