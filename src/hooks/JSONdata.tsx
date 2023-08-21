import { useState } from "react"

export const JSONdata = () => {
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
        <textarea placeholder=""
            className="h-96 w-full mx-2 px-3 py-1.5 text-base font-normal text-gray-800 dark:text-gray-300 bg-clip-padding border focus:border-2 border-solid border-blue-100 dark:border-gray-700 transition ease-in-out m-0 focus:text-gray-900 dark:focus:text-gray-200 focus:border-blue-600 focus:outline-none bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-lg rounded-lg hover:rounded-lg focus:rounded-lg"
            onChange={(e) => { setValue(e.target.value) }}
            value={value} />
    )
}