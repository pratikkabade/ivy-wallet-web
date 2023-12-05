export const categorySum = (data: any, category: string) => {
    return data
        .filter((item: any) => item.categoryName === category)
        .map((item: any) => item.type === "INCOME" ? item.amount : item.type === "EXPENSE" ? -item.amount : 0)
        .reduce((acc: any, item: any) => acc + item, 0)
}

export const accountSum = (data: any, account: string) => {
    return data
        .filter((item: any) => item.accountName === account)
        .map((item: any) => item.type === "INCOME" ? item.amount : item.type === "EXPENSE" ? -item.amount : 0)
        .reduce((acc: any, item: any) => acc + item, 0)
}

export const totalSum = (data: any, account: string, category: string) => {
    // if account and category are empty, return the sum of all transactions
    if (account === '' && category === '') {
        return data
            .map((item: any) => item.type === "INCOME" ? item.amount : item.type === "EXPENSE" ? -item.amount : 0)
            .reduce((acc: any, item: any) => acc + item, 0)
    }

    // if account is empty, return the sum of all transactions in the category
    if (account === '' && category !== '') {
        return categorySum(data, category)
    }

    // if category is empty, return the sum of all transactions in the account
    if (account !== '' && category === '') {
        return accountSum(data, account)
    }

    // if account and category are not empty, return the sum of all transactions in the account and category
    return data
        .filter((item: any) => item.accountName === account && item.categoryName === category)
        .map((item: any) => item.type === "INCOME" ? item.amount : item.type === "EXPENSE" ? -item.amount : 0)
        .reduce((acc: any, item: any) => acc + item, 0)
}
