/**
 * music action
 */
import Request from "../utils/request";
import API from "../utils/api";

export const GET_LYRIC = "GET_LYRIC";
export const MUSIC_PLAY = "MUSIC_PLAY";
export const MUSIC_PAUSE = "MUSIC_PAUSE";
export const MUSIC_CURRENT = "MUSIC_CURRENT";
export const MUSIC_CURRENTTIME = "MUSIC_CURRENTTIME";

export const getLyricAction = ({ id }) => async dispatch => {
  let data = await Request({
    url: API.lyric,
    method: "get",
    data: {
      id,
      lv: 1
    }
  });
  let lyric = [];
  let i = 0;
  JSON.parse(data)
    .lrc.lyric.split("\n")
    .map((item, index) => {
      if (item) {
        try {
          const array = item.match(/\[(\d+):(\d+.\d+)\](.*)/);
          lyric.push({
            time: parseInt(array[1]) * 60 + parseFloat(array[2]),
            content: array[3],
            index:i++
          });
        } catch (error) {}
      }
    });
  dispatch({
    type: GET_LYRIC,
    data: lyric
  });
};

export const musicPlayAction = () => dispatch => {
  dispatch({
    type: MUSIC_PLAY
  });
};

export const musicPauseAction = () => dispatch => {
  dispatch({
    type: MUSIC_PAUSE
  });
};

export const musicCurrentTimeAction = (currentTime,duration) => dispatch => {
  dispatch({
    type: MUSIC_CURRENTTIME,
    data: {currentTime,duration}
  });
};

export const musicCurrentAction = id => dispatch => {
  dispatch({
    type: MUSIC_CURRENT,
    data: {
      id
    }
  });
};
