import { Modal } from "flowbite-react";
import { useState } from "react";

export const ClearData = () => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    // listen to escape key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setOpenModal('false');
        }
    });

    // function to clear local storage
    function clearStorage() {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div>
            <p className="text-xl my-2">Remove all the Data</p>
            <button onClick={() => { props.setOpenModal('default') }} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Remove all the Data 
            </button>



            <Modal className="fade-in h-screen" show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header className="bg-slate-50">
                    Are you sure to remove all data?
                </Modal.Header>
                <Modal.Footer className="flex justify-around items-center bg-slate-50">

                    <button onClick={() => setOpenModal('false')} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        No, keep it
                    </button>

                    <button onClick={clearStorage} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        Yes, remove
                    </button>

                </Modal.Footer>

            </Modal>
        </div>
    )
}