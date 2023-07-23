import { useParallaxContext } from '../../../context/parallaxContext'
import Typed from 'react-typed'
import { useRef } from 'react'
import {
    calculateOpacityAndScale,
    isInScrollArea,
} from '../../../utils/scrollUtils'

const aboutMeText = `I'm a software engineer from Berlin. I'm passionate about building stuff whether it be developer tools or applications. I'm eager to learn new things and will never be afraid of exploring new technologies.`

export default function AboutMeTerminalSection() {
    const animationStarted = useRef<boolean>(false)
    const { scrollTop } = useParallaxContext()

    const fromOpacity = 0.4
    const toOpacity = 1

    const fromScale = 0.8
    const toScale = 1

    const fromScroll = window.innerHeight - window.innerHeight / 2
    const toScroll = window.innerHeight

    const { opacity, scale } = calculateOpacityAndScale(
        fromScale,
        fromOpacity,
        toScale,
        toOpacity,
        toScroll,
        fromScroll,
        scrollTop
    )

    if (
        !animationStarted.current &&
        isInScrollArea(fromScroll, toScroll, scrollTop)
    )
        animationStarted.current = true

    return (
        <section>
            <div
                style={{
                    opacity,
                    transform: `scale(${scale})`,
                }}
                className={'relative flex flex-col items-center mx-auto'}
            >
                <img
                    src={'/terminal.png'}
                    className={'cover w-[800px] mx-auto'}
                    alt={'Terminal image png'}
                />

                <p
                    className={
                        'absolute font-semibold top-[50%] h-[215px] translate-y-[-25%] sm:translate-y-[-50%] max-w-[325px] sm:max-w-[700px] text-center text-white text-lg text-left sm:text-4xl sm:leading-[55px] font-thin'
                    }
                >
                    {animationStarted.current && (
                        <Typed typeSpeed={25} strings={[aboutMeText]} />
                    )}
                </p>
            </div>
        </section>
    )
}
