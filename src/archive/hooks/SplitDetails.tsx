import { useState } from "react"

export const SplitDetails = () => {
    const [v1, setv1] = useState<string>("")
    const [v2, setv2] = useState<string>("")
    const [v3, setv3] = useState<string>("")
    const [v4, setv4] = useState<string>("")
    const [v5, setv5] = useState<string>("")
    const [v6, setv6] = useState<string>("")
    return (
        <div className="flex flex-row justify-center">
            <div className="mt-10 container w-2/3 md:w-1/2 slide-up">
                <p className="mx-5 mt-5 text-xl">Date</p>
                <input type="date" placeholder="" className="text-center cursor-pointer w-full mx-2 px-3 py-1.5 text-base font-normal text-gray-900 dark:text-gray-200 bg-clip-padding border focus:border-2 border-solid border-blue-100 dark:border-gray-700 transition ease-in-out m-0 focus:text-gray-900 dark:focus:text-gray-200 focus:border-blue-600 focus:outline-none dark:bg-gray-800 hover:shadow-md rounded-md hover:rounded-lg focus:rounded-lg" onChange={(e) => { setv1(e.target.value) }} value={v1} />


                <div className="flex justify-around">
                    <div className="flex flex-col">
                        <p className="mx-5 mt-5 text-xl">Category</p>
                        <input placeholder="" className="cursor-pointer w-full mx-2 px-3 py-1.5 text-base font-normal text-gray-900 dark:text-gray-200 bg-clip-padding border focus:border-2 border-solid border-blue-100 dark:border-gray-700 transition ease-in-out m-0 focus:text-gray-900 dark:focus:text-gray-200 focus:border-blue-600 focus:outline-none dark:bg-gray-800 hover:shadow-md rounded-md hover:rounded-lg focus:rounded-lg" onChange={(e) => { setv2(e.target.value) }} value={v2} />
                    </div>

                    <div className="flex flex-col">
                        <p className="mx-5 mt-5 text-xl">Account</p>
                        <input placeholder="" type="number" className="cursor-pointer w-full mx-2 px-3 py-1.5 text-base font-normal text-gray-900 dark:text-gray-200 bg-clip-padding border focus:border-2 border-solid border-blue-100 dark:border-gray-700 transition ease-in-out m-0 focus:text-gray-900 dark:focus:text-gray-200 focus:border-blue-600 focus:outline-none dark:bg-gray-800 hover:shadow-md rounded-md hover:rounded-lg focus:rounded-lg" onChange={(e) => { setv3(e.target.value) }} value={v3} />
                    </div>
                </div>

                <p className="mx-5 mt-5 text-xl">Title</p>
                <input placeholder="" className="cursor-pointer w-full mx-2 px-3 py-1.5 text-base font-normal text-gray-900 dark:text-gray-200 bg-clip-padding border focus:border-2 border-solid border-blue-100 dark:border-gray-700 transition ease-in-out m-0 focus:text-gray-900 dark:focus:text-gray-200 focus:border-blue-600 focus:outline-none dark:bg-gray-800 hover:shadow-md rounded-md hover:rounded-lg focus:rounded-lg" onChange={(e) => { setv4(e.target.value) }} value={v4} />

                <p className="mx-5 mt-5 text-xl">Description</p>
                <input placeholder="" className="cursor-pointer w-full mx-2 px-3 py-1.5 text-base font-normal text-gray-900 dark:text-gray-200 bg-clip-padding border focus:border-2 border-solid border-blue-100 dark:border-gray-700 transition ease-in-out m-0 focus:text-gray-900 dark:focus:text-gray-200 focus:border-blue-600 focus:outline-none dark:bg-gray-800 hover:shadow-md rounded-md hover:rounded-lg focus:rounded-lg" onChange={(e) => { setv5(e.target.value) }} value={v5} />

                <p className="mx-5 mt-5 text-xl">Amount</p>
                <input placeholder="" type="number" className="cursor-pointer w-full mx-2 px-3 py-1.5 text-base font-normal text-gray-900 dark:text-gray-200 bg-clip-padding border focus:border-2 border-solid border-blue-100 dark:border-gray-700 transition ease-in-out m-0 focus:text-gray-900 dark:focus:text-gray-200 focus:border-blue-600 focus:outline-none dark:bg-gray-800 hover:shadow-md rounded-md hover:rounded-lg focus:rounded-lg" onChange={(e) => { setv6(e.target.value) }} value={v6} />

                <div className="mt-10 flex flex-row justify-end">
                    <a href="/IvyWallet/Dashboard" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800 my-5 justify-center">
                        Split
                        <i className="fa-solid fa-share-nodes ml-3 text-sm"></i>
                    </a>
                </div>

            </div>
        </div>
    )
}