import api from "@/config/api";
import { GET_DEPOSIT_MONEY_FAILURE, GET_DEPOSIT_MONEY_REQUEST, GET_DEPOSIT_MONEY_SUCCESS, GET_TRANSFER_MONEY_FAILURE, GET_TRANSFER_MONEY_REQUEST, GET_TRANSFER_MONEY_SUCCESS, GET_USER_WALLET_FAILURE, GET_USER_WALLET_REQUEST, GET_USER_WALLET_SUCCESS, GET_WALLET_TRANSACTION_FAILURE, GET_WALLET_TRANSACTION_REQUEST, GET_WALLET_TRANSACTION_SUCCESS } from "./ActionTypes";

export const getUserWallet = (jwt) => async (dispatch) => {
  // console.log(15);
  dispatch({ type: GET_USER_WALLET_REQUEST });
  try {
    const { data } = await axios.get(`${baseUrl}/api/wallet`, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        }
    });
    dispatch({ type: GET_USER_WALLET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USER_WALLET_FAILURE, error: error.message });
    console.log(error);
  }
};

export const getWalletTransactions =
  ({ coinId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: GET_WALLET_TRANSACTION_REQUEST });
    // console.log(jwt);
    try {
      const {data} = await axios.get(`${baseUrl}/api/wallet/transactions`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      // console.log("CoinDetails", data);
      dispatch({ type: GET_WALLET_TRANSACTION_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_WALLET_TRANSACTION_FAILURE, error: error.message });
    }
  };
  export const depositMoney =
  ({ jwt,orderId,paymentId,navigate }) =>
  async (dispatch) => {
    dispatch({ type: GET_DEPOSIT_MONEY_REQUEST });
    try {
      const {data} = await axios.put(`${baseUrl}/api/wallet/deposit`,null, {
        params: {
            order_id:orderId,
            payment_id:paymentId
        },
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: GET_DEPOSIT_MONEY_SUCCESS, payload: data });
      navigate("/wallet");
      console.log(data);
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_DEPOSIT_MONEY_FAILURE, payload: error.message });
    }
  };

  export const paymentHandler =
  ({ jwt,amount,paymentMethod }) =>
  async (dispatch) => {
    dispatch({ type: GET_DEPOSIT_MONEY_REQUEST });
    try {
      const {data} = await api.post(`${baseUrl}/api/payment/${paymentMethod}/amount/${amount}`,null, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      window.location.href=data.payment_url;
    //   dispatch({ type: GET_DEPOSIT_MONEY_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_DEPOSIT_MONEY_FAILURE, payload: error.message });
    }
  };

export const transferMoney = ({jwt,walletId,reqData}) => async (dispatch) => {
  dispatch({ type: GET_TRANSFER_MONEY_REQUEST });
  try {
    const response = await api.put(`${baseUrl}/api/wallet/${walletId}/transfer`,reqData, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        }
    });
    console.log("Coin", response.data);
    dispatch({ type: GET_TRANSFER_MONEY_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_TRANSFER_MONEY_FAILURE, payload: error.message });
    console.log(error);
  }
};

