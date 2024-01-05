import { Modal } from "flowbite-react";
import { DateFilter } from "../hooks/DateFilter";
import { useState } from "react";

type dateProp = {
    yearC: string;
    setYearC: React.Dispatch<React.SetStateAction<string>>;
    monthC: string;
    setMonthC: React.Dispatch<React.SetStateAction<string>>;
}

export const TimeWidget = (dateProps: dateProp) => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    // listen to escape key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setOpenModal('false');
        }
    });

    // get the current time
    const currentTime = new Date().toLocaleTimeString();
    // convert to 11:56 AM format
    const formattedTime = currentTime.replace(/:\d+ /, ' ').slice(0, -3);
    // get weekday
    const weekday = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    // get date
    const date = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

    return (
        <>
            <div className="bg-slate-50 hover:bg-slate-50 rounded-3xl hover:shadow-md p-4 w-fit text-center cursor-pointer flex flex-col max-lg:flex-row"
                onClick={() => (
                    props.setOpenModal('default')
                )}>
                <div className="text-5xl">
                    {formattedTime}
                </div>
                <div className="max-lg:ml-3">
                    <div className="font-bold text-lg">
                        {weekday}
                    </div>
                    <div className="text-2xl">
                        {date}
                    </div>
                </div>
            </div>
            <Modal className="fade-in h-screen" show={props.openModal === 'default'} onClose={() => setOpenModal(undefined)}>
                <Modal.Header>Add the URL</Modal.Header>
                <Modal.Body className="slide-up">
                    <div className="flex justify-between mt-5">
                        <DateFilter yearC={dateProps.yearC} setYearC={dateProps.setYearC}
                            monthC={dateProps.monthC} setMonthC={dateProps.setMonthC} />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}