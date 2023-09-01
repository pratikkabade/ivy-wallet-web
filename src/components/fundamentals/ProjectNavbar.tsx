import DarkModeButton from "../../hooks/DarkModeButton"
import { Link } from 'react-router-dom';
import { Route_Items } from "../../routes/ProjectRoutes";

export const ProjectNavbar = () => {
    return (
        <div>
            <div className={`top-0 bg-white dark:bg-gray-800 z-50 items-center shadow-sm`}>
                <nav className={`container flex flex-row justify-between dark:bg-gray-800 mx-auto p-3 py-4 font-sans} `}>
                    <Link
                        className="text-gray-600 hover:text-blue-700 dark:text-gray-200 dark:hover:text-white"
                        to={Route_Items[0].link}>
                        <div className="flex flex-row">
                            <img src="https://avatars.githubusercontent.com/u/111740948?s=200&v=4" className="mr-3 h-6 sm:h-9 rounded-lg" alt="Logo" />
                            <span className="self-center whitespace-nowrap text-xl font-semibold">
                                IvyWallet
                            </span>
                        </div>
                    </Link>

                    <div className="self-center">
                        <DarkModeButton />
                    </div>
                </nav>
            </div>
        </div>
    )
}