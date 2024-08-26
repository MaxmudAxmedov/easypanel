"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Config from "../../public/config.svg";
import Add from "../../public/add.svg";


export default function Sidebar() {
    const pathname = usePathname();
    const item = [
        {
            title: "Calypso",
            href: "/services/calypso",
        },
        {
            title: "Sparklens",
            href: "/services/sparklens",
        },
        {
            title: "API Demo",
            href: "/services/apidemo",
        },
    ];
    return (
        <div className="hidden xs:block p-6 min-w-[300px] bg-[#F7F7F7] dark:bg-[#272727]">
            <div className="flex justify-between border-b pb-6 dark:border-[#313131]">
                <input
                    className="py-2 px-4 rounded-lg border border-[#E8E8E8] dark:border-[#313131] dark:bg-[#1A1A1A]"
                    placeholder="Jam's project"
                />
                <Image className="cursor-pointer" src={Config} alt='config icon'/>
            </div>
            <div>
                <div className="flex justify-between items-center mt-6 mb-3">
                    <p className="text-[#969696] uppercase text-xs">Services</p>
                    <Image src={Add} alt='Add item icon' />
                </div>
                <ul className="flex flex-col">
                    {item?.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={pathname.startsWith(item.href) ? 'mb-2 cursor-pointer p-3 relative bg-white rounded-xl border border-[#E8E8E8] dark:border-[#313131] dark:bg-[#1A1A1A]  dark:text-[#E8E8E8]': 'mb-2 cursor-pointer p-3 relative rounded-xl dark:text-[#BABABA]'}
                            >
                                <Link
                                    className={`before before:w-2 before:h-2 before:rounded-full before:left-4 pl-5 before:top-5  before:absolute before:bg-[#0BA864]
                                `}
                                    href={item.href}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
