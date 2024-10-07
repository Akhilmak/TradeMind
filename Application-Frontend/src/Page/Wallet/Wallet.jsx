import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { CopyIcon, ReloadIcon, UploadIcon } from '@radix-ui/react-icons'
import { DollarSignIcon, WalletIcon } from 'lucide-react'
import React from 'react'
import TopupForm from './TopupForm'
import WithdrawalForm from './WithdrawalForm'
import TransferForm from './TransferForm'

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
      <div className='flex gap-7 mt-5'>
        <Dialog>
          <DialogTrigger>
            <div className='h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-500 shadow-md'>
              <UploadIcon className='h-6 w-6'/>
              <span className='mt-2 text-sm'>Add Money</span>

            </div>

          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className='text-center text-xl'>
                Top Up Your Wallet
              </DialogTitle>
            </DialogHeader>
            <TopupForm/>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger>
            <div className='h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-500 shadow-md'>
              <UploadIcon className='h-6 w-6'/>
              <span className='mt-2 text-sm'>Withdraw</span>

            </div>

          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className='text-center text-xl'>
                Request Withdrawal
              </DialogTitle>
            </DialogHeader>
            <WithdrawalForm/>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger>
            <div className='h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-500 shadow-md'>
              <UploadIcon className='h-6 w-6'/>
              <span className='mt-2 text-sm'>Transfer</span>

            </div>

          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className='text-center text-xl'>
                Transfer to other wallet
              </DialogTitle>
            </DialogHeader>
            <TransferForm/>
          </DialogContent>
        </Dialog>

      </div>
    </CardContent>
  </Card>

</div>
    </div>
  )
}

export default Wallet