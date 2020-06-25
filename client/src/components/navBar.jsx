import React from 'react';
import styled from 'styled-components';
import logo from './fjallLogo.png';
import glass from './glass.png';
import bag from './bag.png'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-bottom: 5px;
`;

let StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  padding-left: 25px;
  padding-rigth: 25px;
  padding-top: 15px;
  position: fixed;
  top: -5px;
  background: white;
  padding-bottom: 1px;
`;

let StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;

`;

let StyledLi = styled.li`
  margin-left: 20px;
  margin-top: 10px;
  font-family: sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  -webkit-text-stroke-width: thin;

  &:hover {
    text-decoration: underline;
    text-decoration-color: maroon;
  }
`;

let StyledLi2 = styled.li`
  margin-left: 45px;
  margin-top: 10px;
  font-family: sans-serif;
  font-weight: 200;
  font-size: 14px;
  padding-left: 30px;
  border-left: 1px solid grey;
`;

let StyledLi3 = styled.li`
  margin-top: 10px;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 14px;
`;

let StyledImg = styled.img`
  margin-left: 25px;
  margin-top: 15px;
  width: 82px;
  height: 30px;
`;

let StyledBag = styled.img`
  margin-left: 25px;

`;



let navBar = () => {
  return (
    <StyledHeader>
      <Row>
        <StyledImg src={logo}></StyledImg>
        <div class="header--drop-wrapper"></div>
        <StyledUl>
          <StyledLi>MEN</StyledLi>
          <StyledLi>WOMEN</StyledLi>
          <StyledLi>BAGS & GEAR</StyledLi>
          <StyledLi>KIDS</StyledLi>
          <StyledLi>SUSTAINABILITY</StyledLi>
          <StyledLi>OUR ADVENTURES</StyledLi>
          <StyledLi2><img src={glass}></img>  SEARCH</StyledLi2>
          <StyledBag src={bag}></StyledBag><StyledLi3>$0.00</StyledLi3>
        </StyledUl>
        {/* <StyledHR class="header-divider"></StyledHR> */}
        {/* <StyledAnchor class="header--search">
            <span>Search</span>
          </StyledAnchor> */}
        {/* <div><span>Cart</span></div> */}
      </Row>
    </StyledHeader>
  )
}

export default navBar;