import { useState, useEffect } from "react"

type ProgressBarProps = {
    bg: string,
    h: string
}

export const ProgressBar = (props: ProgressBarProps) => {

    const [scrollProgress, setScrollProgress] = useState(0)
    const handleScroll = () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight
        const scrollProgress = (window.pageYOffset / totalHeight) * 100
        const roundedProgress = Math.round(scrollProgress)
        setScrollProgress(roundedProgress)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <div className={`top-0 z-20 fixed ${props.bg} ${props.h}`} style={{ width: scrollProgress + "%" }}></div>
    )
}


// SAMPLE USAGE:
//                      <ProgressBar bg={"bg-emerald-400"} h={"h-6"} />