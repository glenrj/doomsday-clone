import React, { Component } from 'react';
import '../styles/footer.css';


class Footer extends Component {
    render() {
        return (
            <footer className='clearfix'>
                <div className='left'>
                    <p>Doomsday Jamboree Co.</p>
                </div>
                <div className="right">
                    <p>copyright doomsday squad</p>
                </div>
            </footer>
        )
    }
}

export default Footer;