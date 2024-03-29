import { androidColorToHex } from "../utils/AndroidColorToHex";

type CategoryProps = {
    categoryC: string;
    setCategoryC: React.Dispatch<React.SetStateAction<string>>;
    dataBase: any;
}

export const CategoryFilter = (props: CategoryProps) => {

    // show all accounts from local storage
    const categories = localStorage.getItem('categoryData') !== null ? JSON.parse(localStorage.getItem('categoryData') || '') : []

    return (
        <div className="w-full">
            <div className='flex flex-wrap flex-row'>
                {
                    categories.map((item: any) => (
                        <div className="p-5 lg:w-48 md:w-40 m-1 rounded-2xl hover:shadow-lg cursor-pointer hover:brightness-95 transition duration-300 ease-in-out bg-white"
                            key={item.name}
                            style={item.name === props.categoryC ?
                                { backgroundColor: androidColorToHex(item.color) }
                                : { backgroundColor: androidColorToHex(item.color) }}
                            onClick={() => (
                                item.name === props.categoryC ? props.setCategoryC('') : props.setCategoryC(item.name)
                            )}>
                            <p
                                key={item.id + 'date'}
                                className="text-xl font-bold">
                                {item.name}
                            </p>
                            <p
                                key={item.id + 'sum'}
                                className="text-slate-500 dark:text-slate-300 text-sm font-medium">
                                {item.sum} {item.currency}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}