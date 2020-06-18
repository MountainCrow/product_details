import React from 'react';


let FeatureList = (props) => {

    return (
      <ul>
      <li>{props.items.data[0].feature1}</li>
      <li>{props.items.data[0].feature2}</li>
      <li>{props.items.data[0].feature3}</li>
      <li>{props.items.data[0].feature4}</li>
      <li>{props.items.data[0].feature5}</li>
      <img src={props.items.data[0].image}></img>
      </ul>

    )

};

export default FeatureList;