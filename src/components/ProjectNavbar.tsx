import DarkModeButton from "../hooks/DarkModeButton"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav_Items } from "../routes/ProjectRoutes";

export const ProjectNavbar = () => {

    const [active, setActive] = useState(Nav_Items[0].name)
    const [show, setShow] = useState(false)

    function ButtonPress(arg: string) {
        setActive(arg)
    }

    // if show is true then dont scroll
    if (show) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }

    return (
        <div>
            <div className={`top-0 bg-white dark:bg-gray-800 z-50 items-center ${show ? 'bg-lime-100' : 'bg-white shadow-sm'} `}>
                <nav className={`container flex flex-row justify-between dark:bg-gray-800 mx-auto p-3 py-4 font-sans} `}>
                    <Link
                        className="text-gray-600 hover:text-blue-700 dark:text-gray-200 dark:hover:text-white"
                        onClick={() =>
                            ButtonPress(Nav_Items[0].name)}
                        to={Nav_Items[0].link}>
                        <div className="flex flex-row">
                            <img src="https://avatars.githubusercontent.com/u/111740948?s=200&v=4" className="mr-3 h-6 sm:h-9 rounded-lg" alt="Logo" />
                            <span className="self-center whitespace-nowrap text-xl font-semibold">
                                IvyWallet
                            </span>
                        </div>
                    </Link>

                    {/* MOBILE MENU BUTTON */}
                    {
                        !show &&
                        <div className="flex flex-row items-center">
                            <button className="lg:hidden" onClick={() => { setShow(!show) }}>
                                <svg className="w-6 h-6 text-gray-600 hover:text-blue-700 dark:text-gray-200 dark:hover:text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    }

                    {/* CROSS BUTTON */}
                    {
                        show &&
                        <button onClick={() => { setShow(!show) }}>
                            <svg className="w-6 h-6 text-gray-600 hover:text-blue-700 dark:text-gray-200 dark:hover:text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    }


                    {/* DESKTOP MENU */}
                    <div className={`flex-row gap-7 items-center hidden lg:flex ${show ? '' : ''}`}>
                        {
                            Nav_Items.map((item, index) => {
                                return (
                                    <Link
                                        onClick={() =>
                                            ButtonPress(item.name)}
                                        to={item.link}
                                        key={index}>
                                        <div
                                            className={`text-gray-600 hover:text-blue-700 dark:text-gray-200 dark:hover:text-white ${active === item.name ? 'text-blue-700 dark:text-blue-400 font-bold' : ''}`}
                                        >
                                            {item.name}
                                        </div>
                                    </Link>
                                )
                            })
                        }
                        <div className="self-center">
                            <DarkModeButton />
                        </div>
                    </div>
                </nav>
            </div>

            <div className={`fixed top-0 h-screen w-screen bg-lime-100 dark:bg-gray-800 items-center z-40 ${show ? 'flex' : 'hidden'}`}>
                {/* MOBILE MENU */}
                <div className="flex flex-col h-3/5 w-screen justify-start text-2xl items-center">
                    {
                        Nav_Items.map((item, index) => {
                            return (
                                <Link
                                    onClick={() => {
                                        ButtonPress(item.name);
                                        setShow(!show)
                                    }}
                                    to={item.link}
                                    key={index}>
                                    <div
                                        className={`my-4 text-gray-600 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 ${active === item.name ? 'text-blue-700 dark:text-blue-400 font-bold' : ''}`}
                                    >
                                        {item.name}
                                    </div>
                                </Link>
                            )
                        })
                    }
                    <div className="self-center my-4" onClick={() => setShow(!show)}>
                        <DarkModeButton />
                    </div>
                </div>
            </div>
        </div>
    )
}