import { getMonth, getYear } from "../utils/DateFunctions"

const theData = localStorage.getItem('theData')

const uniqueYearsArray = []

if (theData === undefined) {
    const data = () => {
        const theData = localStorage.getItem('theData') || ''

        if (theData === undefined) {
            return { uniqueTransactions: [] }
        }

        const theDataParsed = JSON.parse(theData)

        const transactions = theDataParsed.transactions.map((item: any) => {
            const dt = item.dateTime

            if (dt === undefined) {
                item.transactionYear = "N/A"
                item.transactionMonth = "N/A"
                return item
            }

            item.transactionYear = getYear(dt)
            item.transactionMonth = getMonth(dt)

            return item
        })

        // create a new array and add unique transactionYear and transactionMonth
        const uniqueTransactions = transactions.map((item: any) => {
            return {
                transactionYear: item.transactionYear,
                transactionMonth: item.transactionMonth
            }
        })
            .filter((item: any) => item.transactionYear !== "N/A" && item.transactionMonth !== "N/A")

        return { uniqueTransactions }
    }

    const uniqueYears = data().uniqueTransactions
        .reduce((acc: any, current: any) => {
            const x = acc.find((item: any) => item.transactionYear === current.transactionYear)
            if (!x) {
                return acc.concat([current])
            } else {
                return acc
            }
        }, [])

    if (uniqueYears.length === 0) {
        uniqueYears.push({ transactionYear: "2024" })
        uniqueYears.push({ transactionYear: "2023" })
    }

    uniqueYearsArray.push(...uniqueYears)

}

export const yearOptions: Array<{ value: string }> = []

if (uniqueYearsArray.length === 0) {
    yearOptions.push({ value: '2024' })
    yearOptions.push({ value: '2023' })
}
else {
    uniqueYearsArray.forEach((item: any) => {
        yearOptions.push({ value: item.transactionYear })
    })
}

export const monthOptions = [
    { value: '01', name: 'January' },
    { value: '02', name: 'February' },
    { value: '03', name: 'March' },
    { value: '04', name: 'April' },
    { value: '05', name: 'May' },
    { value: '06', name: 'June' },
    { value: '07', name: 'July' },
    { value: '08', name: 'August' },
    { value: '09', name: 'September' },
    { value: '10', name: 'October' },
    { value: '11', name: 'November' },
    { value: '12', name: 'December' },
]