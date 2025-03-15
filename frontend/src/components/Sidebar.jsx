import { AlignVerticalJustifyEnd, Backpack, ChartBar, ChartNoAxesGanttIcon, Clock1, ClockAlert, DropletIcon, DrumIcon, Home, LucideWorkflow, Workflow, WorkflowIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    return (
        <header>
            <div className="fixed left-0 top-0 z-50 h-screen w-52 bg-white flex flex-col justify-between  py-10 pl-10 text-gray-500 shadow ">
                {/* Logo */}
                <div className="flex flex-col">

                    <div className="text-2xl font-bold text-indigo-900">
                        ProTracker
                    </div>

                    {/* Navigation Menu */}
                    <div className="flex flex-col gap-5 text-lg my-10">
                        <Link
                            to="/"
                            className={`cursor-pointer ${location.pathname === "/" ? "text-blue-600 font-semibold" : ""
                                }`}>
                            <div className="flex">
                                <Home className="mr-2" />Home
                            </div>
                        </Link>
                        <Link
                            to="/analytics"
                            className={`cursor-pointer ${location.pathname === "/analytics" ? "text-indigo-600 font-semibold" : ""
                                }`}>
                            <div className="flex">
                                <ChartBar className="mr-2" />Analytics
                            </div>

                        </Link>
                        <Link
                            to="/categories"
                            className={`cursor-pointer ${location.pathname === "/categories" ? "text-blue-600 font-semibold" : ""
                                }`}>
                            <div className="flex">
                                <ChartNoAxesGanttIcon className="mr-2" />Categories
                            </div>

                        </Link>
                        <Link
                            to="/progress"
                            className={`cursor-pointer ${location.pathname === "/progress" ? "text-blue-600 font-semibold" : ""
                                }`}>
                            
                            <div className="flex">
                                <WorkflowIcon className="mr-2" />progress
                            </div>
                        </Link>
                        <Link
                            to="/work"
                            className={`cursor-pointer ${location.pathname === "/work" ? "text-blue-600 font-semibold" : ""
                                }`}>
                            
                            <div className="flex">
                                <Backpack className="mr-2" />Work
                            </div>
                        </Link>
                        <Link
                            to="/timings"
                            className={`cursor-pointer ${location.pathname === "/timings" ? "text-blue-600 font-semibold" : ""
                                }`}>
                            
                            <div className="flex">
                                <ClockAlert className="mr-2" />Timings
                            </div>
                        </Link>
                    </div>
                </div>

                <div className=" hover:text-blue-600 cursor-pointer">
                    Profile
                </div>
                {/* Profile Section */}
            </div>


        </header>
    )
}
export default Sidebar