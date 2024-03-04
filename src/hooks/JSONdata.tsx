import { useState } from "react"

export const JSONdata = () => {
    const thisValue = "Enter the link here"
    const localValue = localStorage.getItem(thisValue)

    const [value, setValue] = useState<string>(localValue || "")
    const [allow, setAllow] = useState<boolean>(false)

    const saveToLocalStorage = () => {
        localStorage.setItem(thisValue, value)
        localStorage.setItem("theURL", value)
    }

    saveToLocalStorage()

    return (
        <>
            <label className="m-3 mb-5">
                <div className="flex flex-row">
                    <input type="checkbox" className="m-3" onChange={() => setAllow(!allow)} />
                    <div className="block dark:text-white">
                        By clicking here, you agree
                        <a href="#"
                            className="text-sky-700 dark:text-sky-300 hover:brightness-150 hover:underline mx-2">
                            ivy-wallet-web
                        </a>
                        can store cookies on your device.
                    </div>
                </div>
            </label>

            {
                allow ?
                    <input
                        className="w-full mx-2 px-3 py-1.5 text-base font-normal text-gray-800 dark:text-gray-300 bg-clip-padding border focus:border-2 border-solid border-blue-100 dark:border-gray-700 transition ease-in-out m-0 focus:text-gray-900 dark:focus:text-gray-200 focus:border-blue-600 focus:outline-none bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-lg rounded-lg hover:rounded-lg focus:rounded-lg"
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)} />
                    :
                    <input disabled
                        className="w-full mx-2 px-3 py-1.5 text-base font-normal text-red-800 dark:text-red-300 bg-clip-padding border focus:border-2 border-solid border-blue-100 dark:border-red-700 m-0 focus:text-red-900 dark:focus:text-red-200 focus:border-blue-600 focus:outline-none bg-red-100 dark:bg-red-900 shadow-md rounded-lg focus:rounded-lg hover:cursor-not-allowed"
                        type="text"
                    />
            }
        </>
    )
}