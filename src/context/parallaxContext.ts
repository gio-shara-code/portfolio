import { createContext, useContext } from 'react'
import { IParallax } from '@react-spring/parallax'

interface Context {
    scrollTop: number
    parallax: React.RefObject<IParallax>
    headerTransition: boolean
    setScrollTop: React.Dispatch<React.SetStateAction<number>>
    pages: number
}

export const ParallaxContext = createContext<Context>({
    scrollTop: 0,
    parallax: { current: null },
    headerTransition: false,
    setScrollTop: () => {},
    pages: 4,
})

export const useParallaxContext = () => {
    const context = useContext(ParallaxContext)

    if (!context)
        throw new Error(
            'useParallaxContext must be used within a ParallaxProvider'
        )

    return context
}
