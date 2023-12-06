import { useEffect, useState } from "react"
import { androidColorToHex } from "../utils/AndroidColorToHex";
import { accountSum } from "../utils/SumFunction";

type AccountProps = {
    accountC: string;
    setAccountC: React.Dispatch<React.SetStateAction<string>>;
    dataBase: any;
}

export const AccountFilter = (props: AccountProps) => {
    const [data, setData] = useState<any>([])

    useEffect(() => {
        const theData = localStorage.getItem('theData') || ''
        if (theData !== '') setData(JSON.parse(theData))
    }, [])

    const currentData = props.dataBase !== undefined ? props.dataBase.filter((item: any) => item.type !== "TRANSFER") : []

    // show all accounts from local storage
    const accounts = localStorage.getItem('accountData') !== null ? JSON.parse(localStorage.getItem('accountData') || '') : []

    // find the sum of all transaction in the account
    const sum = accountSum(currentData, props.accountC)

    return (
        <div className="w-full bg-lime-100 dark:bg-lime-900 p-5 rounded-3xl my-5">
            {props.accountC === '' ? (
                <div className="text-4xl font-bold text-center my-10 fade-in2">
                    No transactions found
                </div>
            ) : (
                <div className="text-4xl font-bold text-center my-10 fade-in2">
                    Total: {sum} {currentData.accountCurrency}
                </div>
            )}
            <div className='flex flex-wrap flex-row'>
                {
                    accounts.map((item: any) => (
                        <div className="p-5 lg:w-48 md:w-72 m-1 rounded-2xl hover:shadow-lg cursor-pointer hover:brightness-95 transition duration-300 ease-in-out bg-white"
                            style={item.name === props.accountC ?
                                { boxShadow: '5px 5px ' + androidColorToHex(item.color) }
                                : { boxShadow: '1px 1px ' + androidColorToHex(item.color) }}
                            onClick={() => (
                                item.name === props.accountC ? props.setAccountC('') : props.setAccountC(item.name)
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