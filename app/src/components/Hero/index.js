import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 400px;
`;
const HeroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Hero = () => (
    <Wrapper>
        <HeroImage src="https://images.pexels.com/photos/3509971/pexels-photo-3509971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Image" />
    </Wrapper>
);

export default Hero;