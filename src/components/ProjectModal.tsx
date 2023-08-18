import React from "react";

type ModalProps = {
    buttonName: string;
    modalHeader: string;
    modalBody: string;
    modalFooterButton1: string;
    modalFooterButton2: string;
}

export default function ProjectModal(props: ModalProps) {

    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <button className="block transition-all duration-150 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setShowModal(true)}>
                {props.buttonName}
            </button>

            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="fixed z-0 w-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-screen flex flex-row justify-center items-center">
                            <div className="relative w-full h-full max-w-2xl md:h-auto">

                                {/* Modal content */}
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                    {/* Modal header */}
                                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {props.modalHeader}
                                        </h3>
                                        <button className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setShowModal(false)}>
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>

                                    {/* Modal body */}
                                    <div className="p-6 space-y-6">
                                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                            {props.modalBody}
                                        </p>
                                    </div>

                                    {/* Modal footer */}
                                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                        <button onClick={() => setShowModal(false)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            {props.modalFooterButton1}
                                        </button>

                                        <button onClick={() => setShowModal(false)} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                            {props.modalFooterButton2}
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(false)}></div>
                </>
            ) : null}
        </>
    );
}

// SAMPLE USAGE:
//                      <Modal buttonName={"open modal"} modalHeader={"Terms and Conditions"} modalBody={"These are the terms and conditions of this modal"} modalFooterButton1={"I accept"} modalFooterButton2={"Decline"} />