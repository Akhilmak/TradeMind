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
    <div className="px-20 ">
      <h1 className=" font-bold py-10 text-3xl items-center"> Account Details</h1>
      <Card className=''>
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
      </Card>
      <Dialog>
  <DialogTrigger>
    <Button className='py-6'> Add Payment Details</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className=' text-center text-xl text-semibold'>Payment Details</DialogTitle>

    </DialogHeader>
    <PaymentDetailsForm/>
  </DialogContent>
</Dialog>


    </div>
  )
}

export default PaymentDetails