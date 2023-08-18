import { useState, useEffect } from "react";

export const Tutorial = () => {
    const [jsondata, setData] = useState([])

    // const fetchData = async () => {
    //     const response = await fetch("https://cdn.statically.io/gh/pratikkabade/bin/main/data3273282587888741541.json");
    //     const values = await response.json();
    //     setData(values)
    // }
    // fetchData();

    var xhr = new XMLHttpRequest();
    var method = "GET";
    var URL = "https://cdn.statically.io/gh/pratikkabade/bin/main/data3273282587888741541.json";

    xhr.open(method, URL, true);

    xhr.send();

    xhr.onload = function () {
        if (xhr.status == 200) {
            const data = JSON.parse(xhr.response);
            setData(data)
        }
    };

    // create a new array and push all data from jsondata
    const required_details: any = [];
    jsondata.forEach((item: any) => {
        required_details.push({
            id: item.id,
            title: item.title,
            description: item.description,
            amount: item.amount,
            currency: item.currency,
            category: item.category,
            accountName: item.accountName,
            type: item.type,
            date: item.date,
        })
    })






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