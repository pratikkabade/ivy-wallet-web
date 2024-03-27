import { getDate, getDay } from "../../utils/DateFunctions"
import { androidColorToHex } from "../../utils/AndroidColorToHex"

type AccountProps = {
    item: any;
    accountC: string;
    setAccountC: React.Dispatch<React.SetStateAction<string>>;
    categoryC: string;
    setCategoryC: React.Dispatch<React.SetStateAction<string>>;
}

export const TransactionItem = (props: AccountProps) => {
    const item = props.item
    return (
        <div className="flex justify-center slide-r">
            <div className="p-5 lg:w-96 md:w-72 m-5 bg-slate-100 dark:bg-slate-800 rounded-2xl hover:shadow-lg cursor-default">
                <p
                    key={item.id + 'date'}
                    className="text-start text-xl font-bold">
                    {getDate(item.dateTime)}
                </p>
                <p
                    key={item.id + 'day'}
                    className="text-start text-slate-500 dark:text-slate-300 text-sm font-medium">
                    {getDay(item.dateTime)}
                </p>

                <div className="flex flex-row flex-wrap justify-around text-lg font-bold my-5">
                    <div
                        onClick={() => {
                            props.setCategoryC(item.categoryName)
                            props.setAccountC('')
                        }}>
                        <p key={item.id + 'categoryName'}
                            className="bg-green-100 dark:bg-green-800 p-2 px-10 m-1 rounded-full hover:shadow-md cursor-pointer"
                            style={{ backgroundColor: androidColorToHex(item.categoryColor) }}>
                            {item.categoryName}
                            {item.categorySum}
                        </p>
                    </div>
                    <div
                        onClick={() => {
                            props.setAccountC(item.accountName)
                        }}>
                        <p key={item.id + 'account name'}
                            className="p-2 px-10 m-1 rounded-full hover:shadow-md cursor-pointer"
                            style={{ backgroundColor: androidColorToHex(item.accountColor) }}>
                            {item.accountName}
                        </p>
                    </div>
                </div>

                <p key={item.id + 'id'} className="text-2xl font-bold my-3">
                    {item.title}
                </p>
                <p key={item.id + 'description'} className="text-lg text-slate-500 dark:text-slate-200 my-3">
                    {item.description}
                </p>
                <p key={item.id + 'amount'}
                    className={`text-5xl font-extrabold ml-12 flex flex-wrap 
            ${item.type === "EXPENSE" ? "" : "text-green-500"}`}>
                    {item.amount}
                    <abbr
                        key={item.id + 'currency'}
                        className="font-normal ml-2">
                        {item.accountCurrency}
                    </abbr>
                </p>
            </div>
        </div>
    )
}