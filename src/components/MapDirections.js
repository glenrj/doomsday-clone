import React, { Component } from 'react';
import axios from "axios";
import '../styles/map.css';

class MapDirections extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      bunkerAddress: '',
      userInput: '',
      userMapInfo: [],
      userDirections: [],
      userAddress: '',
      showResults: false
    };
  }

  handleChange = (event) => {
    // when onChange occurs, target the input's value
    this.setState({
      [event.target.name]: event.target.value,
      userAddress: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.getMapInfo();
    this.getDirections();
    this.setState({
      userInput: '',
      showResults: true,
    });
  };

  getMapInfo = () => {
    axios({
      method: "GET",
      url: "http://www.mapquestapi.com/directions/v2/route",
      outFormat: "json",
      params: {
        key: "T0v8EvAMROc0iDiMAoFFnblYHAdslHMH",
        outFormat: "json",
        unit: "k",
        from: this.state.userInput,
        to: this.state.bunkerAddress
      }
    })
      .then(res => {
        const mapInfo = res.data.route.legs;
        this.setState({
          userMapInfo: mapInfo
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getDirections = () => {
    axios({
      method: 'GET',
      url: 'https://www.mapquestapi.com/directions/v2/route',
      outFormat: 'json',
      params: {
        key: 'T0v8EvAMROc0iDiMAoFFnblYHAdslHMH',
        outFormat: 'json',
        unit: 'k',
        from: this.state.userInput,
        to: this.state.bunkerAddress
      }
    })
    .then(res => {
      const directions = res.data.route.legs[0].maneuvers;
      this.setState({
        userDirections: directions
      });
      this.setState({
        userInput: '',
        showResults: true,
      })
    })
    .catch(err => {
      console.log(err);
    });
  };

  setBunkerAddress = () => {
    if (this.props.bunker === 'alex') {
      this.setState({
        bunkerAddress: '483 Queen Street West, Toronto, ON M5V 2A9',
        showResults: false
      });
    } else if (this.props.bunker === 'glen') {
      this.setState({
        bunkerAddress: '955 Lake Shore Blvd W, Toronto, ON M6K 3B9',
        showResults: false
      });
    } else if (this.props.bunker === 'oiza') {
      this.setState({
        bunkerAddress: '1100 W.Ruins Drive, Coolidge, AZ 85128',
        showResults: false
      });
    } else if (this.props.bunker === 'zoe') {
      this.setState({
        bunkerAddress: 'Highway 16 East, British Columbia, Canada',
        showResults: false
      });
    }
  }

  componentDidMount() {
    this.setBunkerAddress();
  }

  componentDidUpdate(prevProps) {
    if (this.props.bunker !== prevProps.bunker) {
      this.setBunkerAddress();
    }
  }


  render() {
    return (
      <div
        className='mapRight'
        data-simplebar
        data-simplebar-auto-hide='false'
      >
        <div>
          <h2>How do I get here?</h2>

          <div className='mapParent'>
            <form action='submit' onSubmit={this.handleSubmit}>
              <input
                type='textarea'
                placeholder='Type your address'
                onChange={this.handleChange}
                name='userInput'
                value={this.state.userInput}
                required
                className='mapInput'
              />
            </form>
            <button className='mapSubmit' type='submit'>
              +
            </button>
          </div>

          {this.state.showResults ? (
            <div className='mapResults'>
              <img
                src={`https://www.mapquestapi.com/staticmap/v5/map?start=${
                  this.state.userAddress
                }&end=${
                  this.state.bunkerAddress
                }&key=T0v8EvAMROc0iDiMAoFFnblYHAdslHMH`}
                alt=''
              />
              <p>From: {this.state.userAddress}</p>
              <p>To: {this.state.bunkerAddress}</p>

              {this.state.userMapInfo.map(info => {
                const totalDistance = info.distance.toFixed(1);
                return (
                  <div>
                    <p>
                      {info.formattedTime} (hr:min:sec) - {totalDistance}{' '}
                      kms
                    </p>
                  </div>
                );
              })}

              <div>
                <h2>Directions</h2>
                {this.state.userDirections.map((path, i) => {
                  const distance = path.distance.toFixed(1);
                  return (
                    <div key={i} className='clearfix'>
                      <div>
                        <img
                          src={path.iconUrl}
                          alt=''
                          className='symbols'
                        />
                        <a href={path.mapUrl} alt='' target='_blank'>
                          {' '}
                          {path.narrative}{' '}
                        </a>
                      </div>
                      <p>
                        {path.formattedTime} (hr:min:sec) - {distance} kms{' '}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default MapDirections;
