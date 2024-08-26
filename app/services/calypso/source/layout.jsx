import Navigate from "./navigate";

export default function Layout({ children }) {
    return (
        <div>
            <h1 className="font-medium text-xl mb-2 dark:text-[#E8E8E8]">Source</h1>
            <p className="text-[#585757] dark:text-[#BABABA]">
                Some tagline text for better understanding
            </p>
            <Navigate />
            <div>{children}</div>
        </div>
    );
}
