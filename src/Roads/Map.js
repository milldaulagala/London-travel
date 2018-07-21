import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import './Map.css';

const MyGoogleMap = withScriptjs(withGoogleMap(props => {
  const google = window.google;
  if (google === undefined) return;
  return (
    <GoogleMap
      defaultZoom={10}
      center={props.center}
    >
      {props.markers.map((marker, index) => (
        <Marker
          key={index}
          position={new google.maps.LatLng(marker.position[1], marker.position[0])} />
      ))}
    </GoogleMap>
  )
}));

class Map extends Component {
  state = {
    center: {
      lat: 51.533434,
      lng: -0.124997
    }
  }

  render() {
    return (
      <MyGoogleMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
        containerElement={
          <div style={{ height: `90vh` }} />
        }
        mapElement={
          <div style={{ height: `90vh` }} />
        }
        center={this.state.center}
        markers={this.props.markers}
      />
    )
  }
}

export default Map;

