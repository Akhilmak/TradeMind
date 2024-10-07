import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import React from "react";

const TopupForm = () => {
  const [amount, setAmount] = React.useState("");
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
        <RadioGroup className='flex' defaultValue="RAZORPAy">

        </RadioGroup>
      </div>
    </div>
  );
};

export default TopupForm;
