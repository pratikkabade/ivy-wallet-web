import DarkModeButton from "../layout/DarkModeButton"

export const DarkModeSetting = () => {

    return (
        <div>
            <p className="text-xl my-2">Dark Mode</p>
            <div className="flex flex-row justify-between align-middle items-center">
                <p>
                    Toggle dark mode
                </p>
                <DarkModeButton />
            </div>
        </div>
    )
}