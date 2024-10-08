import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import React from 'react'

const TransferForm = () => {
  const [formData,setFormData]=React.useState({
    amount:'',
    walletId:'',
    message:'',
  })
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit=()=>{
    console.log(formData);
  }
  return (
    <div className='pt-10 space-y-5'>
      <div >
        <p className='pb-3'>Enter Amount</p>
        <Input  
        onChange={handleChange}
        value={formData.amount}
        name="amount"
        className='py-7 text-lg'
        placeholder='Amount to transfer'/>
      </div>
      <div >
        <p className='pb-3'>Wallet Id</p>
        <Input  
        className='py-7 text-lg'
        placeholder="Receiver's wallet id"
        onChange={handleChange}
        value={formData.walletId}
        name="walletId"/>
      </div>
      <div >
        <p className='pb-3'>Message (Optional)</p>
        <Input  
        className='py-7 text-lg'
        placeholder='Message'
        onChange={handleChange}
        value={formData.message}
        name="message"/>
      </div>
      <DialogClose className='w-full'>
        <Button onClick={handleSubmit} className='w-full py-7 text-xl' >
        Transfer
      </Button>
      </DialogClose>
      
    </div>
  )
}

export default TransferForm