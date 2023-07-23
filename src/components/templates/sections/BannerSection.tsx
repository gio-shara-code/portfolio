import { animated, useSpring } from '@react-spring/web'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import helloLottie from '../../../assets/hello_lottie.json'
import IconBouncingButton from '../../molecules/buttons/IconBouncing'

import { useParallaxContext } from '../../../context/parallaxContext'
import { useRef } from 'react'
import { calculateOpacityAndScale } from '../../../utils/scrollUtils'

const fromTransform = { transform: 'translateY(50px)' }
const toTransform = { transform: 'translateY(0)' }

export default function BannerSection() {
    const handWaveLottieRef = useRef<LottieRefCurrentProps>(null)

    const { setScrollTop, parallax, scrollTop } = useParallaxContext()
    const [helloPropsTransform] = useSpring(() => ({
        delay: 800,
        config: {
            mass: 1,
            tension: 200,
            friction: 15,
        },
        from: fromTransform,
        to: toTransform,
    }))

    const [helloPropsOpacity] = useSpring(() => ({
        delay: 600,
        from: { opacity: 0 },
        to: { opacity: 1 },
        onRest: () => {
            handWaveLottieRef.current?.play()
        },
    }))

    const [handWaveLottieOpacityProps] = useSpring(() => ({
        delay: 200,
        from: { opacity: 0 },
        to: { opacity: 1 },
    }))

    const [handWaveLottieProps] = useSpring(() => ({
        delay: 400,
        config: {
            mass: 1,
            tension: 200,
            friction: 15,
        },
        from: fromTransform,
        to: toTransform,
    }))

    const handWaveStyle = {
        ...handWaveLottieOpacityProps,
        ...handWaveLottieProps,
    }

    const helloStyle = { ...helloPropsOpacity, ...helloPropsTransform }

    const fromOpacity = 1
    const toOpacity = 0

    const fromScale = 1
    const toScale = 0.7

    const fromScroll = 0
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

    return (
        <section
            style={{
                opacity,
                transform: `scale(${scale})`,
            }}
            className={
                'flex flex-col justify-start items-center gap-y-32 pt-44'
            }
        >
            <div className={'not-selectable space-y-20'}>
                <h1 className={'text-center'}>
                    <animated.span
                        style={helloStyle}
                        className={'inline-block'}
                    >
                        Hello
                    </animated.span>
                    <animated.span
                        style={handWaveStyle}
                        className={
                            'ml-1 sm:ml-5 relative align-middle inline-block w-[90px] h-[90px] sm:w-[120px] sm:h-[120px]'
                        }
                    >
                        <Lottie
                            lottieRef={handWaveLottieRef}
                            autoplay={false}
                            style={{
                                transform: 'translate(-50%, -50%)',
                            }}
                            className={'relative w-[150%] left-[50%] top-[30%]'}
                            animationData={helloLottie}
                        />
                    </animated.span>
                    <animated.span style={helloStyle} className={'block'}>
                        I'm Gio
                    </animated.span>
                </h1>
                <animated.p style={helloStyle}>
                    Your favorite developer
                </animated.p>
            </div>
            <div>
                <IconBouncingButton.ArrowDown
                    onClick={() => {
                        const scrollTo = 1
                        parallax.current?.scrollTo(scrollTo)
                        // const id = setTimeout(() => {
                        //     clearInterval(id)
                        // }, 500)
                        setScrollTop(window.innerHeight * scrollTo)
                    }}
                />
            </div>
        </section>
    )
}
