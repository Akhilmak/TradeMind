import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import AssetTable from "./AssetTable";
import StockDataChart from "./StockDataChart";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Cross1Icon, DotIcon } from "@radix-ui/react-icons";
import { MessageCircle, MessageCircleQuestion } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getCoinList } from "@/State/Coin/Action";
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

  return (
    <div className="relative ">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-4">
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

          <AssetTable coin={coin.coinList} category={category}></AssetTable>
        </div>
        <div className="hidden lg:w-[50%] lg:block p-5  ">
          <StockDataChart />
          <div className="flex gap-5 items-center">
            <div>
              <Avatar>
                <AvatarImage
                  src={
                    "https://cdn.pixabay.com/photo/2017/07/27/23/09/bitcoin-2547131_1280.png"
                  }
                />
              </Avatar>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p>BTC</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400"> Bitcoin</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text:xl font-bold">
                  5454
                  {/* price */}
                </p>
                <p className="text-red-600">
                  <span>-821368763</span>
                  <span>(-0.38968%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="fixed bottom-5 left-5 right-5 z-40 flex flex-col justify-end  items-end gap-2">
        <div className="rounded-md w-[30rem] md-[25rem] lg-[30rem] h-[50vh] bg-slate-900 bg-opacity-50 border-white ">
          <div className="flex justify-between items-center p-3 border-b px-2 h-[12%]">
            <p>ChatBot</p>
            <Button variant="ghost" size="icon">
              <Cross1Icon />
            </Button>
          </div>
          <div className="h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container">
            <div className="self-start pb-5 w-auto">
              <div className="justify-end self-end px-5 py-2 w-auto bg-blue-700 rounded-full">
                <p>Hello User,</p>
                <p>You can ask any Crypto related Questions here</p>
              </div>
            </div>
            <div className="self-start pb-5 w-auto">
              <div className="justify-end self-end px-5 py-2 w-auto bg-blue-700 rounded-full">
                <p>Hello User,</p>
                <p>You can ask any Crypto related Questions here</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-[10rem] cursor-pointer group ">
          <Button
            variant="ghost"
            className="w-full h-[3rem] gap-2 items-center"
          >
            <MessageCircle
              size={30}
              className="fill-[#fff] -rotate-90 stroke-none group-hover:fill-[#fff]"
            />
            <span className="text-2xl  ">Chatbot</span>
          </Button>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
