import { LISTVIEW_LIST, LISTVIEW_MORE } from "../constants/ActionTypes";

const initialState = {
  data: [],
  page: 1,
  pageSize: 10,
  hasMore: true
};

const ListviewRefreshReducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTVIEW_LIST:
      return Object.assign({}, state, action.data, {
        data: [...action.data.data]
      });
    case LISTVIEW_MORE:
      return Object.assign({}, state, action.data, {
        data: [...state.data, ...action.data.data]
      });
    default:
      return state;
  }
};

export default ListviewRefreshReducer;
