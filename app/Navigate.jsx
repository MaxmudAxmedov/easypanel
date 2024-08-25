"use client";

import { usePathname } from "next/navigation";
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
        <nav className="flex flex-col items-center justify-between py-4 px-5 w-20 h-screen bg-[#F7F7F7] border-r border-[#E8E8E8]">
            <div className="flex flex-col">
                <Link
                    className="text-center mb-12 bg-white p-1 shadow border rounded"
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
                                pathname == item.href
                                    ? "text-center mb-8 p-1 flex justify-center bg-white shadow border rounded"
                                    : "text-center mb-8 p-1 flex justify-center"
                            }
                            href={item.href}
                        >
                            <Image width="28" height="28" src={item.icon} alt='icon' />
                        </Link>
                    );
                })}
            </div>
            <div className="flex flex-col">
                <Image
                    width="24"
                    height="24"
                    className="text-center mb-6"
                    src={Search}
                    alt='Search icon'
                />
                <Image
                    width="24"
                    height="24"
                    className="text-center mb-6"
                    src={Mode}
                    alt='Thema icon'
                />
                <Image width="24" height="24" src={LogOut} alt='Logout icon' />
            </div>
        </nav>
    );
}
