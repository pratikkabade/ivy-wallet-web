import { useEffect, useState } from 'react'
import { LoadingComponent } from '../components/LoadingComponent'
import { DateFilter } from '../hooks/DateFilter'
import { TransactionItem } from '../components/core/TransactionItem'
import { AccountFilter } from '../hooks/AccountFilter'
import { CategoryFilter } from '../hooks/CategoryFilter'
import { totalSum } from '../utils/SumFunction'

export const Dashboard = () => {
    const [data, setData] = useState<any>([])
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')
    const [account, setAccountC] = useState('')
    const [category, setCategoryC] = useState('')

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

    const sum = totalSum(currentData, account, category)

    return (
        <div className="container mb-32 flex flex-wrap flex-col mx-auto justify-center items-center">
            <div className="text-4xl font-bold text-center my-10">
                Total: {sum}
            </div>
            <DateFilter yearC={year} setYearC={setYear}
                monthC={month} setMonthC={setMonth} />
            <AccountFilter dataBase={currentData} accountC={account} setAccountC={setAccountC} />
            <CategoryFilter dataBase={currentData} categoryC={category} setCategoryC={setCategoryC} />
            <div className="flex flex-wrap flex-row mx-auto justify-center items-center">
                {currentData.map((item: any) => (
                    // show all transactions in the account and category
                    account === '' && category === '' ? (
                        <TransactionItem key={item.id} item={item}
                            accountC={account} setAccountC={setAccountC}
                            categoryC={category} setCategoryC={setCategoryC} />
                    ) : (
                        // show all transactions in the account
                        account !== '' && category === '' ? (
                            item.accountName === account ? (
                                <TransactionItem key={item.id} item={item}
                                    accountC={account} setAccountC={setAccountC}
                                    categoryC={category} setCategoryC={setCategoryC} />
                            ) : (
                                <></>
                            )
                        ) : (
                            // show all transactions in the category
                            account === '' && category !== '' ? (
                                item.categoryName === category ? (
                                    <TransactionItem key={item.id} item={item}
                                        accountC={account} setAccountC={setAccountC}
                                        categoryC={category} setCategoryC={setCategoryC} />
                                ) : (
                                    <></>
                                )
                            ) : (
                                // show all transactions in the account and category
                                account !== '' && category !== '' ? (
                                    item.accountName === account && item.categoryName === category ? (
                                        <TransactionItem key={item.id} item={item}
                                            accountC={account} setAccountC={setAccountC}
                                            categoryC={category} setCategoryC={setCategoryC} />
                                    ) : (
                                        <></>
                                    )
                                ) : (
                                    <></>
                                )
                            )
                        )
                    )
                ))}
            </div>
        </div>
    )
}