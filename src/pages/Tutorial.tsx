import { useState } from "react"

export const Tutorial = () => {
    const thisValue = "Enter the link here"
    const localValue = localStorage.getItem(thisValue)

    const [value, setValue] = useState<string>(localValue || "")

    // save value pro and con to local storage
    const saveToLocalStorage = () => {
        localStorage.setItem(thisValue, value)
    }

    saveToLocalStorage()

    return (
        <div className="my-28 mx-auto w-2/4 justify-center">

            <div>
                <p className="text-5xl mb-10 text-center font-bold">
                    Get started with very simple steps
                </p>

                <p className="text-3xl mb-10 text-center font-semibold">
                    1. Go to <a className="text-blue-800 dark:text-blue-200 hover:brightness-150" href="https://www.github.com">GitHub</a>, create a new repository and upload the <code>json file</code>
                </p>

                <p className="text-3xl mb-10 text-center font-semibold">
                    2. Click on raw and copy the link
                </p>

                <p className="text-3xl mb-10 text-center font-semibold">
                    3. Paste the link below and click submit
                </p>
            </div>

            <div className="mx-auto w-2/4 justify-center">
                <input type={"text"} placeholder=""
                    className="w-full mx-2 form-control block px-3 py-1.5 text-base font-normal text-gray-900 dark:text-gray-200 bg-clip-padding border border-solid border-gray-100 dark:border-gray-700 rounded-lg transition ease-in-out m-0 focus:text-gray-900 dark:focus:text-gray-200 focus:bg-gray-100 dark:focus:bg-gray-600 focus:border-gray-500 focus:outline-none dark:bg-gray-700 bg-gray-50"
                    onChange={(e) => { setValue(e.target.value) }}
                    value={value} />


                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-5 justify-center">
                    Submit
                </button>
            </div>

        </div>
    )
}