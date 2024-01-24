export const LoadingComponent = () => {

    // fetch url from local storage
    const url = localStorage.getItem('theURL') || ''

    console.log(URL)
    if (url === '') {
        return (
            <div className="container my-32 flex flex-wrap flex-col mx-auto justify-center items-center text-center text-4xl font-bold">
                    <h1>Seems like you haven't added the URL</h1>
            </div>
        )
    }
    else {
        return (
            <div className="container my-32 flex flex-wrap flex-col mx-auto justify-center items-center text-center text-4xl font-bold">
                    <h1>Something went <span className="text-red-800 dark:text-red-300">wrong</span>...</h1>
                    <h1>Please check the link again</h1>    
            </div>
        )
    }
}