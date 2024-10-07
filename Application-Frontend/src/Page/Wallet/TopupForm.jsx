import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { set } from "mongoose";
import React from "react";

const TopupForm = () => {
  const [amount, setAmount] = React.useState("")
  const [paymentMethod, setPaymentMethod] = React.useState("RAZORPAY")
  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  }
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Enter Amount</h1>
      
      <Input
        onChange={handleChange}
        value={amount}
        className="py-7 text-lg"
        placeholder="$9999"
      ></Input>
      </div>
      <div>
        <h1 className="pb-1">Select Payment Method</h1>
        <RadioGroup onValueChange={(value) => handlePaymentMethodChange(value)} className='flex' defaultValue="RAZORPAy">
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-lg">
            <RadioGroupItem icon={DotFilledIcon} 
            className='h-9 w-9 '
            value="RAZORPAY"
            id='r1'/>

          </div>

        </RadioGroup>
      </div>
    </div>
  );
};

export default TopupForm;
