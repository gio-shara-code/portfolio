import { useParallaxContext } from '../../../context/parallaxContext'
import {
    calculateDiffDividedBy100,
    calculatePercentageOfTheCurrentScrollTopValue,
} from '../../../utils/scrollUtils'

const toScroll = 1300
const fromScroll = 1150

const fromOpacity = 0
const toOpacity = 1

const fromScale = 0.8
const toScale = 1

export default function AboutMeSection() {
    const { scrollTop } = useParallaxContext()

    let opacity = fromOpacity
    let scale = fromScale
    if (scrollTop > toScroll) {
        opacity = toOpacity
        scale = toScale
    }

    if (scrollTop >= fromScroll && scrollTop < toScroll) {
        const currentPercentage = calculatePercentageOfTheCurrentScrollTopValue(
            fromScroll,
            toScroll,
            scrollTop
        ) // 0..100%

        const p1 = calculateDiffDividedBy100(toOpacity, fromOpacity)
        const p2 = calculateDiffDividedBy100(toScale, fromScale)

        opacity = fromOpacity + p1 * currentPercentage
        scale = fromScale + p2 * currentPercentage
    }

    return (
        <div
            style={{
                opacity,
                transform: `scale(${scale})`,
            }}
            className={'max-w-[800px] space-y-5'}
        >
            <h2>Who am I?</h2>
            <h3>
                I'm a software engineer from Germany. I'm passionate about
                building stuff whether it be developer tools or applications.
                I'm eager to learn new things and will never be afraid of
                exploring new technologies.
            </h3>
        </div>
    )
}
