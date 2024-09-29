import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-11 h-11"
            >
              <DragHandleHorizontalIcon className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-72 border-r-0 flex flex-col justify-center"
            side="left"
          >
            <SheetHeader>
              <SheetTitle>
                <div className="text-3xl flex justify-center items-center gap-1">
                  <Avatar>
                    <AvatarImage src="https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png"></AvatarImage>
                  </Avatar>
                  <div>
                    <span className="font-bold text-red-500">Trade</span>
                    <span>Mind</span>
                  </div>
                </div>
              </SheetTitle>
              <SheetDescription>
                
              </SheetDescription>
            </SheetHeader>
            <Sidebar/>
          </SheetContent>
        </Sheet>
        <p className="text-sm lg:text-base cursor-pointer">Trademind</p>
        <div className="p-0 ml-9">
          <Button variant="ghost" className="flex items-center gap-3">  
            <MagnifyingGlassIcon/>
            <span>Search</span>

          </Button>
        </div>
      </div>
      <div>
        <Avatar>
          <AvatarFallback>
            A
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
