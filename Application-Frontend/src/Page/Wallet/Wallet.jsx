import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CopyIcon, ReloadIcon } from '@radix-ui/react-icons'
import { DollarSignIcon, WalletIcon } from 'lucide-react'
import React from 'react'

const Wallet = () => {
  return (
    <div className='flex flex-col items-center'>
<div className='pt-10 w-full lg:w-[60%]'>
  <Card>
    <CardHeader className='pb-9'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-5'>
          <WalletIcon size={30}/>
<div>
  <CardTitle className='text-2xl'>Wallet</CardTitle>
  <div className='flex items-center gap-2'>
    <p className='text-gray-300 text-sm'>
    #ABCDE 
    {/* Walletid */}
    </p>
    <CopyIcon size={10} className='cursor-pointer hover:text-slate-500 '/>

  </div>
</div>
        </div>
        <div>
          <ReloadIcon className='cursor-pointer h-6 w-6 hover:text-slate-500'/>
        </div>

      </div>
    </CardHeader>
    <CardContent>
      <div className='flex items-center'>
        <DollarSignIcon/>
        <span className='text-2xl font-semibold'>
          20000
        </span>

      </div>
    </CardContent>
  </Card>

</div>
    </div>
  )
}

export default Wallet