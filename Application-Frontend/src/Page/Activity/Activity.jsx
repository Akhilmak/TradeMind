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
import { BookmarkFilledIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
const Activity = () => {
  return (
    <div className='p-5 lg:p-20'>
      <h1 className='text-3xl font-bold pb-10'>Activity</h1>
      <Table className='border'>
      <TableCaption>A list of your recent activity.</TableCaption>
      <TableHeader >
        <TableRow className='text-l'>
          <TableHead className='py-5'>Date & Time</TableHead>
          <TableHead>Trading Coin</TableHead>
          <TableHead>Buy Price</TableHead>
          <TableHead>Selling Price</TableHead>
          <TableHead>Order Type</TableHead>
          <TableHead>Profit/Loss</TableHead>
          <TableHead className="text-right">Value</TableHead>
          
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item,index) =>  <TableRow key={index}>
        <TableCell><p>
          01/01/2024</p>
          <p className='text-gray-500'>
            10:00:00</p></TableCell>
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

export default Activity