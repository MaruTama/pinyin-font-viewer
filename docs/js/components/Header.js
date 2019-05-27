/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { IndexLink, Link } from 'react-router';

const Header = () => (
  <header className="header">
    <h1><img src="./images/logo.png" alt="React Stack Grid" /></h1>
    <nav>
      <ul>
        <li><IndexLink to="/" activeClassName="is-active">Home</IndexLink></li>
        <li><Link to="/horizontal/" activeClassName="is-active">Horizontal</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
