import React from 'react';
import styled from 'styled-components';
import crest from './swedenLogo.png'
import logo from './footerLogo.png'


let StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  position: absolute;
  background-color: #E9E7E6;
`;
let StyledDiv = styled.div`
  flex-direction: row;
  display: flex;
  padding: 75px 75px;
`;
let StyledDiv2 = styled.div`
  display: flex;
  margin-inline-start: auto;

`;
let StyledImgContainer = styled.div`
  display: grid;
`;
let StyledUl = styled.ul`
  list-style: none;
  margin-left: 150px;
`;
let StyledCrest = styled.img`
  position: relative;
  padding-top: 150px;
`;
let StyledLi = styled.li`
  font-size: 16px;
  font-weight: 600;
  font-family: helvetica;
  padding-bottom: 10px;
  -webkit-font-smoothing: antialiased;
`;
let Styledli2 = styled.li`
  font-family: sans-serif;
  font-weight: 400;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  letter-spacing: .03em;
  line-height: 1.5;
  text-rendering: geometricPrecision;
  white-space: nowrap;
  padding-bottom: 3px;
  &:hover {
    color: red;
  }
`;
let Styledli3 = styled.li`
  font-family: sans-serif;
  font-weight: 400;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  letter-spacing: .03em;
  line-height: 1.5;
  text-rendering: geometricPrecision;
  white-space: nowrap;
  padding-bottom: 10px;
  &:hover {
    color: red;
  }
`;

let Footer = () => {
  return (
    <StyledFooter>
      <StyledDiv>
        <StyledImgContainer>
          <img src={logo}></img>
          <StyledCrest src={crest}></StyledCrest>
        </StyledImgContainer>
        <StyledDiv2>
          <div>
            <StyledUl>
              <StyledLi>CUSTOMER SERVICE</StyledLi>
              <Styledli2>Contact Us</Styledli2>
              <Styledli2>FAQ</Styledli2>
              <Styledli2>Shipping</Styledli2>
              <Styledli2>Returns</Styledli2>
              <Styledli2>Warranty</Styledli2>
              <Styledli2>Buyers Guide</Styledli2>
              <Styledli2>Care & Repair</Styledli2>
              <Styledli2>Size Guide</Styledli2>
              <Styledli2>Industry Pro Program</Styledli2>
            </StyledUl>
          </div>
          <div>
            <StyledUl>
              <StyledLi>ABOUT FJÄLLRÄVEN</StyledLi>
              <Styledli2>About Us</Styledli2>
              <Styledli2>Sustainability</Styledli2>
              <Styledli2>Our Materials</Styledli2>
              <Styledli2>Careers</Styledli2>
              <Styledli3>Press Room</Styledli3>
              <StyledLi>LEGAL</StyledLi>
              <Styledli2>Terms & Conditions</Styledli2>
              <Styledli2>Accessibility</Styledli2>
              <Styledli2>Privacy Policy</Styledli2>
            </StyledUl>
          </div>
          <div>
            <StyledUl>
              <StyledLi>OUR ADVENTURES</StyledLi>
              <Styledli2>Fjällräven Polar</Styledli2>
              <Styledli2>Fjällräven Classic</Styledli2>
              <Styledli2>Opt-Put of Google Tracking</Styledli2>
              <Styledli2>Store Locator</Styledli2>
            </StyledUl>
          </div>
        </StyledDiv2>
      </StyledDiv>
    </StyledFooter>
  )
}

export default Footer;