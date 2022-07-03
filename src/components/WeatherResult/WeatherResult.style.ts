import styled from 'styled-components';
import { device, fonts } from '../../config';

export const Container = styled.div`
    margin: auto;
    display: flex;
    max-width: 1400px;
    flex-direction: column;
    @media ${device.laptop} {
        flex-direction: row !important;
    }
`;

export const Sidebar = styled.div`
    // width: 100%;
    padding: 50px;
    background-color: #f9f9f9;
    border-radius: 10px;
    margin: 10px;
    @media ${device.laptop} {
        width: 30%;
    }
`;

export const MainDiv = styled.div`
    
    border-radius: 10px;
    margin: 5px;
    display: flex;
    padding: 10px;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    @media ${device.mobileM} {
        grid-template-columns: 100%
    }
    @media ${device.tablet} {
        grid-template-columns: 33% 33% 33%;
    }
    @media ${device.laptop} { 
        grid-template-columns: 50% 50%;
        width: 70%;
    }
    @media ${device.desktop} {
        grid-template-columns: 33% 33% 33%;
    }
`

export const TemperatureDiv = styled.div`
    justify-content: center;
    flex-direction: column;
    display: flex;
    margin-bottom: 20px;
    span {
        font-size: ${fonts.SUBHEADER};
        color: black;
    }
    .degree {
        font-size: ${fonts.BODY};
        color: grey;
    }
    @media ${device.mobileM} {
        span {
            font-size: ${fonts.SUBHEADER};
            color: black;
        }
    }
    @media ${device.tablet} {
        span {
            font-size: ${fonts.SUBHEADER};
            color: black;
        }
    }
    @media ${device.laptop} {
        span {
            font-size: ${fonts.SUBHEADER};
            color: black;
        }
    }
    @media ${device.desktop} {
        span {
            font-size: ${fonts.HEADER};
            color: black;
        }
    }
`;

export const EachWeatherDayDiv = styled.div`
    padding: 10px;
    margin: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const TemperatureText = styled.h3`
    font-size: ${fonts.SUBHEADER}
`;