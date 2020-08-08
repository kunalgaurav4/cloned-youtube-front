import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMore";
import WatchLaterIcon from "@material-ui/icons/WatchLater";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home"></SidebarRow>
      <SidebarRow Icon={WhatshotIcon} title="Trending"></SidebarRow>
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription"></SidebarRow>
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library"></SidebarRow>
      <SidebarRow Icon={HistoryIcon} title="History"></SidebarRow>
      <SidebarRow Icon={OndemandVideoIcon} title="Your Videos"></SidebarRow>
      <SidebarRow Icon={WatchLaterIcon} title="Watch videos"></SidebarRow>
      <SidebarRow
        Icon={ThumbUpAltOutlinedIcon}
        title="Liked Videos"
      ></SidebarRow>
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"></SidebarRow>
    </div>
  );
}

export default Sidebar;
