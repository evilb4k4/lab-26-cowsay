'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import Cowsay from 'cowsay-browser';
import Faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Moo!',
      method: 'say',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ content: Faker.lorem.words(10) }));
  }

  render() {
    return (
      <div>
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={this.handleClick}>Click me!</button>
        <pre>{ Cowsay.say({ text: this.state.content }) }</pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
