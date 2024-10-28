import { Card, CardHeader } from '@/components/ui/card'
import React from 'react'

const Development = () => {
  return (
    <div className='overflow-hidden'>
        <div className='flex justify-center content-center items-center h-[80vh]'>
            <Card className=" border-none">
                <CardHeader className="items-center content-center justify-center">
                    <span className='flex'>
                    <p className='text-3xl font-bold'>Coming Soon....</p>
                    <p className='text-3xl font-bold'>Under Development</p>
                    </span>
                </CardHeader>
            </Card>
        </div>
    </div>
  )
}

export default Development