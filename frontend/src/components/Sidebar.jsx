import { AtSign, Backpack, ChartBar, ChartNoAxesGanttIcon, ClockAlert, Edit, Home, Mail, User, WorkflowIcon } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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

import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    return (
        <header>
            <div className="fixed left-0 top-0 z-50 h-screen w-52 bg-white flex flex-col justify-between  py-10 pl-10 text-gray-400 shadow ">
                {/* Logo */}
                <div className="flex flex-col">

                    <div className="text-2xl font-bold text-indigo-900">
                        ProTracker
                    </div>

                    {/* Navigation Menu */}
                    <div className="flex flex-col gap-5 text-md my-10">
                        <Link
                            to="/"
                            className={`cursor-pointer ${location.pathname === "/" ? "text-blue-600 font-semibold" : "hover:text-gray-600 "
                                }`}>
                            <div className="flex">
                                <Home className="mr-2" />Home
                            </div>
                        </Link>
                        <Link
                            to="/analytics"
                            className={`cursor-pointer ${location.pathname === "/analytics" ? "text-indigo-600 font-semibold" : "hover:text-gray-600 "
                                }`}>
                            <div className="flex">
                                <ChartBar className="mr-2" />Analytics
                            </div>

                        </Link>
                        <Link
                            to="/categories"
                            className={`cursor-pointer ${location.pathname === "/categories" ? "text-blue-600 font-semibold" : "hover:text-gray-600 "
                                }`}>
                            <div className="flex">
                                <ChartNoAxesGanttIcon className="mr-2" />Categories
                            </div>

                        </Link>
                        <Link
                            to="/progress"
                            className={`cursor-pointer ${location.pathname === "/progress" ? "text-blue-600 font-semibold" : "hover:text-gray-600 "
                                }`}>

                            <div className="flex">
                                <WorkflowIcon className="mr-2" />progress
                            </div>
                        </Link>
                        <Link
                            to="/work"
                            className={`cursor-pointer ${location.pathname === "/work" ? "text-blue-600 font-semibold" : "hover:text-gray-600 "
                                }`}>

                            <div className="flex">
                                <Backpack className="mr-2" />Work
                            </div>
                        </Link>
                        <Link
                            to="/timings"
                            className={`cursor-pointer ${location.pathname === "/timings" ? "text-blue-600 font-semibold" : "hover:text-gray-600 "
                                }`}>

                            <div className="flex">
                                <ClockAlert className="mr-2" />Timings
                            </div>
                        </Link>
                    </div>
                </div>

                <div className=" hover:text-gray-600 cursor-pointer ">
                    <Sheet>
                        <SheetTrigger asChild>
                            <div className="flex gap-1">
                                <User />
                                <div>Profile</div>
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
                {/* Profile Section */}
            </div>


        </header>
    )
}
export default Sidebar