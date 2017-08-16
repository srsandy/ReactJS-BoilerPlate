import style from '../css/style.sass'
import React, { Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render () {
    return <p> Hello React!</p>;
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));