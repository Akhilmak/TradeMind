import { baseUrl } from "@/config/api";
import { FETCH_COIN_BY_ID_FAILURE, FETCH_COIN_BY_ID_REQUEST, FETCH_COIN_BY_ID_SUCCESS, FETCH_COIN_DETAILS_FAILURE, FETCH_COIN_DETAILS_REQUEST, FETCH_COIN_DETAILS_SUCCESS, FETCH_COIN_LIST_FAILURE, FETCH_COIN_LIST_REQUEST, FETCH_COIN_LIST_SUCCESS, FETCH_MARKET_CHART_FAILURE, FETCH_MARKET_CHART_REQUEST, FETCH_MARKET_CHART_SUCCESS, FETCH_TOP_50_COINS_FAILURE, FETCH_TOP_50_COINS_REQUEST, FETCH_TOP_50_COINS_SUCCESS } from "./Reducer";

export const getCoinList = (page) => async (dispatch) => {
    dispatch({ type: FETCH_COIN_LIST_REQUEST });
  
    
    try {
      const {data} = await axios.get(`${baseUrl}/coins?page=${page}`);
      console.log("coin List",data);
      dispatch({ type: FETCH_COIN_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_COIN_LIST_FAILURE, payload: error.message });
      console.log(error);
    }
  };

  export const getTOP50CoinList = () => async (dispatch) => {
    dispatch({ type: FETCH_TOP_50_COINS_REQUEST });
    try {
      const {data} = await axios.get(`${baseUrl}/coins/top50`);
      console.log("top 50",data);
      dispatch({ type: FETCH_TOP_50_COINS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_TOP_50_COINS_FAILURE, payload: error.message });
      console.log(error);
    }
  };

  export const fetchMarketChart = ({coinId,days,jwt}) => async (dispatch) => {
    dispatch({ type: FETCH_MARKET_CHART_REQUEST });
    try {
      const response = await axios.get(`/coins/${coinId}/chart?days=${days}`,{
        headers:{
            Authorization:`Bearer ${jwt}`
        }
      });
      console.log("top 50",data);
      dispatch({ type: FETCH_MARKET_CHART_SUCCESS, payload: response.data });
    } catch (error) {
        console.log(error);
      dispatch({ type: FETCH_MARKET_CHART_FAILURE, payload: error.message });
      
    }
  };

  export const fetchCoinById = (coinId) => async (dispatch) => {
    dispatch({ type: FETCH_COIN_BY_ID_REQUEST });
    try {
      const {data} = await axios.get(`${baseUrl}/coins/${coinId}`);
      console.log("Coin",data);
      dispatch({ type: FETCH_COIN_BY_ID_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_COIN_BY_ID_FAILURE, payload: error.message });
      console.log(error);
    }
  };

  export const fetchCoinDetails = ({coinId,jwt}) => async (dispatch) => {
    dispatch({ type: FETCH_COIN_DETAILS_REQUEST });
    try {
      const response = await axios.get(`/coins/details/${coinId}`,{
        headers:{
            Authorization:`Bearer ${jwt}`
        }
      });
      console.log("coin Details",response.data);
      dispatch({ type: FETCH_COIN_DETAILS_SUCCESS, payload: response.data });
    } catch (error) {
        console.log(error);
      dispatch({ type: FETCH_COIN_DETAILS_FAILURE, payload: error.message });
      
    }
  };

