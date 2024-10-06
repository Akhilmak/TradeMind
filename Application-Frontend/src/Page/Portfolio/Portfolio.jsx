import React from 'react'
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
const Portfolio = () => {
  return (
    <div className='p-5 lg:p-20'>
      <h1 className='text-3xl font-bold pb-10'>Portfolio</h1>
      <Table >
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Coin</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Unit</TableHead>
          <TableHead>Change</TableHead>
          <TableHead>Change %</TableHead>
          <TableHead className="text-right">Volume</TableHead>
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
    </div>
  )
}

export default Portfolio