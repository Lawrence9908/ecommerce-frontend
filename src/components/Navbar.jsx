import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border0b border-emerald-800">
            <div className="container mx-auto px-4 py-3">
                <div className="flex flex-wrap justify-between items-center">
                    <Link to={'/'} className="text-2xl font-bold text-emerald-400 item-center space-x-2 flex">
                        E-commerce
                    </Link>
                    <nav className="flex flex-wrap items-center grap-4">
                        <Link to={"/"} className="text-gray-300 hover:text-emerald-400 transition duration-300 px-2 ease-in-out">
                            Home
                        </Link>

                        <Link to={"/dashboard"} className="text-gray-600 hover:bg-emerald-700 text-white py-1 px-3 rounded-md font-medium
                         flex items-center
                           transition duration-300 ease-in-out">
                            <Lock className="inline-block mr-1" size={18} />
                            <span className="hidden sm:inline">Dashboard</span>

                        </Link>

                        <Link to={"/signin"} className="text-gray-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center
                           transition duration-300 ease-in-out">
                            <LogOut className="mr-2" size={18} />
                            <span className="hidden sm:inline ml-2">Log Out</span>
                        </Link>
                        <Link to={"/signup"} className="text-gray-600 hover:bg-emerald-700 text-white py-2 px-4  rounded-md flex items-center
                        transition duration-300 ease-in-out">
                            <UserPlus className="mr-2" size={18} />
                            Sign Up
                        </Link>
                        <Link to={"/login"} className="text-gray-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center
                           transition duration-300 ease-in-out">
                            <LogIn className="mr-2" size={18} />
                            Login
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar