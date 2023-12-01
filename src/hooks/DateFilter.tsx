import { useEffect, useState } from "react"
import { monthOptions, yearOptions } from "../data/DateOptions"

type ReasonsProp = {
    yearC: string;
    setYearC: React.Dispatch<React.SetStateAction<string>>;
    monthC: string;
    setMonthC: React.Dispatch<React.SetStateAction<string>>;
}

export const DateFilter = (props: ReasonsProp) => {
    const today = new Date().toISOString()
    const todaysYr = today.slice(0,4)
    const todaysM = today.slice(5,7)

    const [showYr, setShowYr] = useState(false)
    const [showM, setShowM] = useState(false)

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
        <div className="w-full">
            <div className="flex flex-row justify-start items-start content-start slide-down">
                <div className="p-5 lg:w-48 md:w-72 m-1 bg-slate-100 dark:bg-slate-800 rounded-2xl hover:shadow-lg cursor-pointer hover:brightness-110 transition duration-300 ease-in-out"
                    onClick={() => (setShowYr(!showYr))}
                    style={showYr ? { border: "2px solid #10B981" } : { border: "none" }}>
                    <p className="text-xl font-bold">
                        Year
                    </p>
                </div>
                <div className="p-5 lg:w-48 md:w-72 m-1 bg-slate-100 dark:bg-slate-800 rounded-2xl hover:shadow-lg cursor-pointer hover:brightness-110 transition duration-300 ease-in-out"
                    onClick={() => (setShowM(!showM))}
                    style={showM ? { border: "2px solid #10B981" } : { border: "none" }}>
                    <p className="text-xl font-bold">
                        Month
                    </p>
                </div>
            </div>
            <div className="flex flex-row flex-wrap">
                {
                    showYr &&
                    yearOptions.map((item: any) => (
                        <div className="slide-down p-5 lg:w-24 md:w-36 m-1 bg-slate-100 dark:bg-slate-800 rounded-2xl hover:shadow-lg cursor-pointer hover:brightness-110 transition duration-300 ease-in-out"
                            onClick={() => (saveYr(item.value))}
                            style={item.value === props.yearC ? { border: "2px solid #10B981" } : { border: "none" }}>
                            <p className="text-xl font-bold">
                                {item.value}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-row flex-wrap">
                {
                    showM &&
                    monthOptions.map((item: any) => (
                        <div className="slide-down p-5 lg:w-20 md:w-24 m-1 bg-slate-100 dark:bg-slate-800 rounded-2xl hover:shadow-lg cursor-pointer hover:brightness-110 transition duration-300 ease-in-out"
                            onClick={() => (saveM(item.value))}
                            style={item.value === props.monthC ? { border: "2px solid #10B981" } : { border: "none" }}>
                            <p className="text-xl font-bold">
                                {item.name.slice(0, 3)}
                            </p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}