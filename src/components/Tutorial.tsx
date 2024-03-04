import { DataButton } from "./add-functionalities/DataButton"

export const Tutorial = () => {

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
            </div>

            <div className="flex flex-row justify-around mx-auto w-2/4">

                <DataButton />

            </div>
        </div>
    )
}