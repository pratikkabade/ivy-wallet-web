import { AnimatedLoader } from "./AnimatedLoader"

export const LoadingComponent = () => {

    // fetch url from local storage
    const url = localStorage.getItem('theURL') || ''

    // change chn id 
    function change() {
        setTimeout(() => {
            document.getElementById('chn1')!.innerHTML = 'Something went wrong..'
            document.getElementById('chn2')!.innerHTML = 'Please check the link again'
        }, 5000)
    }

    change()

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
                <div id="chn1">

                    <div className="-my-32">
                        <AnimatedLoader />
                    </div>

                </div>
                <div id="chn2"></div>
            </div>
        )
    }
}