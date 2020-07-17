import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FeatureList from './components/productFeatures.jsx';
import DescriptionBlock from "./components/productDescription.jsx"
import Navbar from "./components/navBar.jsx"
import Footer from './components/footer.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    }
  };

  componentDidMount() {
    //update when db is deployed **update bundle.js/ upload to s3
    axios.get('http://54.183.30.75/database')
      .then(results => {
        this.setState({
          isLoaded: true,
          items: results
        })
      })
  };

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <FeatureList items={this.state.items} />
          <DescriptionBlock items={this.state.items} />
        </div>
      )
    }

    return (
      <div>
        App is rendering
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('details'));