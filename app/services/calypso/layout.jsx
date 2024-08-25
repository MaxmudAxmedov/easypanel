import Sidebar from "./sidebar";
import Header from "./header";
import HeroNav from "./hero-nav";

export default function Layout({ children }) {
    return (
        <div className="bg-white border rounded-tl-xl min-w-[77vw] h-full">
            <Header />
            <HeroNav />
            <div className="p-6 flex">
                <Sidebar />
                <div className='pl-6'>{children}</div>
            </div>
        </div>
    );
}
