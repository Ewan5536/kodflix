import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getTvshow from '../galTvShow';
import './Details.css';

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
    if (this.state.Show === undefined) {
      return <Redirect to='/not-found' />;
    } else {
      return (
        <div className='Details'>
          <h1>{this.state.Show.name}</h1>
          <div className='content'>
            <div className= 'text'>
              <h2>{this.state.Show.synopsis}</h2>
            </div>
            
            <img
              className='image'
              src={this.state.Show.tvShowLogo}
              alt={this.state.Show.name} />
          </div>
          <Link to="/"><h2><i>Back to home page</i></h2></Link>
        </div>
      );
    }
  }
}
