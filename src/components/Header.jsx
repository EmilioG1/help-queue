import React from 'react';
import lawyer from './../img/lawyer.jpeg'
import './Header.css'


function Header() {
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={lawyer} alt="a bird lawyer" />
    </React.Fragment>
  );
}

export default Header;