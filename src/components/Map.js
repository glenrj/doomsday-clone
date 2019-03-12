import React, { Component } from 'react';
import MapDirections from '../components/MapDirections';
import '../styles/map.css';


class Map extends Component {
  getMap = () => {
    if (this.props.choice === 'alex') {
      return (
        <div>
          <h2>Alex's Bunker</h2>
          <p>
            The original bunker location 
          </p>
            <img
              className='alex'
              src='https://www.mapquestapi.com/staticmap/v5/map?key=T0v8EvAMROc0iDiMAoFFnblYHAdslHMH&locations=483 Queen Street West, Toronto, ON M5V 2A9&defaultMarker=marker-red-lg'
            alt='map of 483 Queen Street West, Toronto, ON M5V 2A9'
            />
        </div>
      );
    } else if (this.props.choice === 'glen') {
      return (
        <div>
          <h2>Glen's Bunker</h2>
          <p>
            Glen’s bunker is conveniently located in Toronto, close to
            downtown as well as the lake. Inside of the abandoned Ontario
            Place grounds, this doomsday hideout is tucked inside what was
            known as the ‘Cinesphere’. This large yet secure building is
            good for hoarding community resources for the coming
            apocalypse as well as hosting a successful Doomsday Jamboree.
          </p>
            <img
              src='https://www.mapquestapi.com/staticmap/v5/map?key=T0v8EvAMROc0iDiMAoFFnblYHAdslHMH&locations=955 Lake Shore Blvd W, Toronto, ON M6K 3B9&defaultMarker=marker-red-lg'
            alt='map of 955 Lake Shore Blvd W, Toronto, ON M6K 3B9'
            />
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
            <img
              src='https://www.mapquestapi.com/staticmap/v5/map?key=T0v8EvAMROc0iDiMAoFFnblYHAdslHMH&locations=1100 W.Ruins Drive, Coolidge, AZ 85128&defaultMarker=marker-red-lg'
            alt='map of 1100 W.Ruins Drive, Coolidge, AZ 85128'
            />
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
            <img
              src='https://www.mapquestapi.com/staticmap/v5/map?key=T0v8EvAMROc0iDiMAoFFnblYHAdslHMH&locations=Highway 16 East, British Columbia, Canada&defaultMarker=marker-red-lg'
            alt='map of Highway 16 East, British Columbia, Canada'
            />
        </div>
      );
    } else 
    return (
      <h2>Select a Bunker!</h2>
    )
  };

  render() {
    return (
    <section className='clearfix'>
      <div className='mapLeft'>
        {this.getMap()}
      </div>
      <MapDirections bunker={this.props.choice} />
    </section>
    )
  }
}

export default Map;
