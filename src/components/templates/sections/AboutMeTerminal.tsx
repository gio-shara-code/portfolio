import { useParallaxContext } from '../../../context/parallaxContext'
import {
    calculatePercentageOfTheCurrentScrollTopValue,
    exceededScrollArea,
    isInScrollArea,
} from '../../../utils/scrollUtils'
import Lottie from 'lottie-react'
import scrollDownAnimationData from '../../../assets/scroll_down.json'

const fromScrollMouseLottie = 1000
const toScrollMouseLottie = 1200
const fromOpacity = 1
const toOpacity = 0

const fromScrollWords = 1000
const toScrollWords = 2000
const aboutMeText = `I'm a software engineer with a passion for programming. Right now, I'm studying and working at the Code University of Applied Sciences as a full-stack developer. I first got into coding back in high school in 2017, and I instantly fell in love with it. 
I really enjoy building web and mobile apps, and I'm into both front-end and back-end development. My big goal is to be a great CTO someday and start my own company that makes a real difference in the world.`

const aboutMeList = aboutMeText.split(' ')

export default function AboutMeTerminalSection() {
    const { scrollTop } = useParallaxContext()

    // let showWords: string[] = [...aboutMeList]
    let showWords: string[] = []

    let scale = 1
    let opacity = 1

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
                    'not-selectable absolute top-[160px] left-[35px] text-white max-w-[700px] text-left text-xl font-thin'
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
