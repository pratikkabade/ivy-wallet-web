import { useEffect, useState } from "react"
import { monthOptions, yearOptions } from "../constants/DateOptions"

type DateProps = {
    yearC: string;
    setYearC: React.Dispatch<React.SetStateAction<string>>;
    monthC: string;
    setMonthC: React.Dispatch<React.SetStateAction<string>>;
}

export const DateFilter = (props: DateProps) => {
    const today = new Date().toISOString()
    const todaysYr = today.slice(0, 4)
    const todaysM = today.slice(5, 7)

    const [showYr, setShowYr] = useState(true)
    const [showM, setShowM] = useState(true)

    // save function
    function saveYr(yr: any) {
        props.setYearC(yr)
    }
    function saveM(m: any) {
        props.setMonthC(m)
    }

    useEffect(() => {
        saveYr(todaysYr)
        saveM(todaysM)
    }, [])

    return (
        <div className="w-full bg-rose-100 dark:bg-rose-900 p-5 rounded-3xl my-5">
            <div className="flex flex-row justify-start items-start content-start slide-down">
                <div className="p-2 lg:w-48 md:w-72 m-1 rounded-2xl hover:shadow-lg cursor-pointer hover:brightness-95 transition duration-300 ease-in-out bg-white"
                    onClick={() => (setShowYr(!showYr))}
                    style={showYr ? { border: "2px solid #10B981" } : { border: "none" }}>
                    <p className="text-xl font-bold">
                        Year
                    </p>
                </div>
                <div className="p-2 lg:w-48 md:w-72 m-1 rounded-2xl hover:shadow-lg cursor-pointer hover:brightness-95 transition duration-300 ease-in-out bg-white"
                    onClick={() => (setShowM(!showM))}
                    style={showM ? { border: "2px solid #10B981" } : { border: "none" }}>
                    <p className="text-xl font-bold">
                        Month
                    </p>
                </div>
            </div>
            {
                showYr &&
                <div className="flex flex-row flex-wrap bg-rose-200 dark:bg-rose-700 rounded-2xl p-2 my-1">
                    {
                        yearOptions.map((item: any) => (
                            <div className="slide-down p-2 lg:w-24 md:w-36 m-1 rounded-2xl hover:shadow-lg cursor-pointer hover:brightness-95 transition duration-300 ease-in-out bg-white"
                                onClick={() => (saveYr(item.value))}
                                style={item.value === props.yearC ? { border: "2px solid #10B981" } : { border: "none" }}
                                key={item.value}>
                                <p className="text-xl font-bold">
                                    {item.value}
                                </p>
                            </div>
                        ))
                    }
                </div>
            }
            {
                showM &&
                <div className="flex flex-row flex-wrap bg-rose-200 dark:bg-rose-700 rounded-2xl p-2 my-1">
                    {
                        monthOptions.map((item: any) => (
                            <div className="slide-down p-2 lg:w-20 md:w-24 m-1 rounded-2xl hover:shadow-lg cursor-pointer hover:brightness-95 transition duration-300 ease-in-out bg-white"
                                onClick={() => (saveM(item.value))}
                                style={item.value === props.monthC ? { border: "2px solid #10B981" } : { border: "none" }}
                                key={item.value}>
                                <p className="text-xl font-bold">
                                    {item.name.slice(0, 3)}
                                </p>
                            </div>
                        ))
                    }
                </div>
            }

        </div>
    )
}