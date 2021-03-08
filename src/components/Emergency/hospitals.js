import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Navbar from "../Navbar/navbar";

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class Hospitals extends Component {
  render() {
    return (
      <div>
      <div><Navbar/></div>
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      /></div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDLqZR9kwFxtsYcInm4TfL5Mcg0eNrE57g'
})(Hospitals);