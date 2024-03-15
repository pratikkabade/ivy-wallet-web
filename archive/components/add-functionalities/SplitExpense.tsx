import { useState } from "react"
import { Button, Modal } from 'flowbite-react';
import { SplitDetails } from "../../hooks/SplitDetails";

export const SplitExpense = () => {

    const [openSplitModal, setOpenSplitModal] = useState<string | undefined>();
    const props = { openSplitModal, setOpenSplitModal };

    return (
        <div className="spltbtn slide-up">
            <Button onClick={() => props.setOpenSplitModal('default')}>
                Split<i className="fa-solid fa-share-nodes ml-3 text-sm"></i>
            </Button>
            <Modal className="fade-in" dismissible show={props.openSplitModal === 'default'} onClose={() => props.setOpenSplitModal(undefined)}>
                <Modal.Header>Split Expense</Modal.Header>
                <Modal.Body className="fade-in2">
                    <SplitDetails />
                </Modal.Body>
            </Modal>
        </div>
    )
}