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
      return (
        <div>
          <Navbar />
          <FeatureList items={this.state.items} />
          <DescriptionBlock items={this.state.items} />
          <Footer />
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


ReactDOM.render(<App />, document.getElementById('app'));