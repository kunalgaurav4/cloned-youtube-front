import React from "react";
import "./SearchPage.css";
import VideoRow from "./VideoRow";
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon></TuneOutlinedIcon>
        <h2>Filter</h2>
      </div>
      <hr></hr>
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJwknfh7C2n39oT0HoovcybV8FvArF4JKVq96Cyw=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Love Babbar"
        verified
        subs="80.5k"
        noOfVideos="88 videos"
        description="Hi, there I am Love Babar,a graduate from NSUT,Delhi.I am a SDE at Amazon."
      ></ChannelRow>
      <hr></hr>
      {/* list all videos */}
      <VideoRow
        image="https://i.ytimg.com/vi/AgrV4QHZKl4/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAD-Q0IbIq7762kro5jjg6L1FLPag"
        title="Starting with competitive"
        channel="Love Babbar"
        subs="93.8k"
        views="38k"
        timestamp="3 Days"
        description="Hi, there I am Love Babar,a graduate from NSUT,Delhi.I am a SDE at Amazon."
      ></VideoRow>
      <VideoRow
        image="https://i.ytimg.com/vi/qe6l5uxUZkY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDmQIeF9c1jHmSL36hH5qieWzKk4A"
        title="What a Software Engineer really does?"
        channel="Love Babbar"
        subs="93.8k"
        views="38k"
        timestamp="10 Days"
        description="Some Common Doubts are discussed here in this video for students, who want to become a Software Engineer or those who want to build a career in the Corporate IT Sector"
      ></VideoRow>
      <VideoRow
        image="https://i.ytimg.com/vi/AgrV4QHZKl4/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAD-Q0IbIq7762kro5jjg6L1FLPag"
        title="Starting with competitive"
        channel="Love Babbar"
        subs="93.8k"
        views="38k"
        timestamp="3 Days"
        description="Hi, there I am Love Babar,a graduate from NSUT,Delhi.I am a SDE at Amazon."
      ></VideoRow>
      {/* list all videos */}
      <VideoRow
        image="https://i.ytimg.com/vi/AgrV4QHZKl4/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAD-Q0IbIq7762kro5jjg6L1FLPag"
        title="Starting with competitive"
        channel="Love Babbar"
        subs="93.8k"
        views="38k"
        timestamp="3 Days"
        description="Hi, there I am Love Babar,a graduate from NSUT,Delhi.I am a SDE at Amazon."
      ></VideoRow>{" "}
      {/* list all videos */}
      <VideoRow
        image="https://i.ytimg.com/vi/AgrV4QHZKl4/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAD-Q0IbIq7762kro5jjg6L1FLPag"
        title="Starting with competitive"
        channel="Love Babbar"
        subs="93.8k"
        views="38k"
        timestamp="3 Days"
        description="Hi, there I am Love Babar,a graduate from NSUT,Delhi.I am a SDE at Amazon."
      ></VideoRow>{" "}
      {/* list all videos */}
      <VideoRow
        image="https://i.ytimg.com/vi/AgrV4QHZKl4/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAD-Q0IbIq7762kro5jjg6L1FLPag"
        title="Starting with competitive"
        channel="Love Babbar"
        subs="93.8k"
        views="38k"
        timestamp="3 Days"
        description="Hi, there I am Love Babar,a graduate from NSUT,Delhi.I am a SDE at Amazon."
      ></VideoRow>{" "}
      {/* list all videos */}
      <VideoRow
        image="https://i.ytimg.com/vi/AgrV4QHZKl4/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAD-Q0IbIq7762kro5jjg6L1FLPag"
        title="Starting with competitive"
        channel="Love Babbar"
        subs="93.8k"
        views="38k"
        timestamp="3 Days"
        description="Hi, there I am Love Babar,a graduate from NSUT,Delhi.I am a SDE at Amazon."
      ></VideoRow>{" "}
      {/* list all videos */}
      {/* list all videos */}
      <VideoRow
        image="https://i.ytimg.com/vi/qe6l5uxUZkY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDmQIeF9c1jHmSL36hH5qieWzKk4A"
        title="What a Software Engineer really does?"
        channel="Love Babbar"
        subs="93.8k"
        views="38k"
        timestamp="10 Days"
        description="Some Common Doubts are discussed here in this video for students, who want to become a Software Engineer or those who want to build a career in the Corporate IT Sector"
      ></VideoRow>
    </div>
  );
}

export default SearchPage;
