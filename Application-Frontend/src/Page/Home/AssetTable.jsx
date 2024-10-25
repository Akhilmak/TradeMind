import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ScrollArea } from "@/components/ui/scroll-area";

const AssetTable = ({coin,category}) => {
  const navigate=useNavigate()

  return (
    <div className=" w-[1000vh]"> 
      <Table >
      
      <ScrollArea className={`${category=="all"?"h-[70vh]":"h-[78vh]"}`}>
         <TableHeader>
        <TableRow >
          <TableHead className="w-[50%]">Coin</TableHead>
          <TableHead >Symbol</TableHead>
          <TableHead >Volume</TableHead>
          <TableHead>Market Cap</TableHead>
          <TableHead>Last 24H</TableHead>
          <TableHead className="text-right">Current Price</TableHead>
        </TableRow>
      </TableHeader>
      
      <TableBody>
        {coin.map((item,index) =>  <TableRow key={item.id}>
          <TableCell onClick={()=>navigate(`/market/${item.id}`)}  className="font-medium flex items-center gap-2 cursor-pointer">
            <Avatar className="-z-50">
              <AvatarImage src={item.image}></AvatarImage>
            </Avatar>
            <span>{item.name}</span>
          </TableCell>
          <TableCell>{item.symbol}</TableCell>
          <TableCell>{item.total_volume}</TableCell>
          <TableCell>{item.market_cap}</TableCell>
          <TableCell>{item.price_change_percentage_24h}</TableCell>
          <TableCell className="text-right">$ {item.current_price}</TableCell>
        </TableRow>
            
        )}
       
      </TableBody>
      
      </ScrollArea>
      </Table>
    </div>
    
       
      
    
  );
};

export default AssetTable;
