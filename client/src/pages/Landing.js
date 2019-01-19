import React, {Component} from 'react';
import {Button} from 'reactstrap';

class Landing extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="landingTitle">Welcome to thinkTribe.</h1>
                <Button outline color="secondary" size="lg" id="getStarted">
                    <a href="/home">
                        Get Started
                    </a>
                </Button>
                {''}
                <img
                    className="landingImg"
                    id="brainImg"
                    src="./images/thinkTribe2.png"
                    alt="thinkTribe Main Logo"/>

            </div>
        )
    }
}

export default Landing