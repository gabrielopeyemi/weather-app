import React from 'react'
import styled  from 'styled-components';
import { fonts, googleAPIKey } from '../../config';

export default function SearchBar() {
  console.log({googleAPIKey})
  return (
    <Container>
        <Input type="search" placeholder="Search" />
        <div>
            <div>k</div>
            <div>k</div>
            <div>k</div>
            <div>k</div>
            <div>k</div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    margin: 20px;
`;
const Input = styled.input`
    width: 100%;
    padding: 15px;
    font-size: ${fonts.BODY};
    border-radius: 6px;
`;