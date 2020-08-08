import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon></MenuIcon>
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/640px-YouTube_Logo.svg.png"
            alt="logo-youtube"
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />

        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton"></SearchIcon>
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon"></VideoCallIcon>
        <AppsIcon className="header__icon"></AppsIcon>
        <NotificationsIcon className="header__icon"></NotificationsIcon>
        <Avatar
          src="https://avatars0.githubusercontent.com/u/49985097?s=460&u=6c1cbb13db27b14cc2e64bcf40e2d960e732bba1&v=4"
          alt="Kunal"
        ></Avatar>
      </div>
    </div>
  );
}

export default Header;
