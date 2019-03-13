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
            Alex’s bunker is found in the HackerYou building on Queen
            Street West in Toronto and was created as part of a pilot
            project for future bunker initiatives. This 15-storey
            underground luxury compound is able to withstand everything
            from extreme weather like tornadoes, to a full blown nuclear
            attack. It also comes equipped with full fibre optic intranet
            and is fully decked out in amenities designed to appeal to our
            customer base. The compounds consist of a cinema, indoor pool
            and spa, medical first aid centre, bar, rock climbing wall,
            gym, and library. Inquire now for availability.
          </p>
          <img
            src='https://www.mapquestapi.com/staticmap/v5/map?key=jAuMBn6SemqglGEvttlGDZiDyMwOn7SL&locations=483 Queen Street West, Toronto, ON M5V 2A9&defaultMarker=marker-red-lg'
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
            src='https://www.mapquestapi.com/staticmap/v5/map?key=jAuMBn6SemqglGEvttlGDZiDyMwOn7SL&locations=955 Lake Shore Blvd W, Toronto, ON M6K 3B9&defaultMarker=marker-red-lg'
            alt='map of 955 Lake Shore Blvd W, Toronto, ON M6K 3B9'
            />
        </div>
      );
    } else if (this.props.choice === 'oiza') {
      return (
        <div>
          <h2>Oiza's Bunker</h2>
          <p>
            Oiza’s bunker is a secret state-of-the-art fortress strategically chosen to ensure maximum survival during the coming apocalypse. Featuring the perfect soil for agricultural advancements, our new residence also boasts a natural resistance to the predicted unending winters and floods. In other words, bring your shorts! Approved residents will depart from the Casa Grande Ruins in Coolidge at 8pm on a single date that will be shared four days in advance by encrypted mail. No other passage will be provided to this bunker. Please remember to bring with you one week’s supply of bottled water.
          </p>
            <img
            src='https://www.mapquestapi.com/staticmap/v5/map?key=jAuMBn6SemqglGEvttlGDZiDyMwOn7SL&locations=1100 W.Ruins Drive, Coolidge, AZ 85128&defaultMarker=marker-red-lg'
            alt='map of 1100 W.Ruins Drive, Coolidge, AZ 85128'
            />
        </div>
      );
    } else if (this.props.choice === 'zoe') {
      return (
        <div>
          <h2>Zoe's Bunker</h2>
          <p>
            Zoe's bunker is located in The Ancient Forest off of highway
            16 east, BC. but good luck finding it! The bunker is a secure
            base, undetectibbly hidden from the public eye in the dense
            forest large enuff for 50 people. Bring your own food, drinks,
            entertainment, and survival gear! If you are one of the lucky
            ones you will get a letter delivered to you by owl. This
            letter will have the directions and time of departure.. note
            this letter will disintegrate after being read.
          </p>
          <img
            src='https://www.mapquestapi.com/staticmap/v5/map?key=jAuMBn6SemqglGEvttlGDZiDyMwOn7SL&locations=Highway 16 East, British Columbia, Canada&defaultMarker=marker-red-lg'
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
