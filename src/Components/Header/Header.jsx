import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src="Netflixlogo.jpeg" alt="Netflix Logo" />
      <ul className="header__nav">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Latest</li>
        <li>My List</li>
        <li>Browse by Languages</li>
      </ul>
      <img className="header__avatar" src="user_avatar.png" alt="User Avatar" />
    </div>
  );
};

export default Header;
