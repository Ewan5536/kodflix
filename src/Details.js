import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      welcomeMessage: 'Welcome to details page, WIP :)))'
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState ({
        welcomeMessage: 'check out the latest from kodfilx!'
      });
    }, 2500);
  }


  render() {
    return (
      <div>
        <h1>{this.state.welcomeMessage}</h1>
        <Link to="/"><i>Back to home page</i></Link>
      </div>
    );
  }
}
