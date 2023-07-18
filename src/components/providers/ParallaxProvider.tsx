import { ParallaxContext } from '../../context/parallaxContext'
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import { IParallax } from '@react-spring/parallax'

export default function ParallaxProvider({
    children,
}: {
    children: ReactNode
}) {
    const parallax = useRef<IParallax>(null)
    const [scrollTop, setScrollTop] = useState<number>(0)

    const scrollListener = () => {
        const onScroll = () => {
            const { current } = parallax.current as IParallax

            setScrollTop(current)
        }
        window.addEventListener('wheel', onScroll)
        return () => {
            window.removeEventListener('wheel', onScroll)
        }
    }

    const headerTransition = useMemo(() => scrollTop > 300, [scrollTop])

    useEffect(scrollListener, [])

    return (
        <ParallaxContext.Provider
            value={{
                scrollTop,
                parallax,
                headerTransition,
                setScrollTop,
                pages: 3.05,
            }}
        >
            {children}
        </ParallaxContext.Provider>
    )
}
