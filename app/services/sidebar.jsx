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
        <div className="p-6 w-[300px] bg-[#F7F7F7] h-screen">
            <div className="flex justify-between border-b pb-6">
                <input
                    className="py-2 px-4 rounded-lg border border-[#E8E8E8]"
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
                                className={pathname == item.href ? 'mb-2 cursor-pointer p-3 relative bg-white rounded-xl border border-[#E8E8E8]': 'mb-2 cursor-pointer p-3 relative rounded-xl'}
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
