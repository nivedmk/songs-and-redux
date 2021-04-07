import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select Song</div>;
  }
  return (
    <div>
      <h3>Song Detail</h3>
      <p>Song Title: {song.title}</p>
      <p>Song Duration: {song.duration} min</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
