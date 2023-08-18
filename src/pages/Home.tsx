import { useState } from "react"
import { Tutorial } from "./Tutorial"

export const Home = () => {
    const [visible, setVisible] = useState(false)

    function toggleDarkMode() {
        setVisible(!visible);
    }

    return (
        <div>
            <div className="w-2/3 mx-auto my-28 ">
                <p className="lg:text-7xl md:text-5xl text-3xl mb-10 text-center font-semibold font-mono">Track your expenses, fast and on-the-go! ⚡</p>
                <p className="lg:text-3xl md:text-2xl text-xl mb-10 text-center">Imagine Ivy Wallet as a manual expense tracker that will replace the good old spreadsheet for managing your personal finance.</p>
            </div>
            <div className="flex flex-row justify-around my-28">
                <a className="bg-emerald-200 hover:shadow-2xl hover:brightness-125 dark:bg-emerald-600 p-3 px-5 text-xl font-semibold rounded-full" href="/IvyWallet/Dashboard">
                    Dashboard <i className="fa-solid fa-arrow-right"></i>
                </a>
                <button className="bg-slate-200 hover:shadow-2xl hover:brightness-125 dark:bg-slate-600 p-3 px-5 text-xl font-semibold rounded-full" onClick={toggleDarkMode}>
                    Tutorial <i className="fa-solid fa-angle-down"></i>
                </button>
            </div>
            {
                visible &&
                <Tutorial />
            }
        </div>
    )
}