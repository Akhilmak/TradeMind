import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import AssetTable from "./AssetTable";
import StockDataChart from "./StockDataChart";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Cross1Icon, DotIcon } from "@radix-ui/react-icons";
import { MessageCircle, MessageCircleQuestion } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getCoinList, getTOP50CoinList } from "@/State/Coin/Action";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { store } from "@/State/Store";

const Home = () => {
  const [category, setCategory] = React.useState("all");
  const { coin } = useSelector((store) => store);
  const dispatch = useDispatch();
  const handleCategory = (value) => {
    console.log("Handling category change:", value);
    setCategory(value);
  };

  useEffect(() => {
    dispatch(getCoinList(1));
  }, []);

  useEffect(() => {
    dispatch(getTOP50CoinList());
  }, [category]);

  return (
    <div className="relative overflow-hidden">
      <div className="lg:flex justify-between">
        <div className="lg:w-[50%] lg:border-r lg:block p-5">
          <div className="p-3 flex items-center gap-4 w-full">
            <Button
              onClick={() => handleCategory("all")}
              variant={category == "all" ? "default" : "outline"}
              className="rounded-full"
            >
              All
            </Button>
            <Button
              onClick={() => handleCategory("top50")}
              variant={category == "top50" ? "default" : "outline"}
              className="rounded-full"
            >
              Top 50
            </Button>
            <Button
              onClick={() => handleCategory("topgainers")}
              variant={category == "topgainers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Gainers
            </Button>
            <Button
              onClick={() => handleCategory("topLosers")}
              variant={category == "topLosers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Losers
            </Button>
          </div>
          <AssetTable
            coin={category == "all" ? coin.coinList : coin.top50}
          ></AssetTable>
          <div>
            <Pagination className={"h-5 pt-5 pb-5"}>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
        <div className="hidden lg:w-[50%] lg:block p-5  ">
          <StockDataChart coinId={"bitcoin"} />
          <div className="flex gap-5 items-center content-center justify-center pt-4">
            <div>
              <Avatar>
                <AvatarImage
                  src=""
                />
              </Avatar>
            </div>
            <div className="items-center  justify-center content-center">
              <div className="flex items-center gap-2">
                <p>"hu"</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400" > Bitcoin</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text:xl font-bold">
                
                  {/* price */}
                </p>
                <p className="text-red-600">
                  <span>{coin.coinList[0]?.price_change_24h} </span>
                  <span>({coin.coinList[0]?.price_change_percentage_24h} %)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
