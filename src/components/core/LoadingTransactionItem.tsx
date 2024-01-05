export const LoadingTransactionItem = () => {
    return (
        <div>
            <div className="p-5 lg:w-96 md:w-72 m-5 bg-slate-100 dark:bg-slate-800 rounded-2xl hover:shadow-lg cursor-default">
                <p
                    className="text-xl font-bold bg-slate-200 text-slate-200 mx-2 rounded-t-xl animate-pulse w-32">
                    March 01
                </p>
                <p
                    className="text-sm font-medium bg-slate-200 text-slate-200 mx-2 rounded-b-xl animate-pulse w-32">
                    Friday
                </p>

                <div className="flex flex-row flex-wrap justify-around text-lg font-bold my-5">
                    <div>
                        <p className="bg-green-200 text-green-200 p-2 px-10 m-1 rounded-full hover:shadow-md cursor-pointer animate-pulse">
                            Category
                        </p>
                    </div>
                    <div>
                        <p className="bg-sky-200 text-sky-200 p-2 px-10 m-1 rounded-full hover:shadow-md cursor-pointer animate-pulse">
                            Account
                        </p>
                    </div>
                </div>

                <p className="text-2xl font-bold my-3 bg-slate-200 text-slate-200 mx-2 rounded-xl animate-pulse">
                    title
                </p>
                <p className="bg-slate-200 text-slate-200 mx-2 rounded-xl animate-pulse my-3">
                    description
                </p>
                <p className='text-5xl font-extrabold ml-12 flex flex-wrap bg-slate-200 text-slate-200 mx-2 rounded-xl animate-pulse'>
                    asds
                    <abbr
                        className="font-normal ml-2">
                        asd
                    </abbr>
                </p>
            </div>

        </div>
    )
}