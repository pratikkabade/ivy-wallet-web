import { useEffect, useState } from 'react'
import { LoadingComponent } from '../components/LoadingComponent'
import { TransactionItem } from '../components/core/TransactionItem'
import { totalSum } from '../utils/SumFunction'
import { AccountFilterButton } from '../components/buttons/AccountFilterButton'
import { CategoryFilterButton } from '../components/buttons/CategoryFilterButton'
import { SettingsButton } from '../components/buttons/SettingsButton'
import { TimeWidget } from '../widgets/Time'
import { RemoveAccountButton } from '../components/buttons/RemoveAccountButton'
import { RemoveCategoryButton } from '../components/buttons/RemoveCategoryButton'
import { AnimatedLoader } from '../components/AnimatedLoader'

export const NewHome = () => {
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
            <div className='flex flex-col lg:flex-row w-full'>
                <div className='flex flex-col max-lg:flex-row justify-between align-middle items-center lg:w-72 px-5'>
                    <div className='flex flex-col max-lg:flex-row max-lg:justify-between justify-center items-center'>
                        <div className="text-4xl font-bold my-10">
                            <img src="https://avatars.githubusercontent.com/u/111740948?s=200&v=4"
                                className="h-20 sm:h-16 rounded-xl" alt="Logo" />
                        </div>
                    </div>
                    <div className='flex flex-col max-lg:flex-row justify-center items-center align-middle'>
                        <TimeWidget yearC={year} setYearC={setYear} monthC={month} setMonthC={setMonth} />
                        <SettingsButton />
                    </div>
                </div>
                <LoadingComponent />
            </div>
        )
    }

    // dont show any transfer transactions
    const currentData1 = data.transactions.filter((item: any) => item.type !== "TRANSFER")
    const currentData = currentData1.filter((item: any) => item.transactionMonth.toString() === month.toString() &&
        item.transactionYear.toString() === year.toString())

    const sum = totalSum(currentData, account, category)

    // after 2s show ch2 and hide ch1
    setTimeout(() => {
        document.getElementById('ch1')!.style.display = 'none'
        document.getElementById('ch2')!.style.display = 'block'
    }, 2000)

    return (
        <div className='flex flex-col lg:flex-row w-full'>
            <div className='flex flex-col max-lg:flex-row justify-between align-middle items-center lg:w-72 px-5'>
                <div className='flex flex-col max-lg:flex-row max-lg:justify-between justify-center items-center'>
                    <div className="text-4xl font-bold my-10">
                        <img src="https://avatars.githubusercontent.com/u/111740948?s=200&v=4"
                            className="h-20 sm:h-16 rounded-xl" alt="Logo" />
                    </div>
                </div>
                <div className='flex flex-col max-lg:flex-row justify-center items-center align-middle'>
                    <TimeWidget yearC={year} setYearC={setYear} monthC={month} setMonthC={setMonth} />
                    <SettingsButton />
                </div>
            </div>
            <div id='ch1'>
                <AnimatedLoader />
            </div>
            <div id='ch2' className="hidden  flex-col w-full text-4xl font-bold text-center py-10 fade-in scrl">
                {sum === 0 ?
                    <div className='text-red-500'>
                        No Transactions Found
                    </div>
                    :
                    <div>
                        Total: {sum}
                    </div>
                }
                <div className="flex justify-center  w-full text-4xl font-bold text-center items-center">
                    <div className="flex flex-row flex-wrap justify-around text-lg font-bold my-5">
                        {category === '' ?
                            <CategoryFilterButton currentData={currentData} categoryC={category} setCategoryC={setCategoryC} />
                            :
                            <RemoveCategoryButton categoryC={category} setCategoryC={setCategoryC} />
                        }
                        {account === '' ?
                            <AccountFilterButton currentData={currentData} accountC={account} setAccountC={setAccountC} />
                            :
                            <RemoveAccountButton accountC={account} setAccountC={setAccountC} />
                        }
                    </div>
                </div>
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
        </div>
    )
}