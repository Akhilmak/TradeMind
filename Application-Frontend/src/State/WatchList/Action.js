import axios from "axios";
import { ADD_COIN_TO_WATCHLIST_FAILURE, ADD_COIN_TO_WATCHLIST_REQUEST, ADD_COIN_TO_WATCHLIST_SUCCESS, GET_USER_WATCHLIST_FAILURE, GET_USER_WATCHLIST_REQUEST, GET_USER_WATCHLIST_SUCCESS } from "./ActionTypes"
import api, { baseUrl } from "@/config/api";

export const getUserWatchlist=(jwt)=>async (dispatch) => {
    dispatch({type:GET_USER_WATCHLIST_REQUEST});
    try {
        const response=await api.get(`/api/watchlist/user`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }}
        );
        console.log(response.data);
        dispatch({type: GET_USER_WATCHLIST_SUCCESS,payload:response.data});
    } catch (error) {
        dispatch({type: GET_USER_WATCHLIST_FAILURE,payload:error.message});
    }

}

export const addCoinToWatchList=({coinId})=>async (dispatch) => {
    dispatch({type:ADD_COIN_TO_WATCHLIST_REQUEST});
    console.log(coinId);
    try {
        const response=await axios.patch(`${baseUrl}/api/watchlist/add/coin/${coinId}`,{},{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }}
        );

        console.log(response.data);
        dispatch({type: ADD_COIN_TO_WATCHLIST_SUCCESS,payload:response.data});

    } catch (error) {
        console.log(error);
        dispatch({type: ADD_COIN_TO_WATCHLIST_FAILURE,payload:error.message});
    }
}