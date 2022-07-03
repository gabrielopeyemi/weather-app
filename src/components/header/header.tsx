import React from 'react';
import styled from 'styled-components'; 
import { color } from '../../config';

export default function header() {
  return (
    <Header>
        <AHref href="#default">Weather APP</AHref>
    </Header>
  )
}
const Header = styled.div`
    overflow: hidden;
    background-color: #f1f1f1;
    padding: 20px 10px;
`;

// const HeaderRight = styled.div`

// `;

const AHref = styled.a`
    float: left;
    color: ${color.black};
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
    font-size: 25px;
    font-weight: bold;    
`;