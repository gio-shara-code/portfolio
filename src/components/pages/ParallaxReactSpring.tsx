import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import BannerSection from '../templates/sections/BannerSection'
import AboutMeTerminalSection from '../templates/sections/AboutMeTerminal'
import { useParallaxContext } from '../../context/parallaxContext'

export default function ParallaxReactSpring() {
    const { parallax, pages } = useParallaxContext()

    return (
        <Parallax
            ref={parallax}
            pages={pages}
            className={'bg-[#EFCBBD]/20 top-0 left-0'}
        >
            <ParallaxLayer
                sticky={{
                    start: 0,
                    end: 0.5,
                }}
            >
                <BannerSection />
            </ParallaxLayer>

            {/*<ParallaxLayer*/}
            {/*  offset={1}*/}
            {/*  sticky={{*/}
            {/*    start: 1,*/}
            {/*    end: 1,*/}
            {/*  }}*/}
            {/*  className={"flex justify-center z-50"}*/}
            {/*  // NOTE add color to debug*/}
            {/*  // className={"flex justify-center bg-green-200/20 z-50"}*/}
            {/*>*/}
            {/*  <div*/}
            {/*    className={*/}
            {/*      "w-[450px] h-[558px] rounded-2xl p-5 bg-[#222222] overflow-hidden bg-center bg-gio-smile-large bg-no-repeat bg-cover bg-center"*/}
            {/*    }*/}
            {/*  />*/}
            {/*</ParallaxLayer>*/}

            <ParallaxLayer
                offset={2}
                sticky={{
                    start: 1,
                    end: 2.3,
                }}
                // NOTE add color to debug
                className={'flex items-center justify-center'}
                // className={"flex items-center justify-center bg-red-200/20"}
            >
                <AboutMeTerminalSection />
            </ParallaxLayer>
        </Parallax>
    )
}
