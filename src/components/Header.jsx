import React from "react";
import spotifyLogo from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={spotifyLogo} alt="Logo Spotify" />

      <a className="header__link" href="/">
        <h1>Spotify</h1>
      </a>
    </div>
  );
};

export default Header;
