import React, { Component } from 'react';
import '../public/stylesheets/styles.css';
import MainImage from './components/MainImage.jsx';
import DescDetBox from './components/DescDetBox';
import NavBar from './components/NavBar';
import ThumbnailBox from './components/ThumbnailBox';


class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
