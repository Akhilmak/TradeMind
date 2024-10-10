import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  DotIcon,
} from "@radix-ui/react-icons";
import React from "react";
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

const StockDetails = () => {
  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <div>
            <Avatar>
              <AvatarImage src="https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png" />
            </Avatar>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p>BTC</p>
              <DotIcon className="text-gray-400"></DotIcon>
              <p className="text-gray-400">Bitcoin</p>
            </div>
            <div className="items-end flex gap-2">
              <p className="font-bold text-xl">$9999</p>
              <p className="text-red-600">
                <span className="p-2">-17871536.986</span>
                <span>(-0.29803%)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 ">
          <Button  className="h-10">
            {true ? (
              <BookmarkFilledIcon className="h-6 w-6 " />
            ) : (
              <BookmarkIcon className="h-6 w-6" />
            )}
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button size="lg" className='font-bold'>Trade</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How much do you want to spend?</DialogTitle>
              </DialogHeader>
              <TradingForm/>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div  className=" p-10"><StockDataChart/></div>
      
    </div>
  );
};

export default StockDetails;
