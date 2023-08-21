import jsondata from "../data/no-data.json"
import { AddButton } from "../hooks/AddButton";

export const Dashboard = () => {

    const localValue = localStorage.getItem("thisValues")

    // convert this string to json
    const cachedJSON = JSON.parse(localValue || JSON.stringify(jsondata))

    const required_details = cachedJSON.transactions.map((item: any) => {
        // get name from accounts table based on account id in transactions table
        const account = cachedJSON.accounts.find((account: any) => account.id === item.accountId);

        // get catagory from catagory table based on account id in catagory table
        const category = cachedJSON.categories.find((category: any) => category.id === item.categoryId);

        // get currency from setting table
        const currency = cachedJSON.settings[0].currency;

        return {
            accountName: account ? account.name : 'Unknown',
            category: category ? category.name : 'Unknown',
            currency: currency,
            dateTime: item.dateTime,
            type: item.type,
            accountId: item.accountId,
            categoryId: item.categoryId,
            title: item.title,
            amount: item.amount,
            description: item.description,
            id: item.id
        };
    });

    function getDay(mon: any) {
        const str = new Date(mon).toDateString();
        return str.substring(0, str.indexOf(' '))
    }
    function getDate(mon: any) {
        const str = new Date(mon).toDateString();
        return str.substring(str.indexOf(' '), str.length - 4)
    }

    return (
        <div className="container mb-32 flex flex-wrap flex-col mx-auto justify-center items-center">
            <div className="flex flex-wrap flex-row mx-auto justify-center items-center">
                {required_details.map((item: any) => (
                    <div className="flex justify-center">
                        <div className="p-5 lg:w-96 md:w-72 m-10 bg-slate-100 dark:bg-slate-800 rounded-2xl hover:shadow-lg">
                            <p
                                className="text-xl font-bold">
                                {getDate(1691425601087)}
                                <abbr
                                    className="text-slate-500 dark:text-slate-300 text-lg font-medium">
                                    {getDay(1691425601087)}
                                </abbr>
                            </p>

                            <div className="flex flex-row justify-around text-lg font-bold my-5">
                                <p key={item.id}
                                    className="bg-green-100 dark:bg-green-800 p-2 px-10 rounded-full hover:shadow-md">
                                    {item.category}
                                </p>
                                <p key={item.id}
                                    className="bg-white p-2 dark:bg-gray-900 px-10 rounded-full hover:shadow-md">
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
                                className={`text-5xl font-extrabold font-sans ml-12 
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
                <AddButton />
            </div>
        </div>
    )
}