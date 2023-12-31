type ScrollTopProps = {
    col: string
}

export const ScrollTop = (props: ScrollTopProps) => {
    function scrollUp() {
        const scrollUp = document.getElementById('scroll-up');

        if (window.scrollY >= 200) scrollUp?.classList.add('show-scroll');
        else scrollUp?.classList.remove('show-scroll');
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    window.addEventListener('scroll', scrollUp);

    return (
        <button className={`scrollup bg-green-800 text-green-100 dark:bg-green-100  dark:text-green-800`} id="scroll-up" onClick={topFunction}>
            <i className="fa-solid fa-angle-up"></i>
        </button>
    )
}

// SAMPLE USAGE:
//                      <ScrollTop col={"green"} />