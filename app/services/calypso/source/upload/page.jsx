export default function page() {
    return (
        <form className="bg-[#F7F7F7] p-4 rounded-lg min-w-[782px]">
            <div className="flex flex-col mb-4">
                <label htmlFor="img">Image</label>
                <input
                    className="border py-2 px-3 rounded-lg my-2"
                    id="img"
                    type="text"
                    name='img'
                />
                <span className="text-sm text-[#969696]">
                    Enter a public image name from any Docker registry
                </span>
            </div>
            <div className="flex justify-between items-center mb-6">
                <div className="w-6/12 mr-4">
                    <label className="block" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="border py-2 px-3 rounded-lg w-full my-2"
                        id="username"
                        type="text"
                        name='username'
                    />
                    <span className="text-sm text-[#969696]">
                        Used for private registries
                    </span>
                </div>
                <div className="w-6/12">
                    <label className="block" htmlFor="password">
                        Username
                    </label>
                    <input
                        className="border py-2 px-3 rounded-lg w-full my-2"
                        id="password"
                        type="password"
                        name='password'
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
