import { useState } from "react";
import { Modal } from "flowbite-react";
import { JSONdata } from "../../services/JSONdata";
import { ClearData } from "../data/ClearData";
import DarkModeButton from "../layout/DarkModeButton";

export const SettingsButton = () => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    // listen to escape key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setOpenModal('false');
        }
    });

    return (
        <>
            <div className="flex flex-row align-middle justify-center items-center lg:w-48 max-lg:w-fit max-lg:h-fit p-5 m-1 rounded-2xl hover:shadow-sm cursor-pointer transition duration-300 ease-in-out bg-slate-50 dark:bg-slate-700 hover:brightness-95 dark:hover:brightness-125 text-xl font-bold"
                onClick={() => (
                    props.setOpenModal('default')
                )}>
                <i className='fas fa-cog mr-2 max-lg:mr-0'></i>
                <div className="max-lg:hidden">
                    Settings
                </div>
            </div>

            <Modal className="fade-in h-screen" show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header>
                    Settings
                </Modal.Header>
                <Modal.Body className="slide-up scrl2">
                    <div className="flex flex-col mt-5">
                        <div className="bg-sky-100 dark:bg-sky-800 m-1 p-3 rounded-xl cursor-pointer hover:brightness-95">
                            <DarkModeButton />
                        </div>
                        <div className="bg-sky-100 dark:bg-sky-800 m-1 p-3 rounded-xl">
                            <JSONdata />
                        </div>
                        <div className="bg-sky-100 dark:bg-sky-800 m-1 p-3 rounded-xl">
                            <ClearData />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="flex justify-around items-center">

                    <button onClick={() => setOpenModal('false')} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Close
                    </button>

                </Modal.Footer>
            </Modal>
        </>
    )
}