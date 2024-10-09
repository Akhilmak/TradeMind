import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader,CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import PaymentDetailsForm from "./PaymentDetailsForm"
 


const PaymentDetails = () => {
  return (
    <div className="p-10 flex flex-col items-center content-center">
      <h1 className=" font-bold py-5 text-3xl "> Account Details</h1>
      {false?<Card className='w-96'>
        <CardHeader>
          <CardTitle>State Bank of India</CardTitle>
          <CardDescription>A/c No: *******5550</CardDescription>
          </CardHeader> 
          <CardContent>
            <div className="flex items-center ">
              <p className=" w-32 ">A/C Holder</p>
              <p className="text-gray-400 ">: Akhi</p>
              </div>
              <div className="flex items-center ">
              <p className=" w-32">IFSC </p>
              <p className="text-gray-400 ">: SBIN******</p>
              </div>
          </CardContent>
      </Card>:<Dialog >
  <DialogTrigger className="pt-5 ">
    <Button className='py-6 rounded-full '> Add Payment Details</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className=' text-center text-xl text-semibold'>Payment Details</DialogTitle>

    </DialogHeader>
    <PaymentDetailsForm/>
  </DialogContent>
</Dialog>}
      


    </div>
  )
}

export default PaymentDetails