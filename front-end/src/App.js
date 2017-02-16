import React, { Component } from 'react';
import '../public/stylesheets/styles.css';
import NavBar from './components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
        <NavBar />
      </div>
    );
  }
}

export default App;
