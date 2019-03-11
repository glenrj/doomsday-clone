import React, { Component } from 'react';
import MapDirections from '../components/MapDirections';

class Map extends Component {
  getMap = () => {
    if (this.props.choice === 'alex') {
      return (
        <div>
          <h2>Alex's Bunker</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat dolorum accusantium harum adipisci voluptates
            consequuntur. Laboriosam quia consequuntur nesciunt fuga!
          </p>
          <a href='https://www.google.ca/maps/dir//483+Queen+St+W,+Toronto,+ON+M5V+2A9/@43.6483351,-79.4000419,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x882b34dc87fa67bd:0xe05376a9e49647e1!2m2!1d-79.3978242!2d43.6482738' target='_blank'>
            <img
              className='alex'
              src='https://www.mapquestapi.com/staticmap/v5/map?key=T0v8EvAMROc0iDiMAoFFnblYHAdslHMH&locations=483 Queen Street West, Toronto, ON M5V 2A9&defaultMarker=marker-red-lg'
              alt=''
            />
          </a>
        </div>
      );
    } else if (this.props.choice === 'glen') {
      return (
        <div>
          <h2>Glen's Bunker</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat dolorum accusantium harum adipisci voluptates
            consequuntur. Laboriosam quia consequuntur nesciunt fuga!
          </p>
          <a
            href='https://www.google.ca/maps/dir//955+Lake+Shore+Blvd+W,+Toronto,+ON+M6K+3B9/@43.6305144,-79.4491849,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x882b350e29f4d8c1:0x8176e955dd91f7b3!2m2!1d-79.4141654!2d43.6304576'
            target='_blank'
          >
            <img
              src='https://www.mapquestapi.com/staticmap/v5/map?key=T0v8EvAMROc0iDiMAoFFnblYHAdslHMH&locations=955 Lake Shore Blvd W, Toronto, ON M6K 3B9&defaultMarker=marker-red-lg'
              alt=''
            />
          </a>
        </div>
      );
    } else if (this.props.choice === 'oiza') {
      return (
        <div>
          <h2>Oiza's Bunker</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat dolorum accusantium harum adipisci voluptates
            consequuntur. Laboriosam quia consequuntur nesciunt fuga!
          </p>
          <a
            href='https://www.google.ca/maps/dir//Chinguetti,+Mauritania/@20.459705,-12.3724616,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0xe84120b09cf2bf9:0xb0f6ba637c97e0a2!2m2!1d-12.3664341!2d20.4615121'
            target='_blank'
          >
            <img
              src='https://www.mapquestapi.com/staticmap/v5/map?key=T0v8EvAMROc0iDiMAoFFnblYHAdslHMH&locations=Route Chinguetti, Chinguetti 1234, Mauritania&defaultMarker=marker-red-lg'
              alt=''
            />
          </a>
        </div>
      );
    } else if (this.props.choice === 'zoe') {
      return (
        <div>
          <h2>Zoe's Bunker</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat dolorum accusantium harum adipisci voluptates
            consequuntur. Laboriosam quia consequuntur nesciunt fuga!
          </p>
          <a
            href='https://www.google.ca/maps/dir//Seventeen+Seventy+QLD+4677,+Australia/@-24.1612988,151.850188,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x6be99008cb7c339b:0x400eef17f20c990!2m2!1d151.8852075!2d-24.1613811'
            target='_blank'
          >
            <img
              src='https://www.mapquestapi.com/staticmap/v5/map?key=T0v8EvAMROc0iDiMAoFFnblYHAdslHMH&locations=Seventeen Seventy Queensland 4677, Australia&defaultMarker=marker-red-lg'
              alt=''
            />
          </a>
        </div>
      );
    } else 
    return (
      <h2>Select a Bunker!</h2>
    )
  };

  render() {
    return <section>
    {this.getMap()}
    <MapDirections bunker={this.props.choice}/>
    </section>;
  }
}

export default Map;
