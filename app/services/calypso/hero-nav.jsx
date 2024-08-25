import Image from "next/image";
import Stop from "../../../public/calypso/stop.svg";
import Logs from "../../../public/calypso/logs.svg";
import Console from "../../../public/calypso/console.svg";
import Settings from "../../../public/calypso/settings.svg";
import Delete from "../../../public/calypso/delete.svg";

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
        <ul className="flex justify-between items-center w-[800px] p-6">
            {route?.map((item, index) => {
                return (
                    <li
                        key={index}
                        className={item.title == 'Deploy' ? 'bg-[#0BA864] text-white flex items-center py-2 px-3 mr-3 border rounded-lg': 'flex items-center py-2 px-3 mr-3 border rounded-lg'}
                    >
                        {item.icon != undefined ? (
                            <Image className='mr-3' src={item?.icon} alt={item.title} />
                        ) : (
                            ""
                        )}
                        <p>{item.title}</p>
                    </li>
                );
            })}
        </ul>
    );
}
