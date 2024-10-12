import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  GET_USER_REQUEST,
  LOGIN_FAILURE,
  GET_USER_FAILURE,
  LOGIN_SUCCESS,
  GET_USER_SUCCESS,
} from "./ActionTypes";

const initialState = {
  user: null,
  loading: null,
  error: null,
  jwt: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, jwt: action.payload, loading: false, error: null };

    case GET_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default authReducer;
