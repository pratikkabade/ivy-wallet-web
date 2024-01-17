import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getDate, getDay } from '../hooks/Functions'
import { PlusButton } from '../components/add-functionalities/PlusButton'
import { LoadingComponent } from '../components/LoadingComponent'
import { Link } from 'react-router-dom'

export const Accounts = () => {
    // fetch url from local storage
    const url = localStorage.getItem('theURL') || ''
    const acName = localStorage.getItem('account') || ''

    // states
    const [data, setData] = useState<any>([])
    const [account, setAccount] = useState<any>(acName)
    const [fetching, setFetch] = useState<boolean>(true)

    // fetch the url from browser
    var currentLocation = window.location.href;
    console.log(currentLocation);

    // use axios
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

    useEffect(() => {
        fetching && fetchData()
    })

    // load page after data is fetched
    if (data.transactions === undefined) {
        return (
            <LoadingComponent />
        )
    }


    // only show 100 transactions
    const currentData = data.transactions.slice(0, 100)

    // get name from accounts array using id from transactions
    currentData.map((item: any) => {
        const account = data.accounts.find((account: any) => account.id === item.accountId)
        const color = data.accounts.find((account: any) => account.id === item.accountId)
        const currency = data.accounts.find((account: any) => account.id === item.accountId)
        const icon = data.accounts.find((account: any) => account.id === item.accountId)
        item.accountName = account.name
        item.accountColor = color.color
        item.accountCurrency = currency.currency
        item.accountIcon = icon.icon
    })

    // get name form categories array using id from transactions
    currentData.map((item: any) => {
        const category = data.categories.find((category: any) => category.id === item.categoryId)
        const color = data.categories.find((category: any) => category.id === item.categoryId)
        const icon = data.categories.find((category: any) => category.id === item.categoryId)
        item.category = category.name
        item.color = color.color
        item.icon = icon.icon
    })

    // show all accounts
    const accounts = data.accounts

    // save function
    function save(nm: any) {
        localStorage.setItem('account', nm)
        setAccount(nm)
    }


    return (
        <div className="container mb-32 mx-auto justify-center items-center">
            <div className='flex flex-wrap flex-row'>
                {
                    accounts.map((item: any) => (
                        <div className="p-5 lg:w-48 md:w-72 m-1 bg-slate-100 dark:bg-slate-800 rounded-2xl hover:shadow-lg cursor-pointer hover:brightness-110 transition duration-300 ease-in-out"
                            style={item.name === account ? { border: "2px solid #10B981" } : { border: "none" }}
                            onClick={() => (
                                save(item.name)
                            )}>
                            <p
                                key={item.id + 'date'}
                                className="text-xl font-bold">
                                {item.name}
                            </p>
                            <p
                                key={item.id + 'day'}
                                className="text-slate-500 dark:text-slate-300 text-sm font-medium">
                                {item.currency}
                            </p>
                            <p
                                key={item.id + 'day'}
                                className="text-slate-500 dark:text-slate-300 text-sm font-medium">
                                {item.balance}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className="mx-auto flex flex-row flex-wrap justify-center items-center">
                {
                    // only show transaction with same account name
                    currentData.map((item: any) => (
                        item.accountName === account &&
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
                                    <Link to={`/Category/${item.category}`}
                                        onClick={() => localStorage.setItem('category', item.category)}>
                                        <p key={item.id + 'category'}
                                            className="bg-green-100 dark:bg-green-800 p-2 px-10 m-1 rounded-full hover:shadow-md cursor-pointer">
                                            {/* {item.icon} */}
                                            {/* {item.color} */}
                                            {item.category}
                                        </p>
                                    </Link>
                                    <Link to={`/Accounts/${item.accountName}`}
                                        onClick={() => localStorage.setItem('account', item.accountName)}>
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
                    ))
                }
                <PlusButton />
            </div>
        </div>
    )
}