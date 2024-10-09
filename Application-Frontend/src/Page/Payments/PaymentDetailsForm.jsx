import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import React from "react";
import { useForm } from "react-hook-form";

const PaymentDetailsForm = () => {
  const form = useForm({
    resolver: "",
    defaultValues: {
      accountHolderName: "",
      ifsc: "",
      accountNumber: "",
      bankName: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="px-10 py-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
          <FormField
            control={form.control}
            name="accountHolderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>A/C Holder Name</FormLabel>
                <FormControl>
                  <Input
                    className="border w-full border-gray-200 p-5"
                    placeholder="Name"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Your Name
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ifsc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IFSC Code</FormLabel>
                <FormControl>
                  <Input
                    className="border w-full border-gray-200 p-5"
                    placeholder="SBIN****"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                Your Bank IFSC Code
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
          control={form.control}
          name="accountNumber"
          render={({ field }) => (
            <FormItem
            >
              <FormLabel>A/C Number</FormLabel>
              <FormControl>
                <Input className="border w-full border-gray-200 p-5" placeholder="*******5550" {...field} />
              </FormControl>
              <FormDescription>
                Your A/C Number
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmAccountNumber"
          render={({ field }) => (
            <FormItem
            >
              <FormLabel>Confirm A/C Number</FormLabel>
              <FormControl>
                <Input className="border w-full border-gray-200 p-5" placeholder="*******5550" {...field} />
              </FormControl>
              <FormDescription>
                Re-Type A/C Number
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="accountHolderName"
          render={({ field }) => (
            <FormItem
            >
              <FormLabel>Bank Name</FormLabel>
              <FormControl>
                <Input className="border w-full border-gray-200 p-5" placeholder="State Bank of India" {...field} />
              </FormControl>
              <FormDescription>
                Your Bank Name 
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogClose className="w-full">
          <Button type="submit" className="w-full py-5">
          Submit
        </Button>
        </DialogClose>
        
        </form>
      </Form>
    </div>
  );
};

export default PaymentDetailsForm;
