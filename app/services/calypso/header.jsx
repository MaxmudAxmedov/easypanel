import Image from "next/image";
import Share from "../../../public/share.svg";

export default function Header() {
    return (
        <div className="flex justify-between items-center border-b p-6">
            <div>
                <span className="flex items-center mb-1">
                    <h2 className="text-2xl mr-2 font-medium">Sparklens</h2>
                    <span className="px-2 py-1 border rounded-xl border-[#D5F5E6] bg-[#F4FBF8] text-[#0BA864] text-sm font-medium">
                        APP
                    </span>
                </span>
                <span className="flex">
                    <a className="text-[#0BA864] mr-2 text-sm" href="">
                        https://sparklens.easypanel.host/
                    </a>
                    <Image src={Share} alt="" />
                </span>
            </div>
            <div>
                <span className='py-2 px-3 border border-[#E8E8E8] rounded-lg'>
                    Status: <span className='text-[#0BA864]'>Operational</span>
                </span>
            </div>
        </div>
    );
}
