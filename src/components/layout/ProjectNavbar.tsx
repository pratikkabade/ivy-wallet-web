import { Link } from 'react-router-dom';
import { Route_Items } from "../../routes/Routes";

export const ProjectNavbar = () => {
    return (
        <div>
            <div className='top-0 bg-white dark:bg-gray-800 z-50 items-center shadow-sm'>
                <nav className='container flex flex-row justify-between dark:bg-gray-800 mx-auto p-3 py-4 font-sans'>
                    <Link
                        className="hover:brightness-125 hover:scale-105 transition duration-150 ease-in-out"
                        to={Route_Items[0].link}>
                        <div className="flex flex-row">
                            <img src="https://avatars.githubusercontent.com/u/111740948?s=200&v=4" className="mr-3 h-9 sm:h-12 rounded-xl" alt="Logo" />
                        </div>
                    </Link>
                </nav>
            </div>
        </div>
    )
}