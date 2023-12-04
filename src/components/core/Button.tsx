type buttonProp = {
    title: string;
    iClass: string;
}

export const Button = (props: buttonProp) => {
    return (
        <div className="lg:w-72 md:w-64 w-48 p-5 m-1 rounded-2xl hover:shadow-sm cursor-pointer hover:brightness-95 transition duration-300 ease-in-out hover:shadow-md bg-slate-50">
            <p className="text-xl font-bold">
                <i className={props.iClass}></i>
                {props.title}
            </p>
        </div>
    )
}   