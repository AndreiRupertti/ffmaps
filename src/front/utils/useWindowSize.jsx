import { useEffect, useState } from "react"

const initialWindowSize = { width: 0, height: 0};

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(initialWindowSize);

    useEffect(() => {
        const eventHandler = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        };

        window.addEventListener('resize', eventHandler);


        return () => {
            window.removeEventListener('resize', eventHandler);
        }
    }, [])

    return windowSize;
}

export {
    useWindowSize
}