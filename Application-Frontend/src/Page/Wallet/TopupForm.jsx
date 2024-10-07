import { Input } from '@/components/ui/input'
import React from 'react'

const TopupForm = () => {
  return (
    <div className='pt-10 space-y-5'>
        <div>
            <h1 className='pb-1'>Enter Amount</h1>
        </div>
<Input className='py-7 text-lg' placeholder="$9999">
</Input>
    </div>
  )
}

export default TopupForm