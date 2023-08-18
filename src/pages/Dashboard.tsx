import jsondata from "../data/data.json"

export const Dashboard = () => {

    const required_details = jsondata.transactions.map(item => {
        // get name from accounts table based on account id in transactions table
        const account = jsondata.accounts.find(account => account.id === item.accountId);

        // get catagory from catagory table based on account id in catagory table
        const category = jsondata.categories.find(category => category.id === item.categoryId);

        // get currency from setting table
        const currency = jsondata.settings[0].currency;

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
                {required_details.map(item => (
                    <div className="flex justify-center">
                        <div className="p-5 w-96 m-10 bg-slate-100 dark:bg-slate-800 rounded-2xl hover:shadow-lg">
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
            </div>
        </div>
    )
}