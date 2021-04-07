import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Who am i?", duration: "4:05" },
    { title: "Hello World?", duration: "3:15" },
    { title: "Titanic", duration: "2:05" },
    { title: "Marshmellow", duration: "2:56" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
