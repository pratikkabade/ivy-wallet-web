import { useEffect, useState } from "react"
import { androidColorToHex } from "../utils/AndroidColorToHex";
import { categorySum } from "../utils/SumFunction";

type CategoryProps = {
    categoryC: string;
    setCategoryC: React.Dispatch<React.SetStateAction<string>>;
    dataBase: any;
}

export const CategoryFilter = (props: CategoryProps) => {
    const [data, setData] = useState<any>([])

    useEffect(() => {
        const theData = localStorage.getItem('theData') || ''
        if (theData !== '') setData(JSON.parse(theData))
    }, [])

    const currentData = props.dataBase !== undefined ? props.dataBase.filter((item: any) => item.type !== "TRANSFER") : []

    // show all accounts from local storage
    const categories = localStorage.getItem('categoryData') !== null ? JSON.parse(localStorage.getItem('categoryData') || '') : []

    // find the sum of all transaction in the account
    const sum = categorySum(currentData, props.categoryC)

    return (
        <div className="w-full bg-sky-100 dark:bg-sky-900 p-5 rounded-3xl my-5">
            {props.categoryC === '' ? (
                <div className="text-4xl font-bold text-center my-10">
                    No transactions found
                </div>
            ) : (
                <div className="text-4xl font-bold text-center my-10">
                    Total: {sum} {data.settings[0].currency}
                </div>
            )}
            <div className='flex flex-wrap flex-row'>
                {
                    categories.map((item: any) => (
                        <div className="p-5 lg:w-48 md:w-72 m-1 rounded-2xl hover:shadow-lg cursor-pointer hover:brightness-95 transition duration-300 ease-in-out bg-white"
                            style={item.name === props.categoryC ? 
                                { boxShadow: '5px 5px ' + androidColorToHex(item.color) }
                                : { boxShadow: '1px 1px ' + androidColorToHex(item.color) }}
                            onClick={() => (
                                item.name === props.categoryC ? props.setCategoryC('') : props.setCategoryC(item.name)
                            )}>
                            <p
                                key={item.id + 'date'}
                                className="text-xl font-bold">
                                {item.name}
                            </p>
                            <p
                                key={item.id + 'sum'}
                                className="text-slate-500 dark:text-slate-300 text-sm font-medium">
                                {item.sum} {item.currency}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


/*
import { useEffect, useState } from 'react'
import { LoadingComponent } from '../components/LoadingComponent'
import { DateFilter } from './DateFilter'
import { TransactionItem } from '../components/core/TransactionItem'
import { androidColorToHex } from '../utils/AndroidColorToHex'

export const setAccounts = () => {
    const [data, setData] = useState<any>([])
    const [account, setAccount] = useState<any>(localStorage.getItem('accountName') || '')

    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')

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

    const currentData1 = data.transactions.filter((item: any) => item.type !== "TRANSFER")
    const currentData = currentData1.filter((item: any) => item.transactionMonth.toString() === month.toString() &&
        item.transactionYear.toString() === year.toString())

    // show all accounts from local storage
    const accounts = localStorage.getItem('accountData') !== null ? JSON.parse(localStorage.getItem('accountData') || '') : []

    // save function
    function save(acName: any) {
        localStorage.setItem('accountName', acName)
        setAccount(acName)
    }

    // find the sum of all transaction in the account
    const sum = currentData.filter((item: any) => item.accountName === account)
        .reduce((acc: any, item: any) => acc + item.amount, 0)


    return (
        <div className="container mb-32 mx-auto justify-center items-center">
            <DateFilter yearC={year} setYearC={setYear}
                monthC={month} setMonthC={setMonth} />

            {sum === 0 ? (
                <div className="text-4xl font-bold text-center my-10 fade-in2">
                    No transactions found
                </div>
            ) : (

                <div className="text-4xl font-bold text-center my-10 fade-in2">
                    Total: {sum} {data.settings[0].currency}
                </div>
            )}
            <div className='flex flex-wrap flex-row'>
                {
                    accounts.map((item: any) => (
                        <div className="p-5 lg:w-48 md:w-72 m-1 rounded-2xl hover:shadow-lg cursor-pointer hover:brightness-110 transition duration-300 ease-in-out"
                            style={item.name === account ? { border: "2px solid #10B981", backgroundColor: androidColorToHex(item.color) } : { border: "none", backgroundColor: androidColorToHex(item.color) }}
                            onClick={() => (
                                save(item.name)
                            )}>
                            <p
                                key={item.id + 'date'}
                                className="text-xl font-bold">
                                {item.name}
                            </p>
                            <p
                                key={item.id + 'sum'}
                                className="text-slate-500 dark:text-slate-300 text-sm font-medium">
                                {item.sum} {item.currency}
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
                        <TransactionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}
*/