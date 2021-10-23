import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="flex justify-between items-center bg-black px-4">
            <Link
                className="text-xl text-white py-4 hover:text-red-500"
                to="/"
            >
                Projects
            </Link>
            <Link
                className="text-md text-white bg-gray-800 px-3 py-1 rounded-md hover:bg-gray-600"
                to="/logout"
            >
                Logout
            </Link>
        </nav>
    );
}
