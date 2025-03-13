import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    return (
        <header>
            <div className="fixed left-0 top-0 h-screen w-52 bg-slate-200 flex flex-col justify-between  py-10 pl-10 text-neutral-500 ">
                {/* Logo */}
                <div className="flex flex-col">

                    <div className="text-2xl font-bold text-indigo-900">
                        ProTracker
                    </div>

                    {/* Navigation Menu */}
                    <div className="flex flex-col gap-4 text-lg my-10">
                        <Link
                            to="/"
                            className={`cursor-pointer ${location.pathname === "/" ? "text-blue-600 font-semibold" : ""
                                }`}>
                                        All Workouts
                        </Link>
                        <Link
                            to="/categories"
                            className={`cursor-pointer ${location.pathname === "/categories" ? "text-blue-600 font-semibold" : ""
                                }`}>
                                        Categories
                        </Link>
                        <Link
                            to="/progress"
                            className={`cursor-pointer ${location.pathname === "/progress" ? "text-blue-600 font-semibold" : ""
                                }`}>
                                        Progress
                        </Link>
                        <Link
                            to="/work"
                            className={`cursor-pointer ${location.pathname === "/work" ? "text-blue-600 font-semibold" : ""
                                }`}>
                                        Work
                        </Link>
                        <Link
                            to="/timings"
                            className={`cursor-pointer ${location.pathname === "/timings" ? "text-blue-600 font-semibold" : ""
                                }`}>
                                        Timings
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