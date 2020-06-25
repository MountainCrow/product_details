import React from 'react';
import styled from 'styled-components'

const Grid = styled.div`
  border: 2px;
  border-color: #cfcfcf;
  border-style: solid;
  margin: 80px;
`;

const Row = styled.div`
  display: flex;
  margin-top: 80;
  margin-left: 20px;
  margin-right: 20px;

`;

const Col = styled.div`
  flex: ${(props) => props.size};
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const StyledP = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #303030;
  font-family: sans-serif;
  letter-spacing: .03em;
  StyledLine-height: 1.5;
`;

const StyledH3 = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #303030;
  font-family: sans-serif;
  letter-spacing: .03em;
  StyledLine-height: 1.5;
`;




let DescriptionBlock = (props) => {
  return (
    <div>
      <Grid>
        <Row>
        <Col size={1}>
          <StyledH3>PRODUCT DESCRIPTION</StyledH3>
          <StyledP>{props.items.data[0].description}</StyledP>
          <StyledP><strong>Activity: </strong>{props.items.data[0].activityDetail}</StyledP>
          <StyledP><strong>Family: </strong>{props.items.data[0].familyDetail}</StyledP>
          <StyledP><strong>Gender: </strong>{props.items.data[0].genderDetail}</StyledP>
          <StyledP><strong>Legal notice: </strong>{props.items.data[0].legalDetail}</StyledP>
          <StyledP><strong>Features: </strong>{props.items.data[0].featuresDetail}</StyledP>
        </Col>
        <Col size={1}>
          <StyledH3>PRODUCT SPECIFICATIONS</StyledH3>
          <StyledP> <strong>Material: </strong>{props.items.data[0].materialSpec}</StyledP>
          <StyledP><strong>Height: </strong>{props.items.data[0].heightSpec} cm</StyledP>
          <StyledP><strong>Width: </strong>{props.items.data[0].widthSpec} cm</StyledP>
          <StyledP><strong>Depth: </strong>{props.items.data[0].depthSpec} cm</StyledP>
          <StyledP><strong>Volume: </strong>{props.items.data[0].volumeSpec} l</StyledP>
          <StyledP><strong>Weight: </strong> {props.items.data[0].weightSpec} g</StyledP>
          <StyledP><strong>Additional Care Instructions: </strong>{props.items.data[0].additionalCare}</StyledP>
        </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default DescriptionBlock