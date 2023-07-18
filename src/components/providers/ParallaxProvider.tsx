import { ParallaxContext } from '../../context/parallaxContext'
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import { IParallax } from '@react-spring/parallax'

export default function ParallaxProvider({
    children,
}: {
    children: ReactNode
}) {
    const [scrollTop, setScrollTop] = useState<number>(0)

    const parallaxRef = useRef<IParallax>(null)

    const headerTransition = useMemo(() => scrollTop > 300, [scrollTop])

    function scrollListener() {
        const scrollTop = parallaxRef.current?.container
            .current as HTMLDivElement

        scrollTop.onscroll = () => {
            setScrollTop(parallaxRef.current?.current as number)
        }
        return () => {
            scrollTop.onscroll = null
        }
    }

    useEffect(scrollListener, [])

    return (
        <ParallaxContext.Provider
            value={{
                scrollTop,
                parallax: parallaxRef,
                headerTransition,
                setScrollTop,
                pages: 3.05,
            }}
        >
            {children}
        </ParallaxContext.Provider>
    )
}
