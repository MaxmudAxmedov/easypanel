"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.svg";
import One from "../public/navbar-img/one.svg";
import Two from "../public/navbar-img/two.svg";
import Three from "../public/navbar-img/three.svg";
import Four from "../public/navbar-img/four.svg";
import Five from "../public/navbar-img/five.svg";
import Search from "../public/navbar-img/search.svg";
import Mode from "../public/navbar-img/mode.svg";
import LogOut from "../public/navbar-img/logOut.svg";

export default function Navigate() {
    const pathname = usePathname();
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode === "enabled") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("darkMode", "disabled");
        }
    };

    const route = [
        {
            icon: One,
            href: "/a",
        },
        {
            icon: Two,
            href: "/services",
        },
        {
            icon: Three,
            href: "/b",
        },
        {
            icon: Four,
            href: "/c",
        },
        {
            icon: Five,
            href: "/d",
        },
    ];

    return (
        <nav className="xs:flex flex-col hidden  items-center justify-between py-4 min-w-20 min-h-screen bg-[#F7F7F7] dark:bg-[#272727] border-r dark:border-[#313131] border-[#E8E8E8]">
            <div className="flex flex-col">
                <Link
                    className="text-center mb-12 p-1 bg-white dark:bg-[#1A1A1A] dark:border-[#313131] shadow border rounded"
                    href="/home"
                >
                    <Image
                        className="cover"
                        width="32"
                        height="32"
                        src={Logo}
                        alt="Site logo"
                    />
                </Link>

             
                    {route?.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                className={
                                    pathname.startsWith(item.href)
                                        ? "text-center mb-8 flex py-1 justify-center dark:bg-[#1A1A1A] dark:border-[#313131] bg-white shadow border rounded"
                                        : "text-center mb-8 py-1 flex justify-center"
                                }
                                href={item.href}
                            >
                                <Image
                                    width="28"
                                    height="28"
                                    src={item.icon}
                                    alt="icon"
                                />
                            </Link>
                        );
                    })}
             
            </div>
            <div className="flex flex-col">
                <button>
                    <Image
                        width="24"
                        height="24"
                        className="text-center mb-6"
                        src={Search}
                        alt="Search icon"
                    />
                </button>
                <button onClick={toggleDarkMode}>
                    <Image
                        width="24"
                        height="24"
                        className="text-center mb-6"
                        src={Mode}
                        alt="Thema icon"
                    />
                </button>
                <button>
                    <Image
                        width="24"
                        height="24"
                        src={LogOut}
                        alt="Logout icon"
                    />
                </button>
            </div>
        </nav>
    );
}
