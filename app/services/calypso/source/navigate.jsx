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
        <nav className="flex justify-between w-[300px] my-8">
            {route?.map((item, index) => {
                return (
                    <Link
                        key={index}
                        href={item.href}
                        className={
                            pathname == item.href
                                ? "text-[#0BA864] border-[#0BA864] border-b-2 pb-2"
                                : ""
                        }
                    >
                        {item.title}
                    </Link>
                );
            })}
        </nav>
    );
}
