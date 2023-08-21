import { useState } from "react"
import { Button, Modal } from 'flowbite-react';
import { AddDetails } from "../pages/AddDetails";

export const AddButton = () => {

    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    return (
        <div className="addbtn">
            <Button onClick={() => props.setOpenModal('default')}>
                Add Expense<i className="fa-solid fa-plus"></i>
            </Button>
            <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header>Add Expense</Modal.Header>
                <Modal.Body>
                    <AddDetails />
                </Modal.Body>
            </Modal>
        </div>
    )
}