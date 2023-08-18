export const Home = () => {
    return (
        <div>
            <div className="w-2/3 mx-auto my-28 ">
                <p className="text-7xl mb-10 text-center font-semibold font-mono">Track your expenses, fast and on-the-go! ⚡</p>
                <p className="text-2xl mb-10 text-center">Imagine Ivy Wallet as a manual expense tracker that will replace the good old spreadsheet for managing your personal finance.</p>
            </div>
            <div className="flex flex-row justify-center my-28">
                <a className="mx-20 bg-emerald-200 hover:shadow-2xl hover:brightness-125 dark:bg-emerald-600 p-3 px-5 text-xl font-semibold rounded-full" href="/IvyWallet/Dashboard">Dashboard</a>
                <a className="mx-20 bg-slate-200 hover:shadow-2xl hover:brightness-125 dark:bg-slate-600 p-3 px-5 text-xl font-semibold rounded-full" href="/IvyWallet/Tutorial">Tutorial</a>
            </div>
        </div>
    )
}