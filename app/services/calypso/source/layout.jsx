import Navigate from "./navigate";

export default function Layout({ children }) {
    return (
        <div>
            <h1 className="font-medium text-xl mb-2">Source</h1>
            <p className="text-[#585757]">
                Some tagline text for better understanding
            </p>
            <Navigate />
            <div>{children}</div>
        </div>
    );
}
