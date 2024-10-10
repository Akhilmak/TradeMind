import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { VerifiedIcon } from "lucide-react";
import React from "react";
import AccountVerificationForm from "./AccountVerificationForm";

const Profile = () => {
  const handleEnable2FA=()=>{
    console.log("Enabled 2FA")
  }
  return (
    <div className="flex flex-col items-center mb-5">
      <div className="pt-10 w-fit lg:w-[60%]">
        <Card>
          <CardHeader className="items-center content-center justify-center">
            <CardTitle className="text-2xl pb-5">Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="lg:flex gap-40 content-center justify-center">
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]"> Email: </p>
                  <p className="text-gray-400">aak977656@gmail.com</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]"> Full Name: </p>
                  <p className="text-gray-400">Akhi</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]"> Date of Birth: </p>
                  <p className="text-gray-400">30/11/2003</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]"> Nationality: </p>
                  <p className="text-gray-400">Indian</p>
                </div>
              </div>
              <div className="space-y-7 ">
                <div className="flex">
                  <p className="w-[9rem]"> Email: </p>
                  <p className="text-gray-400">aak977656@gmail.com</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]"> Full Name: </p>
                  <p className="text-gray-400">Akhi</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]"> Date of Birth: </p>
                  <p className="text-gray-400">30/11/2003</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]"> Nationality: </p>
                  <p className="text-gray-400">Indian</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="mt-6">
          <Card className="w-full">
            <CardHeader className="pb-7 ">
              <div className="items-center content-center justify-center flex gap-3">
                <CardTitle className="text-2xl">
                  2 Factor Authentication
                </CardTitle>
                {true ? (
                  <Badge className={"bg-green-600"}>
                    <VerifiedIcon className="size-5" />
                    <span>Enabled</span>
                  </Badge>
                ) : (
                  <Badge className={"bg-red-600"}> Disabled</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent >
              <div className='flex justify-center  content-center items-center'>
              <Dialog >
  <DialogTrigger >
    <Button className='p-5 text-l'>Enable Two Factor Authentication</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader className='items-center justify-center content-center flex' >
      <DialogTitle className='text-2xl'>Account Verification</DialogTitle>
    </DialogHeader>
    <AccountVerificationForm handleSubmit={handleEnable2FA} />
  </DialogContent>
</Dialog>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
