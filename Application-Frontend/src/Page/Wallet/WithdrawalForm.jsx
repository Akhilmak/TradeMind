import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React from "react";

const WithdrawalForm = () => {
  const [amount, setAmount] = React.useState("");
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit=()=>{
    console.log(amount);
  };
  return (
    <div className="pt-10 space-y-5">
      <div className="flex justify-between items-center rounded-md bg-none text-xl font-bold px-5 py-4">
        <p>Available balance</p>
        <p>$9999</p>
      </div>
      <div className="items-center flex flex-col">
        <h1 className="text-lg pb-3">Enter Withdrawal amount</h1>
        <div className="flex items-center justify-center">
          <Input
            onChange={handleChange}
            value={amount}
            className="withdrawalInput py-7 border-none outline-none focus:outline-none px-0 text-2xl text-center"
            placeholder="$9999"
            type="number"
          />
        </div>
      </div>
      <div>
        <p className="items-center flex flex-col text-lg pb-3">Transfer to</p>
        <div className="flex items-center gap-5 border px-5 py-2  rounded-md">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/500px-SBI-logo.svg.png"
            className="w-8 h-8"
          />
          <div>
            <p className="text-xl font-bold">State Bank of India</p>
            <p className="text-s ">*******5550</p>
          </div>
        </div>
      </div>
      <DialogClose className="w-full">
        <Button onClick={handleSubmit} className='w-full py-7 text-xl'>
        Withdraw
      </Button>
      </DialogClose>
      
    </div>
  );
};

export default WithdrawalForm;
