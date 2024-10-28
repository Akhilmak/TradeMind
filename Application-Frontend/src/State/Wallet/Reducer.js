import {
  GET_DEPOSIT_MONEY_FAILURE,
  GET_DEPOSIT_MONEY_REQUEST,
  GET_DEPOSIT_MONEY_SUCCESS,
  GET_TRANSFER_MONEY_FAILURE,
  GET_TRANSFER_MONEY_REQUEST,
  GET_TRANSFER_MONEY_SUCCESS,
  GET_USER_WALLET_FAILURE,
  GET_USER_WALLET_REQUEST,
  GET_USER_WALLET_SUCCESS,
  GET_WALLET_TRANSACTION_FAILURE,
  GET_WALLET_TRANSACTION_REQUEST,
  GET_WALLET_TRANSACTION_SUCCESS,
} from "./ActionTypes";

const initialState = {
  userWallet: {},
  loading: false,
  error: null,
  transactions: [],
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_WALLET_REQUEST:
    case GET_WALLET_TRANSACTION_REQUEST:
    case GET_DEPOSIT_MONEY_REQUEST:
    case GET_TRANSFER_MONEY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_WALLET_TRANSACTION_SUCCESS:
      return {
        ...state,
        transactions: action.payload,
        loading: false,
        error: null,
      };

    case GET_USER_WALLET_SUCCESS:
    case GET_TRANSFER_MONEY_SUCCESS:
      return {
        ...state,
        transactions: action.payload,
        loading: false,
        error: null,
      };
    case GET_DEPOSIT_MONEY_SUCCESS:
      return {
        ...state,
        userWallet: action.payload,
        loading: false,
        error: null,
      };
    case GET_USER_WALLET_FAILURE:
    case GET_TRANSFER_MONEY_FAILURE:
    case GET_DEPOSIT_MONEY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default walletReducer;
