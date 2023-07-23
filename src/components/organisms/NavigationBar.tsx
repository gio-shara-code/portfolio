import ContactIcon from '../molecules/icons/Contact'
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
    FaYoutube,
} from 'react-icons/fa'
import { useOpacityDelay } from '../../hooks/spring/useOpacityDelay'
import { animated } from '@react-spring/web'
import { useParallaxContext } from '../../context/parallaxContext'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'
const backgroundDropFilterBlurredStyle = (
    changeNavBarBackgroundStyle: boolean
) => ({
    background: changeNavBarBackgroundStyle
        ? 'rgb(239,202,189, 0.3)'
        : 'transparent',
    backdropFilter: changeNavBarBackgroundStyle ? 'blur(8px)' : 'blur(0)',
    WebkitBackdropFilter: changeNavBarBackgroundStyle ? 'blur(8px)' : 'blur(0)',
    borderBottom: changeNavBarBackgroundStyle
        ? '0.5px solid rgb(239,202,189)'
        : '0px solid rgb(239,202,189)',
    transition: 'all 0.2s ease-in-out 0s',
})

export default function NavigationBar() {
    const { headerTransition } = useParallaxContext()
    const [navigationBarProps] = useOpacityDelay(1000)
    const matches = useMediaQuery('(max-width: 640px)')

    return (
        <animated.header
            style={{
                zIndex: 999,
                transform: 'translateX(-50%)',
                ...backgroundDropFilterBlurredStyle(headerTransition),
                ...navigationBarProps,
            }}
            className={'fixed w-full top-0 left-[50%] py-4 px-10 bg-[#FCF5F1]'}
        >
            {!matches && <NavigationBar.Desktop />}
            {matches && <NavigationBar.Mobile />}
        </animated.header>
    )
}

NavigationBar.Desktop = () => {
    return (
        <div
            className={
                'flex max-w-[1200px] items-center justify-between gap-x-5 mx-auto'
            }
        >
            <div className={'flex items-center gap-x-2'}>
                <a
                    target={'_blank'}
                    href={'https://github.com/gio-shara-code/'}
                >
                    <ContactIcon Icon={FaGithub} title={'Github'} />
                </a>
                <a
                    target={'_blank'}
                    href={
                        'https://www.linkedin.com/in/giorgi-sharashenidze-3bb9311a0/'
                    }
                >
                    <ContactIcon Icon={FaLinkedin} title={'Linkedin'} />
                </a>
                <a
                    target={'_blank'}
                    href={
                        'https://www.youtube.com/channel/UCyTmDbHBLWrjdE3WChgCpaw'
                    }
                >
                    <ContactIcon Icon={FaYoutube} title={'Youtube'} />
                </a>
            </div>
            <div className={'flex items-center gap-x-2'}>
                <a target={'_blank'} href={'https://wa.me/+4917681376567'}>
                    <ContactIcon Icon={FaWhatsapp} title={'Whatsapp'} />
                </a>
                <a href={'mailto:gio.shara12345@gmail.com'}>
                    <ContactIcon Icon={FaEnvelope} title={'Mail'} />
                </a>
            </div>
        </div>
    )
}

const NavigationBarMobileIcon = ({ Icon }: { Icon: IconType }) => {
    let style = 'text-3xl text-white font-extralight'
    let wrapperStyle = 'relative w-[40px] h-[40px] bg-[#222222] rounded-full'

    if (Icon.name === 'FaLinkedin') {
        style = twMerge(style, 'fill-[#0C66C2] text-2xl')
        wrapperStyle = twMerge(wrapperStyle, 'bg-[#0C66C2]/20')
    } else if (Icon.name === 'FaWhatsapp') {
        style = twMerge(style, 'fill-[#4BCA5B]')
        wrapperStyle = twMerge(wrapperStyle, 'bg-[#4BCA5B]/20')
    } else if (Icon.name === 'FaEnvelope') {
        style = twMerge(style, 'fill-[#D44638] text-2xl')
        wrapperStyle = twMerge(wrapperStyle, 'bg-[#D44638]/20')
    } else if (Icon.name === 'FaYoutube') {
        style = twMerge(style, 'fill-[#D44638]')
        wrapperStyle = twMerge(wrapperStyle, 'bg-[#D44638]/20')
    }
    return (
        <div className={wrapperStyle}>
            <div
                style={{
                    transform: 'translate(-50%, -50%)',
                }}
                className={'absolute top-[50%] left-[50%]'}
            >
                <Icon className={style} />
            </div>
        </div>
    )
}

NavigationBar.Mobile = () => {
    return (
        <div className={'flex items-center justify-between'}>
            <div className={'flex items-center gap-x-5'}>
                <a
                    target={'_blank'}
                    href={'https://github.com/gio-shara-code/'}
                >
                    <NavigationBarMobileIcon Icon={FaGithub} />
                </a>
                <a
                    target={'_blank'}
                    href={
                        'https://www.linkedin.com/in/giorgi-sharashenidze-3bb9311a0/'
                    }
                >
                    <NavigationBarMobileIcon Icon={FaLinkedin} />
                </a>
                <a
                    target={'_blank'}
                    href={
                        'https://www.youtube.com/channel/UCyTmDbHBLWrjdE3WChgCpaw'
                    }
                >
                    <NavigationBarMobileIcon Icon={FaYoutube} />
                </a>
            </div>
            <div className={'flex items-center gap-x-5'}>
                <a target={'_blank'} href={'https://wa.me/+4917681376567'}>
                    <NavigationBarMobileIcon Icon={FaWhatsapp} />
                </a>
                <a href={'mailto:gio.shara12345@gmail.com'}>
                    <NavigationBarMobileIcon Icon={FaEnvelope} />
                </a>
            </div>
        </div>
    )
}
