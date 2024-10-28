import { existInWatchList } from "@/utils/existInWatchList";
import {
  GET_USER_WATCHLIST_REQUEST,
  ADD_COIN_TO_WATCHLIST_REQUEST,
  GET_USER_WATCHLIST_SUCCESS,
  ADD_COIN_TO_WATCHLIST_SUCCESS,
  ADD_COIN_TO_WATCHLIST_FAILURE,
  GET_USER_WATCHLIST_FAILURE,
} from "./ActionTypes";

const initialState = {
  watchlist: null,
  loading: false,
  error: null,
  items: [],
};

const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_WATCHLIST_REQUEST:
    case ADD_COIN_TO_WATCHLIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_USER_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchList: action.payload,
        items: action.payload.coins,
        loading: false,
        error: null,
      };

    case ADD_COIN_TO_WATCHLIST_SUCCESS:
      let updatedItems = existInWatchList(state.items, action.payload)
        ? state.items.filter((item) => item.id !== action.payload.id)
        : [action.payload, ...state.items];
      return {
        ...state,
        items: updatedItems,
        loading: false,
        error: null,
      };

    case GET_USER_WATCHLIST_FAILURE:
    case ADD_COIN_TO_WATCHLIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default watchlistReducer;
