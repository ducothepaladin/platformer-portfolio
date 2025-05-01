import { Link } from "react-router-dom";
import {
    HomeIcon,
    SquareUserRound,
    TestTube2,
    FolderOpenDot,
    GraduationCap,
    Mail,
} from "lucide-react";

export default function Navbar() {
    return (
        <header className="w-full z-30 fixed border-b border-cinderella-200 bg-congo-brown-800 top-0 left-0 shadow-lg">
            <nav>
                <ul className="flex w-full lg:w-2/3 container py-4 px-5 mx-auto justify-between items-center text-cinderella-200">
                    {[
                        { to: "/", label: "Home", Icon: HomeIcon },
                        { to: "/about", label: "About", Icon: SquareUserRound },
                        { to: "/skills", label: "Skills", Icon: TestTube2 },
                        { to: "/projects", label: "Projects", Icon: FolderOpenDot },
                        { to: "/certificates", label: "Certificates", Icon: GraduationCap },
                        { to: "/contact", label: "Contact", Icon: Mail },
                    ].map(({ to, label, Icon }) => (
                        <li key={to} className="group">
                            <Link
                                to={to}
                                className="flex gap-2 items-center hover:text-cinderella-100 transition-colors duration-300"
                            >
                                <span className="hidden md:inline">{label}</span>
                                <span className="group-hover:scale-110 transition-transform duration-300">
                                    <Icon />
                                </span>
                            </Link>
                            <div className="h-1 mt-1 bg-cinderella-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
