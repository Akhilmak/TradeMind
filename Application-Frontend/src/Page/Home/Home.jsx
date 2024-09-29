import { Button } from '@/components/ui/button'
import React from 'react'
import AssetTable from './AssetTable'
import StockDataChart from './StockDataChart'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { DotIcon } from '@radix-ui/react-icons'




const Home = () => {
  const [category, setCategory] = React.useState("all")
  const handleCategory = (value) => {
    console.log('Handling category change:', value)
    setCategory(value)
  }


  return (
    <div className='relative'>
      <div className='lg:flex'>
        <div className='lg:w-[50%] lg:border-r'>
          <div className='p-3 flex items-center gap-4' >
            <Button onClick={() => handleCategory("all")} variant={category == "all" ? "default" : "outline"} className="rounded-full">All</Button>
            <Button onClick={() => handleCategory("top50")} variant={category == "top50" ? "default" : "outline"} className="rounded-full">Top 50</Button>
            <Button onClick={() => handleCategory("topgainers")} variant={category == "topgainers" ? "default" : "outline"} className="rounded-full">Top Gainers</Button>
            <Button onClick={() => handleCategory("topLosers")} variant={category == "topLosers" ? "default" : "outline"} className="rounded-full">Top Losers</Button>
          </div>

          <AssetTable></AssetTable>
        </div>
        <div className='hidden lg:w-[50%] lg:block p-5'>
          <StockDataChart/>
          <div className='flex gap-5 items-center'>
            <div>
              <Avatar>
                <AvatarImage src={"https://cdn.pixabay.com/photo/2017/07/27/23/09/bitcoin-2547131_1280.png"}/>

              </Avatar>
            </div>
            <div className='flex items-center gap-2'>
<p>BTC</p>
<DotIcon/>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home