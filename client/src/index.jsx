import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FeatureList from './components/productFeatures.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    }
  };


  componentDidMount() {
    axios.get('http://localhost:3000/database')
      .then(results => {
        this.setState({
          isLoaded: true,
          items: results
        })
        console.log("new State!", this.state)
      })
  };

  render() {
    if (this.state.isLoaded) {
      return <FeatureList items={this.state.items}/>
    }
    return (
      <div>
        App is rendering
      </div>
    );
  };
}


ReactDOM.render(<App />, document.getElementById('app'));