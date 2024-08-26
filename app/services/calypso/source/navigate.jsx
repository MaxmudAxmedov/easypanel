"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigate() {
    const pathname = usePathname();

    const route = [
        {
            title: "Upload",
            href: "/services/calypso/source/upload",
        },
        {
            title: "GitHub",
            href: "/services/calypso/source/github",
        },
        {
            title: "Docker Image",
            href: "/services/calypso/source/docker",
        },
        {
            title: "Git",
            href: "/services/calypso/source/git",
        },
    ];

    return (
        <div>
            <select className="block dark:bg-[#1A1A1A] dark:text-white dark:border-[#313131] w-full sm:hidden border border-[#E8E8E8] p-3 my-8 rounded-xl">
                <option value="">Upload</option>
            </select>
            <nav className="sm:flex hidden justify-between w-[300px] my-8">
                {route?.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={
                                pathname.startsWith(item.href)
                                    ? "text-[#0BA864] border-[#0BA864] border-b-2 pb-2"
                                    : "dark:text-[#E8E8E8]"
                            }
                        >
                            {item.title}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
