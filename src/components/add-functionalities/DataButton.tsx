import { useState } from "react"
import { Button, Modal } from 'flowbite-react';
import { JSONdata } from "../../hooks/JSONdata";

export const DataButton = () => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    // function to clear local storage
    function clearStorage() {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div>
            <div className="mx-auto">
                <Button onClick={() => props.setOpenModal('default')}>
                    Add the URL <i className="fa-solid fa-plus ml-2"></i>
                </Button>
            </div>
            <Modal className="fade-in h-screen" show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header>Add the URL</Modal.Header>
                <Modal.Body className="slide-up">
                    <JSONdata />
                    <div className="flex justify-end">
                        <Button onClick={clearStorage} className="mt-5 bg-red-500 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-700"> Remove </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}