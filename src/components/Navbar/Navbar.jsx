import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "./DarkMode";

const MenuLinks = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Shop", link: "/#shop" },
    { id: 3, name: "About", link: "/#about" },
    { id: 4, name: "Blogs", link: "/#blog" },
];

const DropdownLinks = [
    { id: 1, name: "Trending", link: "/#" },
    { id: 2, name: "Best Selling", link: "/#" },
    { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = () => {
    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            <div className="py-4">
                <div className="container flex justify-between items-center">
                    {/* Logo and Link Section */}
                    <div className="flex items-center gap-3">
                        <a
                            href="#"
                            className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
                        >
                            ESCOM
                        </a>
                        {/* Menu items */}
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-4">
                                {MenuLinks.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            href={data.link}
                                            className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                                        >
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                                <li className="relative cursor-pointer group">
                                    <a
                                        href="#"
                                        className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                                    >
                                        Quick Links
                                        <span>
                                            <FaCaretDown className="group-hover:rotate-180 duration-300" />
                                        </span>
                                    </a>
                                    <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white">
                                        <ul className="space-y-2">
                                            {DropdownLinks.map((data) => (
                                                <li key={data.id}>
                                                    <a
                                                        className="text-gray-500 hover:text-black dark:hover:text-white duration-200"
                                                        href={data.link}
                                                    >
                                                        {data.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Centered Search Bar */}
                    <div className="flex-grow flex items-center justify-center mx-4 lg:mx-0">
                        <div className="relative w-full max-w-md">
                            <input
                                type="text"
                                placeholder="search"
                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            />
                            <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-xl text-gray-600 duration-200 dark:text-gray-400" />
                        </div>
                    </div>

                    {/* Right Side Buttons */}
                    <div className="flex items-center gap-4">
                        <button className="relative p-3">
                            <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
                            <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                                6
                            </div>
                        </button>
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
