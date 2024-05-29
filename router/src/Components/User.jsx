const User = ({ name, username, email }) => {
    return (
        <>
            <div
                className="mt-20 sm:max-w-xl sm:mx-auto rounded-2xl sm:rounded-full flex bg-indigo-50 border-4 border-indigo-200 flex-col sm:flex-row"
                id="widget"
            >
                <div className="py-6 sm:rounded-l-full pr-10 relative rounded-xl mx-auto bg-white w-full sm:w-auto">
                    <img
                        src={`https://unavatar.io/${username}`}
                        className="rounded-full w-32 h-32 object-cover border-indigo-200 border-4 relative left-5 sm:inline-block mx-auto"
                    />
                    <div className="bg-green-300 w-7 h-7 absolute rounded-full right-6 top-6 border-4 border-white"></div>
                </div>
                <div className="flex flex-col ml-2 p-4">
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-semibold mb-3">
                            {name}
                            <span className="font-normal text-sm ml-2 bg-indigo-200 py-1 px-2 rounded-md">
                                {username}
                            </span>
                        </h4>
                    </div>
                    <p className="text-sm">
                        {email}
                    </p>
                    <div className="mt-2 font-medium text-gray-500">
                        <span className="text-black">672</span> Siguiendo
                        <span className="text-black ml-7">59.9K</span> Seguidores
                    </div>
                </div>
            </div>
        </>
    )
}

export default User