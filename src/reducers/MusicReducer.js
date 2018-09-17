import {
  GET_LYRIC,
  MUSIC_CURRENT,
  MUSIC_PLAY,
  MUSIC_PAUSE,
  MUSIC_CURRENTTIME
} from "../actions/MusicAction";

const initialState = {
  lyric: [{ time: 0, content: "" }],
  current: {
    id: 0
  },
  status: "pause",
  currentTime: 0,
  duration:0
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LYRIC:
      return Object.assign({}, state, { lyric: [...action.data] });
    case MUSIC_CURRENT:
      return Object.assign({}, state, { current: { ...action.data } });
    case MUSIC_PLAY:
      return Object.assign({}, state, { status: "play" });
    case MUSIC_PAUSE:
      return Object.assign({}, state, { status: "pause" });
    case MUSIC_CURRENTTIME:
      return Object.assign({}, state, { ...action.data });
    default:
      return state;
  }
};

export default musicReducer;
