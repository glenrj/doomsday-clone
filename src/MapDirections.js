import React, { Component } from 'react';
import axios from "axios";

class MapDirections extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      userMapInfo: {},
      userDirections: [],
      userAddress: ''
      // userDestination: "",
    };
  }

  handleChange = (event) => {
    // when onChange occurs, target the input's value
    this.setState({
      [event.target.name]: event.target.value,
      userAddress: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.getMapInfo();
    this.getDirections();
    this.setState({
      userInput: '',
      showResults: true
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
        to: "483 queen street west toronto,on"
      }
    })
      .then(res => {
        const mapInfo = res.data.route.legs[0];
        console.log(mapInfo);
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
        to: '483 queen street west toronto,on'
      }
    })
      .then(res => {
        console.log(res);
        const directions = res.data.route.legs[0].maneuvers;
        console.log(directions);
        this.setState({
          userDirections: directions
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className='App'>
        <header>
          <div className='wrapper'>
            <div className='container'>
              <h1>Find a bunker near you!</h1>

              <form action="submit" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="Type your address"
                  onChange={this.handleChange}
                  name="userInput"
                  value={this.state.userInput}
                />
              </form>
            </div>

            <div>
              <img
                src={`https://www.mapquestapi.com/staticmap/v5/map?start=${
                  this.state.userAddress
                  }&end=483 queen st w toronto, on&key=T0v8EvAMROc0iDiMAoFFnblYHAdslHMH`}
                alt=""
              />
            </div>
            <p>
              {`the total distance to HackerYou is
                  ${
                this.state.userMapInfo.distance
                } kms and will take a total time
                  of ${this.state.userMapInfo.formattedTime} min`}
            </p>
          </div>


          <h2>Directions</h2>
          {this.state.userDirections.map((path, i) => {
            return (
              <div key={i}>
                <img src={path.mapUrl} alt="" />
                <p>{path.narrative}</p>
                <p>it is {path.distance} kms</p>
                <p>it will take {path.formattedTime} min</p>
              </div>
            )
          }
          )
          }

        </header>
      </div>
    )
  }
}

export default MapDirections;
