import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getDate, getDay } from '../hooks/Functions'
import { PlusButton } from './add-functionalities/PlusButton'

export const Dashboard = () => {
    const [data, setData] = useState<any>([])

    // fetch url from local storage
    const url = localStorage.getItem('theURL') || ''

    // use axios
    function fetchData() {
        axios.get(url)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchData()
    })
    console.log(data.transactions)


    // load page after data is fetched
    if (data.transactions === undefined) {
        return (
            <div className="container mb-32 flex flex-wrap flex-col mx-auto justify-center items-center">
                <div className="flex flex-wrap flex-row mx-auto justify-center items-center">
                    <h1 className="text-4xl font-bold">Loading...</h1>
                </div>
            </div>
        )
    }



    return (
        <div className="container mb-32 flex flex-wrap flex-col mx-auto justify-center items-center">
            <div className="flex flex-wrap flex-row mx-auto justify-center items-center">
                {data.transactions.map((item: any) => (
                    <div className="flex justify-center slide-r">
                        <div className="p-5 lg:w-96 md:w-72 m-10 bg-slate-100 dark:bg-slate-800 rounded-2xl hover:shadow-lg cursor-default">
                            <p
                                className="text-xl font-bold">
                                {getDate(item.dateTime)}
                            </p>
                            <p className="text-slate-500 dark:text-slate-300 text-sm font-medium">
                                {getDay(item.dateTime)}
                            </p>

                            <div className="flex flex-row flex-wrap justify-around text-lg font-bold my-5">
                                <p key={item.id}
                                    className="bg-green-100 dark:bg-green-800 p-2 px-10 m-1 rounded-full hover:shadow-md cursor-pointer">
                                    {item.category}
                                </p>
                                <p key={item.id}
                                    className="bg-white p-2 dark:bg-gray-900 px-10 m-1 rounded-full hover:shadow-md cursor-pointer">
                                    {item.accountName}
                                </p>
                            </div>

                            <p key={item.id} className="text-2xl font-bold my-3">
                                {item.title}
                            </p>
                            <p key={item.id} className="text-slate-500 dark:text-slate-200 my-3">
                                {item.description}
                            </p>
                            <p key={item.id}
                                className={`text-5xl font-extrabold ml-12 flex flex-wrap 
                        ${item.type === "EXPENSE" ? "" : "text-green-500"}`}>
                                {item.amount}
                                <abbr
                                    className="font-normal ml-2">
                                    {item.currency}
                                </abbr>
                            </p>
                        </div>
                    </div>
                ))}
                <PlusButton />
            </div>
        </div>
    )
}