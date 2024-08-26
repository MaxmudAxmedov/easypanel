import Image from "next/image";
import Stop from "../../../public/calypso/stop.svg";
import Logs from "../../../public/calypso/logs.svg";
import Console from "../../../public/calypso/console.svg";
import Settings from "../../../public/calypso/settings.svg";
import Delete from "../../../public/calypso/delete.svg";
import DeployActive from "../../../public/calypso/deploy-active.svg";
import Link from "next/link";

export default function HeroNav() {
    const route = [
        {
            title: "Deploy",
            icon: undefined,
        },
        {
            title: "Stop",
            icon: Stop,
        },
        {
            title: "Logs",
            icon: Logs,
        },
        {
            title: "Console",
            icon: Console,
        },
        {
            title: "Force rebuild",
            icon: Settings,
        },
        {
            title: "Destroy",
            icon: Delete,
        },
    ];
    return (
        <div className='p-3'>
            <div className="flex sm:hidden justify-between items-center">
                <Link className="border dark:border-[#313131] p-[10px] rounded-xl bg-[#0BA864]" href="/">
                    <Image src={DeployActive} width='24' height='24' />
                </Link>
                <Link className="border dark:border-[#313131] border-[#E8E8E8] p-[10px] rounded-xl m-2" href='/'>
                    <Image src={Stop} width='24' height='24' />
                </Link>
                <Link className="border dark:border-[#313131] border-[#E8E8E8] p-[10px] rounded-xl" href='/'>
                    <Image src={Console} width='24' height='24' />
                </Link>
                <select className='border dark:bg-[#1A1A1A] dark:text-white dark:border-[#313131] border-[#E8E8E8] p-3 rounded-xl ml-2 grow'>
                    <option value="">More actions</option>
                </select>
            </div>
            <ul className="sm:flex hidden justify-between flex-wrap items-center max-w-[800px] p-6">
                {route?.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className={
                                item.title == "Deploy"
                                    ? "bg-[#0BA864] mt-3 dark:border-[#16D180] text-white flex items-center py-2 px-3 mr-3 border rounded-lg"
                                    : "flex items-center py-2 px-3 mr-3 border rounded-lg dark:text-[#E8E8E8] dark:border-[#313131] mt-3"
                            }
                        >
                            {item.icon != undefined ? (
                                <Image
                                    className="mr-3"
                                    src={item?.icon}
                                    alt={item.title}
                                />
                            ) : (
                                ""
                            )}
                            <p>{item.title}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
