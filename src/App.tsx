import './styles/App.css'
import NavigationBar from './components/organisms/NavigationBar'
import ParallaxReactSpring from './components/pages/ParallaxReactSpring'

// testing the vercel ci/cd tool

export default function App() {
    return (
        <main>
            <NavigationBar />
            <ParallaxReactSpring />
        </main>
    )
}
