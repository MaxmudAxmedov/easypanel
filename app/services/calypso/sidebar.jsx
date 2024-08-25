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
        <nav className="w-64 flex flex-col">
            {route.map((item, index) => {
                return (
                    <Link
                        className={
                            pathname == item.href
                                ? " flex items-center py-2 px-4 bg-[#F4FBF8] text-[#0BA864] rounded-lg"
                                : "py-2 px-4 flex items-center"
                        }
                        href={item.href}
                        key={index}
                    >
                        <Image src={item.logo} className="mr-2" width={20} height={20} alt={item.title} />
                        {item.title}
                    </Link>
                );
            })}
        </nav>
    );
}
