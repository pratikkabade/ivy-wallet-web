import { useState } from "react"
import { Button, Modal } from 'flowbite-react';
import { AddDetails } from "../../hooks/AddDetails";

export const SplitExpense = () => {

    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    return (
        <div className="spltbtn slide-up">
            <Button onClick={() => props.setOpenModal('default')}>
                Split<i className="fa-solid fa-plus ml-3"></i>
            </Button>
            <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header>Split Expense</Modal.Header>
                <Modal.Body>
                    <AddDetails />
                </Modal.Body>
            </Modal>
        </div>
    )
}