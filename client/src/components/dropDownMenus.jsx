import React from 'react';
import styled from 'styled-components'
import NavBar from './navBar.jsx'
import toggleAll from './navBar.jsx'

// Styling
let StyledDiv = styled.div`
  margin-top: 60px;
  display: flex;
  background: white;
  z-index: 2;
`;
let StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  position: fixed;
  background: white;
  width: 100%;
  height: 250px;
  justify-content: center;
  padding-left: 0px;
  margin-top: 5px;
  padding-bottom: 20px;
  z-index: 2;
`;
let StyledUl2 = styled.ul`
  list-style: none;
`;
let Styledli = styled.li`
  padding-bottom: 10px;
  font-family: helvetica;
  font-weight: bold;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  letter-spacing: .03em;
  line-height: 1.5;
  text-rendering: geometricPrecision;
  &:hover {
    color: red;
  }
`;
let Styledli2 = styled.li`
  font-family: helvetica;
  font-weight: 200;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  letter-spacing: .03em;
  line-height: 2;
  text-rendering: geometricPrecision;
  white-space: nowrap;
  &:hover {
    color: red;
  }
`

class Menus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverState: false
    }
    this.mensDropDown = this.mensDropDown.bind(this)
    this.womensDropDown = this.womensDropDown.bind(this)
    this.bagsDropDown = this.bagsDropDown.bind(this)
    this.kidsDropDown = this.kidsDropDown.bind(this)
    this.adventuresDropDown = this.adventuresDropDown.bind(this)
  }

  // Drop down menus and styling
  mensDropDown() {
    return (
      <StyledDiv>
        <StyledUl>
          <Styledli>
            New Arrivals
        </Styledli>
          <StyledUl2>
            <Styledli>Jackets</Styledli>
            <Styledli2>Outdoor Jackets</Styledli2>
            <Styledli2>Shell Jackets</Styledli2>
            <Styledli2>Trekking Jackets</Styledli2>
            <Styledli2>Mountaineering Jackets</Styledli2>
            <Styledli2>Hunting Jackets</Styledli2>
            <Styledli2>Anoraks</Styledli2>
            <Styledli2>Vests</Styledli2>
            <Styledli2>Winter Jackets</Styledli2>
            <Styledli2>Down Jackets</Styledli2>
            <Styledli2>Parkas</Styledli2>
          </StyledUl2>
          <StyledUl2>
            <Styledli>Trousers</Styledli>
            <Styledli2> Trekking Trousers</Styledli2>
            <Styledli2>Outdoor Trousers</Styledli2>
            <Styledli2>Shorts</Styledli2>
            <Styledli2>Hunting Trousers</Styledli2>
            <Styledli2>Shell Trousers</Styledli2>
            <Styledli2>Mountaineering Trousers</Styledli2>
            <Styledli2>Trekking Tights</Styledli2>
            <Styledli2>Base Layer Bottoms</Styledli2>
            <Styledli2>Insulated Trousers</Styledli2>
          </StyledUl2>
          <StyledUl2>
            <Styledli>Tops</Styledli>
            <Styledli2>Shirts</Styledli2>
            <Styledli2>T-Shirts & Tank Tops</Styledli2>
            <Styledli2>Sweaters & Knitwear</Styledli2>
            <Styledli2>Fleeces</Styledli2>
            <Styledli2>Base Layer Tops</Styledli2>
          </StyledUl2>
          <StyledUl2>
            <Styledli>Accessories</Styledli>
            <Styledli2>Caps, Hats & Beanies</Styledli2>
            <Styledli2>Belts & Braces</Styledli2>
            <Styledli2>Care Products</Styledli2>
            <Styledli2>Other Accessories</Styledli2>
          </StyledUl2>
        </StyledUl>
      </StyledDiv>
    )
  };
  womensDropDown() {
    return (
      <StyledDiv>
        <StyledUl>
          <Styledli>
            New Arrivals
        </Styledli>
          <StyledUl2>
            <Styledli>Jackets</Styledli>
            <Styledli2>Outdoor Jackets</Styledli2>
            <Styledli2>Shell Jackets</Styledli2>
            <Styledli2>Trekking Jackets</Styledli2>
            <Styledli2>Mountaineering Jackets</Styledli2>
            <Styledli2>Anoraks</Styledli2>
            <Styledli2>Vests</Styledli2>
            <Styledli2>Winter Jackets</Styledli2>
            <Styledli2>Down Jackets</Styledli2>
            <Styledli2>Parkas</Styledli2>
          </StyledUl2>
          <StyledUl2>
            <Styledli>Trousers</Styledli>
            <Styledli2> Trekking Trousers</Styledli2>
            <Styledli2>Outdoor Trousers</Styledli2>
            <Styledli2>Shorts & Skirts</Styledli2>
            <Styledli2>Shell Trousers</Styledli2>
            <Styledli2>Mountaineering Trousers</Styledli2>
            <Styledli2>Trekking Tights</Styledli2>
            <Styledli2>Base Layer Bottoms</Styledli2>
            <Styledli2>Insulated Trousers</Styledli2>
          </StyledUl2>
          <StyledUl2>
            <Styledli>Tops</Styledli>
            <Styledli2>Shirts</Styledli2>
            <Styledli2>T-Shirts & Tank Tops</Styledli2>
            <Styledli2>Sweaters & Knitwear</Styledli2>
            <Styledli2>Fleeces</Styledli2>
            <Styledli2>Base Layer Tops</Styledli2>
            <Styledli2>Dresses</Styledli2>
          </StyledUl2>
          <StyledUl2>
            <Styledli>Accessories</Styledli>
            <Styledli2>Caps, Hats & Beanies</Styledli2>
            <Styledli2>Belts & Braces</Styledli2>
            <Styledli2>Care Products</Styledli2>
            <Styledli2>Other Accessories</Styledli2>
          </StyledUl2>
        </StyledUl>
      </StyledDiv>
    )
  };
  bagsDropDown() {
    return (
      <StyledDiv>
        <StyledUl>
          <Styledli>
            New Arrivals
        </Styledli>
          <StyledUl2>
            <Styledli>Kånken</Styledli>
            <Styledli2>Kånken Bags</Styledli2>
            <Styledli2>Kånken Accessories</Styledli2>
            <Styledli2>Save the Arctic Fox</Styledli2>
          </StyledUl2>
          <StyledUl2>
            <Styledli>Backpacks & Bags</Styledli>
            <Styledli2>Daypacks</Styledli2>
            <Styledli2>Trekking Backpacks</Styledli2>
            <Styledli2>Mountaineering Backpacks</Styledli2>
            <Styledli2>Hunting Backpacks</Styledli2>
            <Styledli2>Laptop Bags</Styledli2>
            <Styledli2>Travel Bags</Styledli2>
            <Styledli2>Shoulder Bags</Styledli2>
            <Styledli2>Hip Packs</Styledli2>
          </StyledUl2>
          <StyledUl2>
            <Styledli>Accessories</Styledli>
            <Styledli2>Backpack & Bag Accessories</Styledli2>
            <Styledli2>Travel Accessories</Styledli2>
            <Styledli2>Hunting Accessories</Styledli2>
            <Styledli2>Wallets & Small Bags</Styledli2>
          </StyledUl2>
          <StyledUl2>
            <Styledli>Tent & Sleeping Bags</Styledli>
            <Styledli2>Tents</Styledli2>
            <Styledli2>Tent Accessories</Styledli2>
            <Styledli2>Sleeping Bags</Styledli2>
          </StyledUl2>
        </StyledUl>
      </StyledDiv>
    )
  };
  kidsDropDown() {
    return (
      <StyledDiv>
        <StyledUl>
          <Styledli>
            New Arrivals
        </Styledli>
          <StyledUl2>
            <Styledli>Backpacks</Styledli>
          </StyledUl2>
          <StyledUl2>
            <Styledli>Jackets</Styledli>
          </StyledUl2>
          <StyledUl2>
            <Styledli>Trousers</Styledli>
          </StyledUl2>
          <StyledUl2>
            <Styledli>Tops</Styledli>
          </StyledUl2>
          <StyledUl2>
            <Styledli>Accessories</Styledli>
          </StyledUl2>
        </StyledUl>
      </StyledDiv>
    )
  };
  adventuresDropDown() {
    return (
      <StyledDiv>
        <StyledUl>
          <Styledli>Foxtrail</Styledli>
          <StyledUl2>
            <Styledli>Classic</Styledli>
          </StyledUl2>
          <StyledUl2>
            <Styledli>Polar</Styledli>
          </StyledUl2>
        </StyledUl>
      </StyledDiv>
    )
  };

  // Conditional rendering of dropdown menus - dependent on state passed down from navBar.jsx
  render() {
    if (this.props.menMenuDropDownState) {
      return (
        <div onMouseLeave={this.props.toggleAll}>
          <this.mensDropDown />
        </div>

      )
    } else if (this.props.womenMenuDropDownState) {
      return (
        <div onMouseLeave={this.props.toggleAll}>
          <this.womensDropDown />
        </div>
      )

    } else if (this.props.bagsMenuDropDownState) {
      return (
        <div onMouseLeave={this.props.toggleAll}>
          <this.bagsDropDown />
        </div>
      )

    } else if (this.props.kidsMenuDropDownState) {
      return (
        <div onMouseLeave={this.props.toggleAll}>
          <this.kidsDropDown />
        </div>
      )

    } else if (this.props.adventuresMenuDropDownState) {
      return (
        <div onMouseLeave={this.props.toggleAll}>
          <this.adventuresDropDown />
        </div>
      )

    } else {
      return (
        <div></div>
      )
    }
  }
}



export default Menus;
