"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Overview from "../../../public/calypso/overview.svg";
import Source from "../../../public/calypso/source.svg";
import Deployments from "../../../public/calypso/deployment.svg";
import Environment from "../../../public/calypso/environment.svg";
import Domains from "../../../public/calypso/domains.svg";
import Redirects from "../../../public/calypso/redirects.svg";
import Security from "../../../public/calypso/security.svg";
import Resources from "../../../public/calypso/resources.svg";
import Maintenance from "../../../public/calypso/maintenance.svg";
import Storage from "../../../public/calypso/storage.svg";
import Advanced from "../../../public/calypso/advanced.svg";

export default function Sidebar() {
    const pathname = usePathname();

    const route = [
        {
            title: "Overview",
            href: "/services/calypso/overview",
            logo: Overview,
        },
        {
            title: "Source",
            href: "/services/calypso/source",
            logo: Source,
        },
        {
            title: "Deployments",
            href: "/services/calypso/deployments",
            logo: Deployments,
        },
        {
            title: "Environment",
            href: "/services/calypso/environment",
            logo: Environment,
        },
        {
            title: "Domains",
            href: "/services/calypso/domains",
            logo: Domains,
        },
        {
            title: "Redirects",
            href: "/services/calypso/redirects",
            logo: Redirects,
        },
        {
            title: "Security",
            href: "/services/calypso/security",
            logo: Security,
        },
        {
            title: "Resources",
            href: "/services/calypso/resources",
            logo: Resources,
        },
        {
            title: "Maintenance",
            href: "/services/calypso/maintenance",
            logo: Maintenance,
        },
        {
            title: "Storage",
            href: "/services/calypso/storage",
            logo: Storage,
        },
        {
            title: "Advanced",
            href: "/services/calypso/advanced",
            logo: Advanced,
        },
    ];
    return (
        <div className='border-b dark:border-[#313131] sm:border-none pb-8 mb-8 sm:pb-0 sm:mb-0'>
            <div className="flex sm:hidden">
                <select className="border dark:bg-[#1A1A1A] dark:text-white dark:border-[#313131] border-[#E8E8E8] p-3 rounded-xl grow">
                    <option value="">Source</option>
                </select>
            </div>
            <nav className="w-64 flex-col sm:flex hidden">
                {route.map((item, index) => {
                    return (
                        <Link
                            className={
                                pathname.startsWith(item.href)
                                    ? " flex items-center py-2 px-4 dark:bg-[#0BA8641A] dark:border-[#16D180] bg-[#F4FBF8] text-[#0BA864] rounded-lg"
                                    : "py-2 px-4 dark:text-[#BABABA] flex items-center"
                            }
                            href={item.href}
                            key={index}
                        >
                            <Image
                                src={item.logo}
                                className="mr-2"
                                width={20}
                                height={20}
                                alt={item.title}
                            />
                            {item.title}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
