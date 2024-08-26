export default function page() {
    return (
        <form className="bg-[#F7F7F7] dark:bg-[#272727] p-4 rounded-lg">
            <div className="flex flex-col mb-4">
                <label htmlFor="img" className="dark:text-[#BABABA]">
                    Image
                </label>
                <input
                    className="border py-2 px-3 rounded-lg my-2 max-w-full dark:border-[#313131] dark:bg-[#1A1A1A]"
                    id="img"
                    type="text"
                    name="img"
                />
                <span className="text-sm text-[#969696]">
                    Enter a public image name from any Docker registry
                </span>
            </div>
            <div className="flex justify-between sm:flex-row flex-col items-center mb-6">
                <div className="w-full md:w-6/12 sm:mr-4">
                    <label
                        className="block dark:text-[rgb(186,186,186)]"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        className="flex  grow border py-2 px-3 w-full rounded-lg my-2 dark:border-[#313131]  dark:bg-[#1A1A1A]"
                        id="username"
                        type="text"
                        name="username"
                    />
                    <span className="text-sm text-[#969696]">
                        Used for private registries
                    </span>
                </div>
                <div className="w-full md:w-6/12 sm:mr-4">
                    <label
                        className="block dark:text-[#BABABA]"
                        htmlFor="password"
                    >
                        Username
                    </label>
                    <input
                        className="flex grow border py-2 px-3 w-full rounded-lg my-2 dark:border-[#313131]  dark:bg-[#1A1A1A]"
                        id="password"
                        type="password"
                        name="password"
                    />
                    <span className="text-sm text-[#969696]">
                        Used for private registries
                    </span>
                </div>
            </div>
            <button className="bg-[#0BA864] rounded-lg text-white py-2 px-3">
                Save changes
            </button>
        </form>
    );
}
