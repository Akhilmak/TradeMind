import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  DotIcon,
} from "@radix-ui/react-icons";
import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TradingForm from "./TradingForm";
import StockDataChart from "../Home/StockDataChart";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "@/State/Coin/Action";
import { store } from "@/State/Store";

const StockDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchCoinDetails({ coinId: id ,jwt:localStorage.getItem("jwt") }));
  }, [id]);
  const {coin}=useSelector((store)=>store)
  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <div>
            <Avatar>
              <AvatarImage src={coin.coinDetails?.image.large} />
            </Avatar>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p>{coin.coinDetails?.symbol.toUpperCase()}</p>
              <DotIcon className="text-gray-400"></DotIcon>
              <p className="text-gray-400">{coin.coinDetails?.name}</p>
            </div>
            <div className="items-end flex gap-2">
              <p className="font-bold text-xl">$ {coin.coinDetails?.market_data.current_price.usd}</p>
              <p className="text-red-600">
                <span className="p-2">-{coin.coinDetails?.market_data.market_cap_change_24h}</span>
                <span>(-{coin.coinDetails?.market_data.market_cap_change_percentage_24h} %)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 ">
          <Button className="h-10">
            {true ? (
              <BookmarkFilledIcon className="h-6 w-6 " />
            ) : (
              <BookmarkIcon className="h-6 w-6" />
            )}
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button size="lg" className="font-bold">
                Trade
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How much do you want to spend?</DialogTitle>
              </DialogHeader>
              <TradingForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className=" p-10">
        <StockDataChart  coinId={id}/>
      </div>
    </div>
  );
};

export default StockDetails;
