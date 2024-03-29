import { Modal } from "flowbite-react"
import { useEffect, useState } from "react"

export const SetPin = () => {
    const [pin, setPin] = useState(0)
    const [confirmPin, setConfirmPin] = useState(0)
    const [error, setError] = useState("")
    const [exist, setExist] = useState(false)
    const [stage1, setStage1] = useState(true)
    const [stage2, setStage2] = useState(false)

    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    // listen to escape key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setOpenModal('false');
        }
    });

    const handlePin = (e: any) => {
        setPin(e.target.value)
    }
    const handleConfirmPin = (e: any) => {
        setConfirmPin(e.target.value)
    }
    const savePin = () => {
        if (pin === confirmPin) {
            setError("Pin set successfully")
            setStage2(false)
            setExist(true)
            localStorage.setItem("pin", pin.toString())
        } else {
            setError("Pins do not match")
        }
    }

    useEffect(() => {
        if (localStorage.getItem("pin") !== null && localStorage.getItem("pin") !== '0') {
            setExist(true)
        }
    }, [])

    return (
        <div className="text-black dark:text-white">
            <p className="text-xl my-2">Security</p>
            {exist ?
                <>
                    <button
                        onClick={() => { props.setOpenModal('default') }}
                        type="button"
                        className="focus:outline-none text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-900">
                        Change Pin
                    </button>
                    <button
                        onClick={() => {
                            localStorage.setItem("pin", '0')
                            setExist(false)
                        }}
                        type="button"
                        className="focus:outline-none text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-900 ml-3">
                        Remove Pin
                    </button>
                </>
                :
                <button onClick={() => { props.setOpenModal('default') }} type="button" className="focus:outline-none text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-900">
                    Set Pin
                </button>
            }

            <Modal className="fade-in h-screen" show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header>
                    Set Pin
                </Modal.Header>
                <Modal.Body className="slide-up">
                    <div className="justify-center">

                        <div className="slide-up">

                            {stage1 &&
                                <div>
                                    <p className="text-xl lg:text-3xl mb-10 text-left font-semibold">
                                        Enter a 4-digit pin
                                    </p>

                                    <input
                                        type="password"
                                        className="border-2 border-gray-300 rounded-lg p-2"
                                        max={9999} min={0} maxLength={4} placeholder="Enter Pin"
                                        // dont allow digits above 4
                                        onInput={(e) => {
                                            if (e.currentTarget.value.length > 4) {
                                                e.currentTarget.value = e.currentTarget.value.slice(0, 4);
                                            }
                                        }}
                                        onChange={handlePin} />
                                    <button
                                        type="button" className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 fade-in2 h-fit w-fit ml-3"
                                        onClick={() => {
                                            setStage1(false)
                                            setStage2(true)
                                        }}
                                    >
                                        Submit
                                    </button>
                                </div>
                            }
                            {stage2 &&
                                <div>
                                    <p className="text-xl lg:text-3xl mb-10 text-left font-semibold">
                                        Confirm your 4-digit pin
                                    </p>

                                    <input
                                        type="password"
                                        className="border-2 border-gray-300 rounded-lg p-2"
                                        max={9999} min={0} maxLength={4} placeholder="Enter Pin"
                                        // dont allow digits above 4
                                        onInput={(e) => {
                                            if (e.currentTarget.value.length > 4) {
                                                e.currentTarget.value = e.currentTarget.value.slice(0, 4);
                                            }
                                        }}
                                        onChange={handleConfirmPin} />
                                    <button
                                        type="button" className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 fade-in2 h-fit w-fit ml-3"
                                        onClick={savePin}
                                    >
                                        Confirm
                                    </button>
                                </div>
                            }



                            <p className="text-xl lg:text-3xl my-10 text-left font-semibold">
                                {stage2 && <span className="text-rose-700 dark:text-rose-200 mt-2">{error}</span>}
                                {!stage2 && <span className="text-green-700 dark:text-green-200">{error}</span>}
                            </p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="flex justify-around items-center">

                    <button onClick={() => setOpenModal('false')} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Close
                    </button>

                </Modal.Footer>

            </Modal>


        </div>
    )
}