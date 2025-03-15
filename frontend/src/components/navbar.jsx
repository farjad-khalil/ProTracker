
import React from 'react'
import WorkoutForm from './WorkoutForm';
import { UserPen } from 'lucide-react';
import { Edit, Mail, User } from "lucide-react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <nav className="bg-gray-50 w-[calc(100%-13rem)]  h-20 fixed top-0 z-20 flex items-center justify-between px-6">

      <div className="text-indigo-900 text-2xl ">Overview </div>
      <div className='flex items-center'>
        <input placeholder="Search" className="border px-3 py-2 w-80 rounded-3xl text-gray-700 mx-10 bg-gray-100 cursor-text" disabled
        />
        <div className='w-10 h-10 bg-red-100 rounded-full text-red-600 cursor-pointer hover:bg-red-200 flex items-center justify-center mx-2 transition-shadow duration-300 shadow-md hover:shadow-lg hover:shadow-gray-400'>
          <UserPen className='' />
        </div>
        <WorkoutForm />
        <Sheet>
          <SheetTrigger asChild>
            <div className="w-8 mx-3 rounded-full cursor-pointer transition-shadow duration-300 shadow-md hover:shadow-lg hover:shadow-gray-400">
              <img
                className="rounded-full"
                src="https://cdn.vectorstock.com/i/1000v/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg"
                alt="Profile Avatar"
              />
            </div>

          </SheetTrigger>
          <SheetContent className='px-4 bg-gray-100'>
            <SheetHeader className='px-0 flex flex-row '>
              <Edit className="cursor-pointer" />
              <SheetTitle> Profile</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4 ">
              <div className='flex justify-center'>
                <Avatar className='w-32 h-32'>
                  <AvatarImage src="https://cdn.vectorstock.com/i/1000v/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg" />
                  <AvatarFallback>Profile image</AvatarFallback>
                </Avatar>
              </div>
              <div className="grid grid-cols-6 items-center gap-4">
                <Label htmlFor="name" className="text-right col-span-2" >
                  <User />
                  Name
                </Label>
                <Input id="name" value="John Doe" className="col-span-4" />
              </div>
              <hr />
              <div className="grid grid-cols-6 items-center gap-4">
                <Label htmlFor="username" className="text-right col-span-2">

                  @Username
                </Label>
                <Input id="username" value="@itxjohn" className="col-span-4" />
              </div>
              <hr />
              <div className="grid grid-cols-6 items-center gap-4">
                <Label htmlFor="username" className="text-right col-span-2">
                  <Mail />
                  Email
                </Label>
                <Input id="username" value="user@mail.com" className="col-span-4" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

    </nav>
  );
}