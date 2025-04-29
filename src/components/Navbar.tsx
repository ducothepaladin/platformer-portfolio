import { Link } from "react-router-dom";
import { HomeIcon, SquareUserRound, TestTube2, FolderOpenDot, GraduationCap, Mail } from "lucide-react";

export default function Navbar() {
    


    return (
        <header className="w-full z-30 fixed border-b border-cinderella-200 bg-congo-brown-800 top-0 left-0 shadow-lg">
            <nav>
                <ul className="flex w-full lg:w-2/3 container py-4 px-5 mx-auto justify-between items-center text-cinderella-200">
                    <li>
                        <Link
                            to="/"
                            className="flex gap-2 items-center hover:text-cinderella-100 transition-colors duration-300"
                        >
                            <span className="hidden md:inline">Home</span>
                            <span>
                                <HomeIcon />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="flex gap-2 items-center hover:text-cinderella-100 transition-colors duration-300"
                        >
                            <span className="hidden md:inline">About</span>
                            <span>
                                <SquareUserRound />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/skills"
                            className="flex gap-2 items-center hover:text-cinderella-100 transition-colors duration-300"
                        >
                            <span className="hidden md:inline">Skills</span>
                            <span>
                                <TestTube2 />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/projects"
                            className="flex gap-2 items-center hover:text-cinderella-100 transition-colors duration-300"
                        >
                            <span className="hidden md:inline">Projects</span>
                            <span>
                                <FolderOpenDot />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/certificates"
                            className="flex gap-2 items-center hover:text-cinderella-100 transition-colors duration-300"
                        >
                            <span className="hidden md:inline">Certificates</span>
                            <span>
                                <GraduationCap />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="flex gap-2 items-center hover:text-cinderella-100 transition-colors duration-300"
                        >
                            <span className="hidden md:inline">Contact</span>
                            <span>
                                <Mail />
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
