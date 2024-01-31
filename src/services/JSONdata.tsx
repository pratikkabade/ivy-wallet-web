import axios from "axios"
import { useEffect, useState } from "react"
import { getMonth, getYear } from "../utils/DateFunctions"

export const JSONdata = () => {
    const [url, setUrl] = useState<string>(localStorage.getItem('theURL') || "")
    const [allow, setAllow] = useState<boolean>(false)

    const [data, setData] = useState<any>([])
    const [fetching, setFetch] = useState<boolean>(true)

    // use Axios to fetch data 
    function fetchData() {
        axios.get(url)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        setFetch(false)
    }

    // load data if url is not empty
    useEffect(() => {
        if (url !== '') {
            setAllow(true)
        }
    }, [url])

    fetching && fetchData()

    if (data.transactions !== undefined) {
        // ACCOUNTS array, calculate SUM from all transactions
        const accountData = data.accounts.map((account: any) => {
            const sum = data.transactions.filter((item: any) => item.accountId === account.id)
                .filter((item: any) => item.dateTime !== undefined)     // items with NO DATETIME
                .map((item: any) => item.type === "INCOME" ? item.amount : item.type === "EXPENSE" ? -item.amount : 0)  // EXPENSE or INCOME items
                .reduce((acc: any, item: any) => acc + item, 0)         // reduce to SUM

            account.sum = sum

            return account
        })

        // CATEGORIES array, calculate SUM from all 
        const categoryData = data.categories.map((category: any) => {
            const sum = data.transactions.filter((item: any) => item.categoryId === category.id)
                .filter((item: any) => item.dateTime !== undefined)     // items with NO DATETIME
                .map((item: any) => item.type === "INCOME" ? item.amount : item.type === "EXPENSE" ? -item.amount : 0)  // EXPENSE or INCOME items
                .reduce((acc: any, item: any) => acc + item, 0)         // reduce to SUM

            category.sum = sum

            return category
        })

        // SAVE ACCOUNTS, CATEGORIES to local storage
        localStorage.setItem("accountData", JSON.stringify(accountData))
        localStorage.setItem("categoryData", JSON.stringify(categoryData))
    }


    if (data.transactions !== undefined) {
        const transactionsData = data.transactions.filter((item: any) => item.type !== "TRANSFER")

        // get name from ACCOUNTS array using ID from TRANSACTIONS
        transactionsData.map((item: any) => {
            const account = data.accounts.find((account: any) => account.id === item.accountId)

            item.accountName = account.name
            item.accountColor = account.color
            item.accountCurrency = account.currency
            item.accountIcon = account.icon

            return item
        })

        // get name from CATEGORIES array using ID from TRANSACTIONS
        transactionsData.map((item: any) => {
            const category = data.categories.find((category: any) => category.id === item.categoryId)

            item.categoryName = category.name
            item.categoryColor = category.color
            item.categoryIcon = category.icon

            return item
        })

        // filter out items with NO DATETIME
        transactionsData.filter((item: any) => item.dateTime !== undefined)

        // get YEAR and MONTH from DATETIME
        transactionsData.map((item: any) => {
            const dt = item.dateTime

            if (dt === undefined) {
                item.transactionYear = "N/A"
                item.transactionMonth = "N/A"
                return item
            }

            item.transactionYear = getYear(dt)
            item.transactionMonth = getMonth(dt)

            return item
        })
        const username = data.settings[0].name
        localStorage.setItem('username', username)
    }

    const saveToLocalStorage = () => {
        localStorage.setItem("theURL", url)
        localStorage.setItem("theData", JSON.stringify(data))
    }

    if (data.transactions !== undefined) {
        saveToLocalStorage()
    }

    return (
        <>
            <p className="text-xl my-2">Your Data</p>
            {
                allow ?
                    <div className="w-4/5">
                        <input
                            className="w-full mx-2 px-3 py-1.5 text-base font-normal text-gray-800 dark:text-gray-300 bg-clip-padding border focus:border-2 border-solid border-blue-100 dark:border-gray-700 transition ease-in-out m-0 focus:text-gray-900 dark:focus:text-gray-200 focus:border-blue-600 focus:outline-none bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-lg rounded-lg hover:rounded-lg focus:rounded-lg"
                            type="text"
                            value={url}
                            onChange={(e) => {
                                setUrl(e.target.value)
                                localStorage.setItem("theURL", url)
                            }} />
                    </div>
                    :
                    <div className="w-4/5">
                        <input disabled
                            className="w-full mx-2 px-3 py-1.5 text-base font-normal text-red-800 dark:text-red-300 bg-clip-padding border focus:border-2 border-solid border-blue-100 dark:border-red-700 m-0 focus:text-red-900 dark:focus:text-red-200 focus:border-blue-600 focus:outline-none bg-red-100 dark:bg-red-900 shadow-md rounded-lg focus:rounded-lg hover:cursor-not-allowed"
                            type="text"
                        />
                    </div>
            }
            <label className="m-3 mb-5">
                <div className="flex flex-row justify-center align-middle items-center">
                    <input type="checkbox"
                        className="m-3"
                        onChange={() => {
                            setAllow(!allow)
                            setUrl('')
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
                    {
                        allow ?
                            <button onClick={saveToLocalStorage} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-fit h-fit">
                                Save
                            </button>
                            :
                            <button disabled type="button" className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-blue-600 w-fit h-fit hover:cursor-not-allowed">
                                Save
                            </button>
                    }
                </div>
            </label>
        </>
    )
}