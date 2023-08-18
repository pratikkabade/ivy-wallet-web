import { useState } from "react"

export const Tutorial = () => {
    const thisValue = "Enter the link here"
    const localValue = localStorage.getItem(thisValue)

    const [value, setValue] = useState<string>(localValue || "")

    // save value pro and con to local storage
    const saveToLocalStorage = () => {
        localStorage.setItem(thisValue, value)
        localStorage.setItem("thisValues", value)
    }

    saveToLocalStorage()

    return (
        <div className="my-28 mx-auto w-2/4 justify-center">

            <div>
                <p className="text-5xl mb-10 text-center font-bold">
                    Get started with very simple steps
                </p>

                <p className="text-3xl mb-10 text-left font-semibold">
                    1. Go to <a className="text-blue-800 dark:text-blue-200 hover:brightness-150" href="https://www.github.com">GitHub</a>, create a new repository and upload the <code>json file</code>
                </p>

                <p className="text-3xl mb-10 text-left font-semibold">
                    2. Click on raw and copy the link
                </p>

                <p className="text-3xl mb-10 text-left font-semibold">
                    3. Paste the link below and click submit
                </p>
            </div>

            <div className="mx-auto w-2/4 justify-center">
                <textarea placeholder=""
                    className="h-96 w-full mx-2 px-3 py-1.5 text-base font-normal text-gray-800 dark:text-gray-300 bg-clip-padding border focus:border-2 border-solid border-blue-100 dark:border-gray-700 transition ease-in-out m-0 focus:text-gray-900 dark:focus:text-gray-200 focus:border-blue-600 focus:outline-none bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-lg rounded-lg hover:rounded-lg focus:rounded-lg"
                    onChange={(e) => { setValue(e.target.value) }}
                    value={value} />


                <div className="mt-10">
                    <a href="/IvyWallet/Dashboard" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-5 justify-center">
                        Visit Dashboard
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}