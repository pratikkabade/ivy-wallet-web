import { useState } from "react"
import { DataButton } from "./data/DataButton"

export const Tutorial = () => {
    const [show, setShow] = useState(true)

    // function to copy link
    function copyLink() {
        let link = "https://raw.githubusercontent.com/dependabot-pr/ivy/sample/data.json"
        navigator.clipboard.writeText(link)

        setShow(false)
    }

    return (
        <div className="mx-auto py-10 w-2/4 justify-center" id="tutorial">

            <div className="slide-up">
                <p className="text-3xl lg:text-5xl mb-10 text-center font-bold">
                    Get started with very simple steps
                </p>

                <p className="text-xl lg:text-3xl mb-10 text-left font-semibold">
                    1. Go to <a className="text-sky-700 dark:text-sky-300 hover:brightness-150 hover:underline" href="https://www.github.com">GitHub</a>, create a new repository and upload the <code>json file</code>
                </p>

                <p className="text-xl lg:text-3xl mb-10 text-left font-semibold">
                    2. Click on raw and copy the link
                </p>

                <p className="text-xl lg:text-3xl mb-10 text-left font-semibold">
                    3. Paste the link below and click submit
                </p>

                <p className="text-xl lg:text-3xl mb-10 text-left font-semibold">
                    {show ?
                        <button
                            className="text-sky-700 dark:text-sky-300 hover:brightness-150 hover:underline mr-2"
                            onClick={copyLink}>
                            Click here
                        </button>
                        :
                        <span className="text-sky-700 dark:text-sky-300 underline mr-2">Link copied</span>
                    }
                    to copy a sample link if you're just trying out the App
                </p>

            </div>

            <div className="flex flex-row justify-around mx-auto w-2/4">

                <DataButton />

            </div>
        </div>
    )
}