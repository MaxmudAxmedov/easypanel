import Link from "next/link";
import Image from "next/image";
import Sidebar from "./sidebar";
import Logo from "../../public/logo.svg";
import Hamburger from "../../public/hamburger.svg";
export default function Layout({ children }) {
    return (
        <div className="flex w-screen">
            <Sidebar />
            <section className="xs:bg-[#F7F7F7] bg-white dark:bg-[#1A1A1A] xs:dark:bg-[#272727] xs:pt-6 pt-0 w-full">
                <div className="xs:hidden flex justify-between items-center py-6 px-3">
                    <Link
                        className="text-center p-1 bg-white dark:bg-[#1A1A1A] dark:border-[#313131] shadow border rounded"
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

                    <input
                        className="py-2 px-4 rounded-lg border dark:border-[#313131] dark:bg-[#1A1A1A]"
                        placeholder="Jam's project"
                    />
                    <Image
                        className="cursor-pointer"
                        src={Hamburger}
                        alt="config icon"
                    />
                </div>
                {children}
            </section>
        </div>
    );
}
