import { useEffect, useState } from 'react'
import { LoadingComponent } from '../components/LoadingComponent'
import { DateFilter } from '../hooks/DateFilter'
import { TransactionItem } from '../components/core/TransactionItem'

export const Dashboard = () => {
    const [data, setData] = useState<any>([])
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')

    // FETCH THE LOCALLY SAVED DATA 
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

    // dont show any transfer transactions
    const currentData1 = data.transactions.filter((item: any) => item.type !== "TRANSFER")
    const currentData = currentData1.filter((item: any) => item.transactionMonth.toString() === month.toString() &&
        item.transactionYear.toString() === year.toString())

    return (
        <div className="container mb-32 flex flex-wrap flex-col mx-auto justify-center items-center">
            <DateFilter yearC={year} setYearC={setYear}
                monthC={month} setMonthC={setMonth} />
            <div className="flex flex-wrap flex-row mx-auto justify-center items-center">
                {currentData.map((item: any) => (
                    <TransactionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}