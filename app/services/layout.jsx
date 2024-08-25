import Sidebar from "./sidebar";

export default function Layout({ children }) {
    return (
        <div className='flex'>
            <Sidebar />
            <section className='bg-[#F7F7F7] pt-6'>{children}</section>
        </div>
    );
}
