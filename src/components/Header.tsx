import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="fixed top-0 w-full h-16 flex justify-between items-center bg-black px-4">
            <Link
                className="h-16 py-4 hover:text-red-500"
                to="/"
            >
                <span className="text-xl text-white">
                    Projects
                </span>
            </Link>
            <Link
                className="px-3 h-8 flex items-center bg-gray-800 rounded-md hover:bg-gray-600"
                to="/logout"
            >
                <span className="text-md text-white">
                    Logout
                </span>
            </Link>
        </nav>
    );
}
