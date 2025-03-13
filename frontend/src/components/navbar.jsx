
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import MyDialog from './myDialog';


export default function Navbar() {
  return (
    <nav className="bg-gray-50 w-[calc(100%-13rem)]  h-20 fixed top-0 z-20 flex items-center justify-between px-6">

      <div className="text-gray-700 text-xl ">Overview </div>
      <MyDialog />
        
    </nav>
  );
}