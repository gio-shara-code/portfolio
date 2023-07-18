import { useEffect, useRef, useLayoutEffect } from 'react'

const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect

export function useInterval(callback: () => void, delay: number | null) {
    const savedCallback = useRef(callback)
    const internalId = useRef<number | null>(null)

    // Remember the latest callback if it changes.
    useIsomorphicLayoutEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
        if (delay && delay !== 0) {
            if (internalId.current) clearInterval(internalId.current)
            internalId.current = setInterval(
                () => savedCallback.current(),
                delay
            )
        }

        return () => {
            if (internalId.current) clearInterval(internalId.current)
        }
    }, [delay])
}
