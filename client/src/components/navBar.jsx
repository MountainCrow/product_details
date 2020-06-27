import React from 'react';
import ReactDOM from 'react-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from 'styled-components';
import logo from './fjallLogo.png';
import glass from './glass.png';
import bag from './bag.png'
import Menus from './dropDownMenus.jsx';
import Button from './searchButton.jsx'


let Row = styled.div`
  display: flex;
  flex-direction: row;
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
  margin-left: 25px;
  margin-top: 10px;
  font-family: helvetica;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  -webkit-text-stroke-width: thin;
  &:hover {
    text-decoration: underline;
    text-decoration-color: maroon;
  }
`;
let StyledLi1 = styled.li`
  margin-left: 10px;
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
  padding-left: 20px;
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
let StyledDiv = styled.div`
  display: flex;
  height: 85px;

`;
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
let StyledImg2 = styled.img`

`;
class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMen = this.toggleMen.bind(this);
    this.toggleWomen = this.toggleWomen.bind(this);
    this.toggleBags = this.toggleBags.bind(this);
    this.toggleKids = this.toggleKids.bind(this);
    this.toggleAdventures = this.toggleAdventures.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);

    this.state = {
      menDropDown: false,
      womenDropDown: false,
      bagsDropDown: false,
      kidsDropDown: false,
      adventuresDropDown: false,
      search: false
    };
  }

  toggleMen() {
    this.setState({
      menDropDown: false,
      womenDropDown: false,
      bagsDropDown: false,
      kidsDropDown: false,
      adventuresDropDown: false,
      search: false
    })
    this.setState({
      menDropDown: !this.state.menDropDown
    });
  }
  toggleWomen() {
    this.setState({
      menDropDown: false,
      womenDropDown: false,
      bagsDropDown: false,
      kidsDropDown: false,
      adventuresDropDown: false,
      search: false
    })
    this.setState(() => ({
      womenDropDown: !this.state.womenDropDown
    }));
  }
  toggleBags() {
    this.setState({
      menDropDown: false,
      womenDropDown: false,
      bagsDropDown: false,
      kidsDropDown: false,
      adventuresDropDown: false,
      search: false
    })
    this.setState(() => ({
      bagsDropDown: !this.state.bagsDropDown
    }));
  }
  toggleKids() {
    this.setState({
      menDropDown: false,
      womenDropDown: false,
      bagsDropDown: false,
      kidsDropDown: false,
      adventuresDropDown: false,
      search: false
    })
    this.setState(() => ({
      kidsDropDown: !this.state.kidsDropDown
    }));
  }
  toggleAdventures() {
    this.setState({
      menDropDown: false,
      womenDropDown: false,
      bagsDropDown: false,
      kidsDropDown: false,
      adventuresDropDown: false,
      search: false
    })
    this.setState(() => ({
      adventuresDropDown: !this.state.adventuresDropDown
    }));
  }
  toggleSearch() {
    this.setState(() => ({
      search: !this.state.search
    }));
  }


  render() {
    return (
      <div>
      <StyledHeader>
        <Row>
          <StyledImg src={logo}></StyledImg>
          <StyledUl>
           <StyledLi1 onMouseEnter={this.toggleMen}>MEN</StyledLi1>
            <StyledLi onMouseEnter={this.toggleWomen}>WOMEN</StyledLi>
            <StyledLi onMouseEnter={this.toggleBags}>BAGS & GEAR</StyledLi>
            <StyledLi onMouseEnter={this.toggleKids}>KIDS</StyledLi>
            <StyledLi>SUSTAINABILITY</StyledLi>
            <StyledLi onMouseEnter={this.toggleAdventures}>OUR ADVENTURES</StyledLi>
            <StyledLi2><StyledImg2 src={glass}></StyledImg2><StyledButton onClick={this.toggleSearch}><Button searchState={this.state.search} /></StyledButton></StyledLi2>
            <StyledBag src={bag}></StyledBag><StyledLi3>$0.00</StyledLi3>
          </StyledUl>
        </Row>
      </StyledHeader>
      <div><Menus menMenuDropDownState={this.state.menDropDown} womenMenuDropDownState={this.state.womenDropDown} bagsMenuDropDownState={this.state.bagsDropDown} kidsMenuDropDownState={this.state.kidsDropDown} adventuresMenuDropDownState={this.state.adventuresDropDown}/></div>

      </div>

    )
  }
}

export default Navbar;