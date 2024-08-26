import Image from "next/image";
import Share from "../../../public/share.svg";
import Warnings from "../../../public/warnings.svg";
import Alertx from "../../../public/alertx.svg";
import Select from "../../../public/select.svg";
import Deploy from "../../../public/deploy.svg";

export default function Header() {
    return (
        <div>
            <div className="flex sm:hidden flex-col mt-4 m-4 pb-8 border-b dark:border-[#313131]">
                <div className="flex rounded-xl dark:bg-[#2563EB1A] bg-[#EFF6FF] py-2 px-4 mb-8 items-center justify-between">
                    <Image
                        className="mr-2"
                        src={Warnings}
                        width="20"
                        height="20"
                        alert="warning icon"
                    />
                    <p className="max:w-[245] text-sm dark:text-[#BABABA]">
                        To use all features of Easypanel, we recommend using the
                        desktop version
                    </p>
                    <Image
                        className="ml-2"
                        src={Alertx}
                        width="24"
                        height="24"
                        alert="delete icon"
                    />
                </div>

                <select className="mb-5 w-full border dark:bg-[#1A1A1A] dark:text-white dark:border-[#313131] border-[#E8E8E8] rounded-xl p-3">
                    <option value=""> service.title </option>
                </select>

                <div className="flex items-center">
                    <Image src={Deploy} />
                    <a className='mx-2 text-[#0BA864]' href="">eployed.link</a>
                    <Image src={Share} alt="" />
                </div>
            </div>

            <div className="hidden sm:flex justify-between flex-col sm:flex-row items-center border-b dark:border-[#313131] p-6">
                <div>
                    <span className="flex items-center mb-1">
                        <h2 className="text-2xl mr-2 font-medium dark:text-[#E8E8E8]">
                            Sparklens
                        </h2>
                        <span className="px-2 py-1 border rounded-xl border-[#D5F5E6] bg-[#F4FBF8] dark:bg-[#0BA8641A] dark:border-[#16D180] text-[#0BA864] text-sm font-medium">
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
                <div className="mt-6 sm:mt-0">
                    <span className="py-2 px-3 border border-[#E8E8E8] dark:border-[#313131] dark:text-[#BABABA] rounded-lg">
                        Status:{" "}
                        <span className="text-[#0BA864]">Operational</span>
                    </span>
                </div>
            </div>
        </div>
    );
}
