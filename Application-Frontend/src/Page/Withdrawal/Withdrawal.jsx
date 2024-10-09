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

const Withdrawal = () => {
  return (
    <div className='p-5 lg:p-20'>
      <h1 className='text-3xl font-bold pb-10'>Withdrawal</h1>
      <Table className='border'>
      <TableCaption>A list of your recent withdrawals.</TableCaption>
      <TableHeader className="text-xl">
        <TableRow className='text-l'>
          <TableHead className='py-5'>Date & Time</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right">Status</TableHead>
          
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item,index) =>  <TableRow key={index}>
        <TableCell><p>
          01/01/2024</p></TableCell>
          <TableCell>Bank</TableCell>
          <TableCell>15514632294</TableCell>
          <TableCell className="text-right">$ 65727</TableCell>
        </TableRow>
            
        )}
       
      </TableBody>
    </Table>
    </div>
  )
}

export default Withdrawal