import { useState } from "react"
import { Button, Modal } from 'flowbite-react';
import { AddExpense } from "./AddExpense";
import { SplitExpense } from "./SplitExpense";

export const PlusButton = () => {
    const [show, setShow] = useState(false);

    function handleClick() {
        setShow(!show);
    }

    return (
        <div className="addbtn slide-up">
            {
                show ? (
                    <Button onClick={handleClick} className="rounded-full shadow-xl hover:shadow-2xl bg-slate-300 hover:bg-slate-500 focus:ring-slate-300">
                        <i className="fa-solid fa-x focus:ring-slate-200 ring-slate-200 focus-visible:ring-slate-200"></i>
                    </Button>
                ) : (
                    <Button onClick={handleClick} className="rounded-full shadow-xl hover:shadow-2xl">
                        <i className="fa-solid fa-plus"></i>
                    </Button>
                )
            }
            {
                show ? (
                    <div>
                        <AddExpense />
                        <SplitExpense />
                    </div>
                ) : null
            }
        </div>
    )
}