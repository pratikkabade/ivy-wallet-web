import { useState } from "react"
import { Button, Modal } from 'flowbite-react';
import { JSONdata } from "../hooks/JSONdata";

export const DataButton = () => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    return (
        <div>
            <div className="mx-auto">
                <Button onClick={() => props.setOpenModal('default')}>
                    Add Data <i className="fa-solid fa-plus"></i>
                </Button>
            </div>
            <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header>Add Data</Modal.Header>
                <Modal.Body>
                    <JSONdata />
                </Modal.Body>
            </Modal>
        </div>
    )
}