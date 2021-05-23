import './NavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='NavBar'>
      <div id='nav'>
        <div>
          <h4>CoVaccine</h4>
        </div>
        <div className='nav_ref'>
          <Link to='/' className='link1'>
            Home
          </Link>
          <Link to='/findpin' className='link1'>
            Find By PinCode
          </Link>
          <Link to='/notify' className='link1'>
            Get Notified
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
