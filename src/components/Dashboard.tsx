import jsondata from "../data/no-data.json"
import { getDate, getDay } from "../hooks/Functions";
import { PlusButton } from "./add-functionalities/PlusButton";
// import { useState, useEffect } from "react";

export const Dashboard = () => {

    // ------------------------------------ 1st method ------------------------------------
    // get data from local storage
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

    console.log(required_details);




    // // ------------------------------------ 2nd method ------------------------------------
    // const [data, setData] = useState<any>([])
    // // const url = "https://raw.githubusercontent.com/pratikkabade/Ivy-Wallet-Data/main/Ivy-Wallet-backup.json?token=GHSAT0AAAAAACFISP4UWWDVTE5G3HXBP5K4ZHR6LVA"

    // const url2 = "https://raw.githubusercontent.com/dependabot-pr/ivy/main/data.json"
    // // fetch data from this link
    // useEffect(() => {
    //     fetch(url2)
    //         .then((response) => response.json())
    //         .then((data) => setData(data))
    // }, [])

    // console.log(data)

    // const required_details2 = data.transactions.map((item: any) => {
    //     // get name from accounts table based on account id in transactions table
    //     const account = data.accounts.find((account: any) => account.id === item.accountId);

    //     // get catagory from catagory table based on account id in catagory table
    //     const category = data.categories.find((category: any) => category.id === item.categoryId);

    //     // get currency from setting table
    //     const currency = data.settings[0].currency;

    //     return {
    //         accountName: account ? account.name : 'Unknown',
    //         category: category ? category.name : 'Unknown',
    //         currency: currency,
    //         dateTime: item.dateTime,
    //         type: item.type,
    //         accountId: item.accountId,
    //         categoryId: item.categoryId,
    //         title: item.title,
    //         amount: item.amount,
    //         description: item.description,
    //         id: item.id
    //     };
    // });

    // console.log(required_details2);




    return (
        <div className="container mb-32 flex flex-wrap flex-col mx-auto justify-center items-center">
            <div className="flex flex-wrap flex-row mx-auto justify-center items-center">
                {required_details.map((item: any) => (
                    <div className="flex justify-center slide-r">
                        <div className="p-5 lg:w-96 md:w-72 m-10 bg-slate-100 dark:bg-slate-800 rounded-2xl hover:shadow-lg cursor-default">
                            <p
                                className="text-xl font-bold">
                                {getDate(1691425601087)}
                                <abbr
                                    className="text-slate-500 dark:text-slate-300 text-lg font-medium">
                                    {getDay(1691425601087)}
                                </abbr>
                            </p>

                            <div className="flex flex-row flex-wrap justify-around text-lg font-bold my-5">
                                <p key={item.id}
                                    className="bg-green-100 dark:bg-green-800 p-2 px-10 m-1 rounded-full hover:shadow-md cursor-pointer">
                                    {item.category}
                                </p>
                                <p key={item.id}
                                    className="bg-white p-2 dark:bg-gray-900 px-10 m-1 rounded-full hover:shadow-md cursor-pointer">
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
                                className={`text-5xl font-extrabold ml-12 flex flex-wrap 
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
                <PlusButton />
            </div>
        </div>
    )
}