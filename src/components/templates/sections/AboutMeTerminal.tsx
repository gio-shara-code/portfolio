import { useParallaxContext } from '../../../context/parallaxContext'
import {
    calculatePercentageOfTheCurrentScrollTopValue,
    exceededScrollArea,
    isInScrollArea,
} from '../../../utils/scrollUtils'
import Lottie from 'lottie-react'
import scrollDownAnimationData from '../../../assets/scroll_down.json'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

const fromOpacity = 1
const toOpacity = 0

const aboutMeText = `I'm a software engineer from Berlin. I'm passionate about building stuff whether it be developer tools or applications. I'm eager to learn new things and will never be afraid of exploring new technologies.`

const aboutMeList = aboutMeText.split(' ')

export default function AboutMeTerminalSection() {
    const { scrollTop } = useParallaxContext()
    const matches = useMediaQuery('(max-width: 640px)')

    // let showWords: string[] = [...aboutMeList]
    let showWords: string[] = []

    let scale = 1
    let opacity = 1

    const fromScrollMouseLottie = matches ? 650 : 1000
    const toScrollMouseLottie = matches ? 700 : 1200

    const fromScrollWords = matches ? 650 : 950
    const toScrollWords = matches ? 1000 : 1925

    if (exceededScrollArea(toScrollWords, scrollTop))
        showWords = [...aboutMeList]

    if (isInScrollArea(fromScrollWords, toScrollWords, scrollTop)) {
        const p = calculatePercentageOfTheCurrentScrollTopValue(
            fromScrollWords,
            toScrollWords,
            scrollTop
        )
        const a = (p / 100) * aboutMeList.length
        showWords = [...aboutMeList.slice(0, a)]
    }

    if (exceededScrollArea(toScrollMouseLottie, scrollTop)) opacity = toOpacity

    if (isInScrollArea(fromScrollMouseLottie, toScrollMouseLottie, scrollTop)) {
        const p = calculatePercentageOfTheCurrentScrollTopValue(
            fromScrollMouseLottie,
            toScrollMouseLottie,
            scrollTop
        )
        opacity = fromOpacity - (p / 100) * fromOpacity
    }

    return (
        <section className={'relative mx-auto flex flex-col items-center'}>
            <img
                src={'/terminal.png'}
                className={'cover w-[800px] mx-auto'}
                alt={'Terminal image png'}
            />
            <span
                className={
                    'not-selectable absolute top-[80px] left-[20px] sm:top-[160px] sm:left-[35px] text-white max-w-[340px] sm:max-w-[400px] sm:max-w-[715px] text-xl text-left sm:text-5xl font-thin'
                }
            >
                {showWords.join(' ')}
            </span>
            {/*<div*/}
            {/*    style={{*/}
            {/*        transform: `scale(${scale}px)`,*/}
            {/*    }}*/}
            {/*    className={'relative '}*/}
            {/*>*/}
            <div></div>
            <Lottie
                autoplay={true}
                style={{
                    transform: `scale(${scale}px))`,
                    opacity,
                }}
                className={'h-[90px]'}
                animationData={scrollDownAnimationData}
            />
            {/*</div>*/}
        </section>
    )
}
