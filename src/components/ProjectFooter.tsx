import { FacebookLogo } from "../assets/logo/Facebook"
import { GithubLogo } from "../assets/logo/Github"
import { InstagramLogo } from "../assets/logo/Instagram"
import { LinkedinLogo } from "../assets/logo/Linkedin"
import { TwitterLogo } from "../assets/logo/Twitter"

export const ProjectFooter = () => {
    return (
        <footer className="text-center bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
            <div className="container px-6 pt-6 mx-auto">
                <div className="flex justify-center mb-6">
                    <a href="#!" type="button" className="rounded-full text-gray-600 dark:text-gray-200 leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <FacebookLogo />
                    </a>
                    <a href="#!" type="button" className="rounded-full text-gray-600 dark:text-gray-200 leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <TwitterLogo />
                    </a>
                    <a href="#!" type="button" className="rounded-full text-gray-600 dark:text-gray-200 leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <LinkedinLogo />
                    </a>
                    <a href="#!" type="button" className="rounded-full text-gray-600 dark:text-gray-200 leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <InstagramLogo />
                    </a>
                    <a href="#!" type="button" className="rounded-full text-gray-600 dark:text-gray-200 leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <GithubLogo />
                    </a>
                </div>
                <div>
                </div>
                <div className="mb-20">
                    <p className="font-bold text-xl">
                        IvyWallet
                    </p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2">
                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5">Links</h5>
                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="text-gray-600 dark:text-gray-300">Link 1</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5">Links</h5>
                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="text-gray-600 dark:text-gray-300">Link 1</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5">Links</h5>
                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="text-gray-600 dark:text-gray-300">Link 1</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5">Links</h5>
                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="text-gray-600 dark:text-gray-300">Link 1</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center p-4" >
                © 2023 IvyWallet
            </div>
        </footer>
    )
}