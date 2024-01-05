import { Modal } from "flowbite-react"
import { useState } from "react";
import { CategoryFilter } from "../../hooks/CategoryFilter";

type categoryProp = {
    currentData: any;
    categoryC: string;
    setCategoryC: React.Dispatch<React.SetStateAction<string>>;
}

export const CategoryFilterButton = (categoryProps: categoryProp) => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    // listen to escape key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setOpenModal('false');
        }
    });

    return (
        <div>
            <div
                onClick={() => (
                    props.setOpenModal('default')
                )}>
                <p className="bg-slate-50 p-2 px-10 m-1 rounded-full hover:shadow-md cursor-pointer fade-in">
                    <i className="fa-solid fa-filter mr-2"></i>
                    Category
                </p>
            </div>

            <Modal dismissible className="fade-in h-screen" show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header className="bg-slate-100">
                    Select the Category
                </Modal.Header>
                <Modal.Body className="slide-up scrl2">
                    <div className="flex justify-between mt-5">
                        <CategoryFilter
                            dataBase={categoryProps.currentData}
                            categoryC={categoryProps.categoryC}
                            setCategoryC={categoryProps.setCategoryC} />
                    </div>
                </Modal.Body>
                <Modal.Footer className="flex justify-around items-center bg-slate-100">

                    <button onClick={() => setOpenModal('false')} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Close
                    </button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}