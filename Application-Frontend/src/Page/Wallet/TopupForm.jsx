import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DotFilledIcon } from "@radix-ui/react-icons";
import React from "react";
const TopupForm = () => {
  const [amount, setAmount] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("RAZORPAY");
  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit=()=>{
    console.log(amount,paymentMethod);
  };
  return (
    <div className="pt-10 space-y-5 ">
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
            className='h-5 w-5 bg-transparent '
            value="RAZORPAY"
            id='r1' 
            />
            <Label htmlFor="r1">
              <div className="bg-white  px-5 py-2 w-auto items-center">
                <img className="h-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/800px-Razorpay_logo.svg.png?20171127075036"></img>

              </div>
            </Label>


          </div>
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-lg">
            <RadioGroupItem icon={DotFilledIcon} 
            className='h-5 w-5 bg-transparent '
            value="STRIPE"
            id='r1' 
            />
            <Label htmlFor="r1">
              <div className="bg-white  px-5 py-2 w-auto">
                <img className="h-5"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png"></img>

              </div>
            </Label>


          </div>

        </RadioGroup>
      </div>
      <Button onClick={handleSubmit} className="w-full py-7 text-lg">
        Submit 
      </Button>
    </div>
  );
};

export default TopupForm;
