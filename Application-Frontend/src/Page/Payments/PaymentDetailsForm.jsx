import { Input } from '@/components/ui/input'
import React from 'react'

const PaymentDetailsForm = () => {
  return (
    <div className='px-10 py-2'>
        <div className='pb-5'>
        <h1 className="pb-2 text-lg text-semibold">Account Holder Name</h1>
      
      <Input
        className="py-5 text-sm"
        placeholder="Name"
      ></Input>
      </div>
      <div>
        <h1 className="pb-2 text-lg text-semibold">IFSC Code</h1>
      
      <Input
        className="py-5 text-sm"
        placeholder="IFSC"
      ></Input>
      </div>
      <div>
        <h1 className="pb-2 text-lg text-semibold">A/C Number</h1>
      
      <Input
        className="py-5 text-sm"
        placeholder="A/C Number"
      ></Input>
      </div>
      <div>
        <h1 className="pb-2 text-lg text-semibold">Confirm Account Number</h1>
      
      <Input
        className="py-5 text-sm"
        placeholder="Re-Type A/C Number"
      ></Input>
      </div>
      <div>
        <h1 className="pb-2 text-lg text-semibold">Bank Name</h1>
      
      <Input
        className="py-5 text-sm"
        placeholder="State Bank of India"
      ></Input>
      </div>
    </div>
  )
}

export default PaymentDetailsForm