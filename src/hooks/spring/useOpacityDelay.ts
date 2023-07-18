import { useSpring } from '@react-spring/web'

export const useOpacityDelay = (delay: number) => {
    return useSpring(() => ({
        delay,
        config: {
            duration: 350,
        },
        from: { opacity: 0 },
        to: { opacity: 1 },
    }))
}
