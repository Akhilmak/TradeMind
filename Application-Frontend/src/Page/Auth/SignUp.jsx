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
import { register } from "@/State/Auth/Action";
import { DialogClose } from "@radix-ui/react-dialog";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch=useDispatch()
  const form = useForm({
    resolver: "",
    defaultValues: {
      fullName: "",
      eMail: "",
      password: "",
      
    },
  });
  const onSubmit = (data) => {
    dispatch(register(data))
    console.log(data);
  };
  return (
    <div className="px-10 py-2">
        <h1 className="text-xl pb-3 text-center font-bold">Create a new account</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="border w-full border-gray-200 p-5"
                    placeholder="name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eMail"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="border w-full border-gray-200 p-5"
                    placeholder="xyz@email.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem
            >
              <FormControl>
                <Input className="border w-full border-gray-200 p-5" placeholder="*******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
          <Button type="submit" className="w-full py-5">
          Create Account
        </Button>
        
        </form>
      </Form>
    </div>
  );
};

export default SignUp;
