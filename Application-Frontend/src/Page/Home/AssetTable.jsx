import React from "react";
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

const AssetTable = () => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Coin</TableHead>
          <TableHead>Symbol</TableHead>
          <TableHead>Volume</TableHead>
          <TableHead>Market Cap</TableHead>
          <TableHead>Last 24H</TableHead>
          <TableHead className="text-right">Current Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item,index) =>  <TableRow key={index}>
          <TableCell className="font-medium flex items-center gap-2">
            <Avatar className="-z-50">
              <AvatarImage src="https://cdn.pixabay.com/photo/2017/07/27/23/09/bitcoin-2547131_1280.png"></AvatarImage>
            </Avatar>
            <span>Bitcoin</span>
          </TableCell>
          <TableCell>BTC</TableCell>
          <TableCell>15514632294</TableCell>
          <TableCell>1298850930713</TableCell>
          <TableCell>-0.16626</TableCell>
          <TableCell className="text-right">$ 65727</TableCell>
        </TableRow>
            
        )}
       
      </TableBody>
    </Table>
  );
};

export default AssetTable;
