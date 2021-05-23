import './Home.css';
import React from 'react';
import {Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div id="first" >
                <div className="first_cont">
                    <h1>Covid Vaccine Updates <br /> And Notifications.</h1>
                    <p>Turn on notification by simply filling the "Get-Notified" form <br /> below and get notified about the availability.</p>
                    <Link className="sign_button btn" to="/findpin">Find By Pin</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
