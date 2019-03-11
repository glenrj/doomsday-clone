import React, { Component } from 'react';
import axios from "axios";
import Header from '../components/Header.js';

class MapDirections extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      bunkerAddress: '',
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
      showResults: true,
      // bunkerAddress: '5000 yonge st toronto, on'
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
        console.log(res);
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
        to: this.state.bunkerAddress
      }
    })
      .then(res => {
        console.log(res);
        const directions = res.data.route.legs[0].maneuvers;
        console.log(directions);
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
        bunkerAddress: '483 queen street west toronto,on'
      });
    } else if (this.props.bunker === 'glen') {
      this.setState({
        bunkerAddress: '955 Lake Shore Blvd W, Toronto, ON M6K 3B9'
      });
    } else if (this.props.bunker === 'oiza') {
      this.setState({
        bunkerAddress: '1100 W.Ruins Drive, Coolidge, AZ 85128'
      });
    } else if (this.props.bunker === 'zoe') {
      this.setState({
        bunkerAddress: 'Highway 16 East, British Columbia, Canada'
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
      <div>
      {/* <Header user={this.props.user}/> */}
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
                  }&end=${this.state.bunkerAddress}&key=T0v8EvAMROc0iDiMAoFFnblYHAdslHMH`}
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
      </div>
    )
  }
}

export default MapDirections;
