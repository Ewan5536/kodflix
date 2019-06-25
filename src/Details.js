import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getTvshow from './galTvShow';

export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      Show: {}
    };
  }
  componentDidMount() {
    let tvShow = this.props.match.params.showId;
    let Show = getTvshow().find((Show) =>
      Show.id === tvShow
    );
    this.setState({ Show });
  }


  render() {
    return (
      <div>
        <h1>{this.state.Show.name}</h1>
        <Link to="/"><i>Back to home page</i></Link>
      </div>
    );
  }
}
