import { androidColorToHex } from "../utils/AndroidColorToHex";

type AccountProps = {
    accountC: string;
    setAccountC: React.Dispatch<React.SetStateAction<string>>;
    dataBase: any;
}

export const AccountFilter = (props: AccountProps) => {

    // show all accounts from local storage
    const accounts = localStorage.getItem('accountData') !== null ? JSON.parse(localStorage.getItem('accountData') || '') : []

    return (
        <div className="w-full">
            <div className='flex flex-wrap flex-row'>
                {
                    accounts.map((item: any) => (
                        <div className="p-5 lg:w-48 md:w-40 m-1 rounded-2xl hover:shadow-lg cursor-pointer hover:brightness-95 transition duration-300 ease-in-out bg-white"
                            key={item.name}
                            style={item.name === props.accountC ?
                                { backgroundColor: androidColorToHex(item.color) }
                                : { backgroundColor: androidColorToHex(item.color) }}
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