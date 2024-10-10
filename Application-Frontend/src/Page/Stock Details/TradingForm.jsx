import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DotIcon } from '@radix-ui/react-icons'

import React from 'react'

const TradingForm = () => {
    const [orderType,setOrderType] = React.useState('BUY')
    const handleChange=()=>{}
  return (
    <div className='space-y-10 p-5'>
        <div>
            <div className='flex gap-4 items-center justify-between'>
                <Input placeholder='Enter Amount....' className='py-7 focus:outline-none' 
                onChange={handleChange}
                type='number'
                name='amount'
                />
                <div>
                    <p className='border text-2xl flex justify-center items-center w-36 h-14 rounded-md'> 4563</p>
                </div>

            </div>
            {false && <h1 className='text-red-600 text-center pt-4'>Insufficient balance to buy</h1>}
        </div>
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
        <div className='flex justify-between items-center'>
            <p>Order Type</p>
            <p>Market Order</p>

        </div>
        <div className='flex justify-between items-center'>
            <p>{orderType=="BUY"?"Available Balance":"Available Quantity"}</p>
            <p>{orderType=="BUY"?"$ " +9999:2.7685}</p>

        </div>
        <div>
            <Button className={`w-full py-6 text-xl ${orderType=="SELL"?"hover:bg-red-600":"hover:bg-green-600"}`}>
{orderType}
            </Button>
            <Button className='w-full mt-5 text-xl py-6 border-none text-gray-600' variant="link" onClick={()=>setOrderType(orderType=="BUY"?"SELL":"BUY")}>
                {orderType=="BUY"?"Or Sell":"Or Buy "}
            </Button>
        </div>

    </div>
  )
}

export default TradingForm