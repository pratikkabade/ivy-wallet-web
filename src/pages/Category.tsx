import { useEffect, useState } from 'react'
import { androidColorToHex } from '../hooks/Functions'
import { LoadingComponent } from '../components/LoadingComponent'
import { DateFilter } from '../hooks/DateFilter'
import { TransactionItem } from '../components/TransactionItem'

export const Category = () => {
    const [data, setData] = useState<any>([])
    const [group, setGroup] = useState<any>(localStorage.getItem('categoryName') || '')

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

    // show all categories
    const categories = localStorage.getItem('categoryData') !== null ? JSON.parse(localStorage.getItem('categoryData') || '') : []

    // save function
    function save(cName: any) {
        localStorage.setItem('categoryName', cName)
        setGroup(cName)
    }

    // get sum of transactions
    const sum = currentData.filter((item: any) => item.categoryName === group)
        .map((item: any) => item.amount)
        .reduce((acc: any, item: any) => acc + item, 0)


    return (
        <div className="container mb-32 mx-auto justify-center items-center">
            <DateFilter yearC={year} setYearC={setYear}
                monthC={month} setMonthC={setMonth} />

            {group === '' ? (
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
                        <div className="p-5 lg:w-48 md:w-72 m-1 bg-slate-100 dark:bg-slate-800 rounded-2xl hover:shadow-lg cursor-pointer hover:brightness-110 transition duration-300 ease-in-out"
                            style={item.name === group ? { border: "2px solid #10B981", backgroundColor: androidColorToHex(item.color) } : { border: "none", backgroundColor: androidColorToHex(item.color) }}
                            onClick={() => (save(item.name))}>
                            <p
                                key={item.id + 'date'}
                                className="text-xl font-bold">
                                {item.name}
                            </p>
                            <p
                                key={item.id + 'day'}
                                className="text-slate-500 dark:text-slate-300 text-sm font-medium">
                                {data.settings[0].currency}
                            </p>
                            <p
                                key={item.id + 'sum'}
                                className="text-slate-500 dark:text-slate-300 text-sm font-medium">
                                {item.sum}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className="mx-auto flex flex-row flex-wrap justify-center items-center">
                {
                    currentData.map((item: any) => (
                        item.categoryName === group &&
                        <TransactionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}