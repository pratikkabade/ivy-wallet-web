import { useEffect, useState } from 'react'
import { getDate, getDay } from '../hooks/Functions'
import { LoadingComponent } from '../components/LoadingComponent'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
    const [data, setData] = useState<any>([])

    useEffect(() => {
        const theData = localStorage.getItem('theData') || ''
        if (theData !== '') setData(JSON.parse(theData))
    }, [])

    // load page after data is fetched
    if (data.transactions === undefined) {
        return (
            <LoadingComponent />
        )
    }

    // only show 100 transactions
    const currentData = data.transactions.slice(0, 100)

    return (
        <div className="container mb-32 flex flex-wrap flex-col mx-auto justify-center items-center">
            <div className="flex flex-wrap flex-row mx-auto justify-center items-center">
                {currentData.map((item: any) => (
                    <div className="flex justify-center slide-r">
                        <div className="p-5 lg:w-96 md:w-72 m-10 bg-slate-100 dark:bg-slate-800 rounded-2xl hover:shadow-lg cursor-default">
                            <p
                                key={item.id + 'date'}
                                className="text-xl font-bold">
                                {getDate(item.dateTime)}
                            </p>
                            <p
                                key={item.id + 'day'}
                                className="text-slate-500 dark:text-slate-300 text-sm font-medium">
                                {getDay(item.dateTime)}
                            </p>

                            <div className="flex flex-row flex-wrap justify-around text-lg font-bold my-5">
                                <Link to={`/Category/`}
                                    onClick={() => localStorage.setItem('categoryName', item.categoryName)}>
                                    <p key={item.id + 'categoryName'}
                                        className="bg-green-100 dark:bg-green-800 p-2 px-10 m-1 rounded-full hover:shadow-md cursor-pointer">
                                        {/* {item.categoryIcon} */}
                                        {/* {item.categoryColor} */}
                                        {item.categoryName}
                                    </p>
                                </Link>
                                <Link to={`/Accounts/`}
                                    onClick={() => localStorage.setItem('accountName', item.accountName)}>
                                    <p key={item.id + 'account name'}
                                        className="bg-white p-2 dark:bg-gray-900 px-10 m-1 rounded-full hover:shadow-md cursor-pointer">
                                        {/* {item.accountIcon} */}
                                        {/* {item.accountColor} */}
                                        {item.accountName}
                                    </p>
                                </Link>
                            </div>

                            <p key={item.id + 'id'} className="text-2xl font-bold my-3">
                                {item.title}
                            </p>
                            <p key={item.id + 'description'} className="text-slate-500 dark:text-slate-200 my-3">
                                {item.description}
                            </p>
                            <p key={item.id + 'amount'}
                                className={`text-5xl font-extrabold ml-12 flex flex-wrap 
                        ${item.type === "EXPENSE" ? "" : "text-green-500"}`}>
                                {item.amount}
                                <abbr
                                    key={item.id + 'currency'}
                                    className="font-normal ml-2">
                                    {item.currency}
                                </abbr>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}