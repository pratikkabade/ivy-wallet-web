import { androidColorToHex } from "../../utils/AndroidColorToHex";

type removeCategoryProp = {
    categoryC: string;
    setCategoryC: React.Dispatch<React.SetStateAction<string>>;
}

export const RemoveCategoryButton = (props: removeCategoryProp) => {

    // fetch color from theData and set it to the backgroundColor
    const data = () => {
        const theData = localStorage.getItem('theData');
        if (theData !== null) {
            const parsedData = JSON.parse(theData);
            const category = parsedData.categories.filter((item: any) => item.name === props.categoryC);
            return category[0].color
        }


        return ''

    }

    // convert android color to hex
    const color = androidColorToHex(data())


    return (
        <p
            onClick={() => props.setCategoryC('')}
            className="p-2 px-10 m-1 rounded-full hover:shadow-md cursor-pointer fade-in"
            style={{ backgroundColor: color }}>
            {props.categoryC}
            <i className="fa-solid fa-x ml-2"></i>
        </p>
    )
}