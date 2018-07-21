// component for showing car parks occupancy
import React, { Component } from 'react';
import axios from 'axios';
import CarParkCard from './CarParkCard';
import Loader from '../Loader';
import GoBack from '../GoBack';

class CarParks extends Component {
  state = {
    loading: true,
    carParksData: [],
    searchTerm: ''
  };

    //get data from API
  componentDidMount() {
    axios.get(`https://api.tfl.gov.uk/Occupancy/CarPark?app_id=3b245fef&app_key=cfae3457ce0dbf8317d10a5d7857a056`)
      .then((response) => {
        this.setState({ carParksData: response.data });
        this.setState({ loading: false });
      });
  };
    
  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  };
  
  render() {
    if (this.state.loading === true) {
      return (<Loader />);
    } else {
      return (
        <div>
          <GoBack />
          <div>
            <input onChange={this.handleSearch} type="text" placeholder="Seach by name" className="search" />
          </div>
          <div className="tube-wrapper">
            {this.state.carParksData
              .filter(item =>
                item.name.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
              .map(item => {
                const capacity = item.bays
                  .filter(bay => bay.bayType !== 'Disabled'); // filtering 'disabled' car bays
                console.log(capacity)
                return (
                  <CarParkCard
                    key={item.id}
                    name={item.name}
                    capacity={capacity[0] ? capacity[0].bayCount : 0}
                    occupied={capacity[0] ? capacity[0].occupied : 0}
                    free={capacity[0] ? capacity[0].free: 0}
                  />
                )
              }
              )}
          </div>
        </div>
      )
    }          
  }
}


export default CarParks;