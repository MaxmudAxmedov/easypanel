import Sidebar from "./sidebar";
import Header from "./header";
import HeroNav from "./hero-nav";

export default function Layout({ children }) {
    return (
        <div className=" bg-white mx-auto dark:bg-[#1A1A1A] border  dark:border-[#313131] xs:rounded-tl-xl max-w-full h-full">
            <Header />
            <HeroNav />
            <div className="p-3 sm:p-6 flex mn:flex-col md:flex-row">
                <Sidebar />
                <div className="sm:pl-6 px-3 sm:w-full">{children}</div>
            </div>
        </div>
    );
}
