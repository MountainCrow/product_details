import React from 'react';
import styled from 'styled-components'

const Grid = styled.div`
  margin-top: 200px;
`;
const Row = styled.div`
  display: flex;
`;
const Col = styled.div`
  flex: ${(props) => props.size};
`;
const StyledSpan = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: sans-serif;
  letter-spacing: .03em;
  StyledLine-height: 1.5;
`;
const StyledUL = styled.ul`
  StyledList-style-type: none;
  font-family: sans-serif;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antiaStyledLiased;
  font-weight: 200;
  letter-spacing: .03em;
  StyledLine-height: 1.5;
  text-rendering: geometricPrecision;
  margin-left: 50px;
  margin-right: 10px;

`;
const StyledImg = styled.img`
  width: 85%;
  margin-left: 50px;
  margin-right: 20px;
  position: centered;
`;
const StyledLi = styled.li`
  margin-top: 15px;
  margin-left: 50;
`;


let FeatureList = (props) => {
  return (
    <div>
      <Grid>
        <Row>
          <Col size={1}>
            <StyledUL>
              <StyledSpan>PRODUCT FEATURES</StyledSpan>
              <StyledLi>{props.items.data[0].feature1}</StyledLi>
              <StyledLi>{props.items.data[0].feature2}</StyledLi>
              <StyledLi>{props.items.data[0].feature3}</StyledLi>
              <StyledLi>{props.items.data[0].feature4}</StyledLi>
              <StyledLi>{props.items.data[0].feature5}</StyledLi>
            </StyledUL>
          </Col>
          <Col size={1.8}>
            <StyledImg src={props.items.data[0].image}></StyledImg>
          </Col>
        </Row>
      </Grid>
    </div>
  )
};

export default FeatureList;



