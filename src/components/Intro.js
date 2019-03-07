import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';



class Intro extends Component {
    render() {
        return (
            <div className='intro'>
                <h1>DOOMSDAYYYYYYY</h1>
                {/* description */}
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur libero voluptatum vero praesentium molestiae
                    assumenda accusantium sequi delectus reiciendis odit eveniet ex
                    inventore omnis explicabo culpa itaque laudantium, enim vel.
                </p>
            </div>
        )
    }
}

export default Intro;