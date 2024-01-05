import { androidColorToHex } from "../../utils/AndroidColorToHex";

type removeAccountProp = {
    accountC: string;
    setAccountC: React.Dispatch<React.SetStateAction<string>>;
}

export const RemoveAccountButton = (props: removeAccountProp) => {

    // fetch color from theData and set it to the backgroundColor
    const data = () => {
        const theData = localStorage.getItem('theData');
        if (theData !== null) {
            const parsedData = JSON.parse(theData);
            console.log(parsedData)
            const account = parsedData.accounts.filter((item: any) => item.name === props.accountC);
            return account[0].color
        }

        return ''

    }

    // convert android color to hex
    const color = androidColorToHex(data())


    return (
        <p
            onClick={() => props.setAccountC('')}
            className="p-2 px-10 m-1 rounded-full hover:shadow-md cursor-pointer fade-in"
            style={{ backgroundColor: color }}>
            {props.accountC}
            <i className="fa-solid fa-x ml-2"></i>
        </p>
    )
}