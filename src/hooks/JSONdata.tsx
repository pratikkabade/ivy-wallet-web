import axios from "axios"
import { useEffect, useState } from "react"
import { getMonth, getYear } from "./Functions"

export const JSONdata = () => {
    const [value, setValue] = useState<string>(localStorage.getItem('theURL') || "")
    const [allow, setAllow] = useState<boolean>(false)

    const [data, setData] = useState<any>([])
    const [fetching, setFetch] = useState<boolean>(true)

    // use axios
    function fetchData() {
        axios.get(value)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        setFetch(false)
    }

    useEffect(() => {
        if (value !== '') {
            setAllow(true)
        }
    }, [value])

    fetching && fetchData()

    if (data.transactions !== undefined) {
        const currentData = data.transactions.filter((item: any) => item.type !== "TRANSFER")

        // get name from accounts array using id from transactions
        currentData.map((item: any) => {
            const account = data.accounts.find((account: any) => account.id === item.accountId)

            item.accountName = account.name
            item.accountColor = account.color
            item.accountCurrency = account.currency
            item.accountIcon = account.icon

            return item
        })

        // get name form categories array using id from transactions
        currentData.map((item: any) => {
            const category = data.categories.find((category: any) => category.id === item.categoryId)

            item.categoryName = category.name
            item.categoryColor = category.color
            item.categoryIcon = category.icon

            return item
        })

        // dateTime to year and month
        currentData.map((item: any) => {
            const dt = item.dateTime

            item.transactionYear = getYear(dt)
            item.transactionMonth = getMonth(dt)

            return item
        })
        const username = data.settings[0].name
        localStorage.setItem('username', username)
    }

    const saveToLocalStorage = () => {
        localStorage.setItem("theURL", value)
        localStorage.setItem("theData", JSON.stringify(data))
    }

    saveToLocalStorage()

    return (
        <>
            <label className="m-3 mb-5">
                <div className="flex flex-row">
                    <input type="checkbox"
                        className="m-3"
                        onChange={() => {
                            setAllow(!allow)
                            setValue('')
                        }}
                        checked={allow} />
                    <div className="block dark:text-white">
                        By clicking here, you agree
                        <button
                            className="text-sky-700 dark:text-sky-300 hover:brightness-150 hover:underline mx-2">
                            ivy-wallet-web
                        </button>
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