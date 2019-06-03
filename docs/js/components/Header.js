/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { IndexLink, Link } from 'react-router';

const Header = () => (
  <header className="header">
    <nav>
      <ul>
        <li><IndexLink to="/" activeClassName="is-active">Home</IndexLink></li>
        <li><Link to="/recommendation/" activeClassName="is-active">Recommended combination for Japanese</Link></li>
        <li><Link to="/applyFont/" activeClassName="is-active">How to apply font with Android</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
