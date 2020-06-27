import React from 'react';
import styled from 'styled-components'

let StyledButton = styled.button`
  text-align: center;
  border: none;
  font-family: helvetica;
  font-weight: 400;
  font-size: 14px;
  outline: none;
  &:hover {
    color: red;
  }
`;
let StyledInput = styled.input`
  width: 540px;
  border: none;
  font-size: 28px;
  font-family: helvetica;
  border-bottom: black;
  border-bottom-style: solid;
  border-bottom-color: lightgrey;
  outline: none;
`;
let StyledDiv = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 250px 15px;
  background-color: white;
  opacity: 100;
  overflow-y: scroll;
  -webkit-transition: .3s ease-in-out;
  transition: .3s ease-in-out;
  margin-top: 60px;
`;

let Button = (props) => {
  if(props.searchState) {
    return (
      <div>
      <div>X CLOSE</div>
      <StyledDiv>
      <StyledInput type="search" autocomplete="off" placeholder="Find great equipment and clothing..." aria-label="Search text"></StyledInput>
      </StyledDiv>
      </div>
    )
  } else {
    return (
      <div>SEARCH</div>
    )
  }
}

export default Button;