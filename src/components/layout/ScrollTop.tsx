export const ScrollTop = () => {
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
        <button className={`scrollup bg-sky-800 text-sky-100 dark:bg-sky-100  dark:text-sky-800`} id="scroll-up" onClick={topFunction}>
            <i className="fa-solid fa-angle-up"></i>
        </button>
    )
}

// SAMPLE USAGE:
//                      <ScrollTop col={"green"} />