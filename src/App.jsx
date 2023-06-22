import './App.css'
import {useRef} from 'react'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import first from './assets/Background_images/first2.jpg'
import Hero from './Components/Hero'
import NavBar from './Components/Navbar'
import Tech from './Components/Tech'
import ProjectCarousel from './Components/Projects'
import Timeline from './Components/Timeline'
import ContactForm from './Components/Contact'

function App() {
  const ref = useRef();
  const navTo = (id) => {
    ref.current.scrollTo(id)
  }
  return (
    <div>
      <Parallax pages={3.5} style={{ top: '0', left: '0' }} ref={ref}>
        <ParallaxLayer offset={0} factor={3.5} style={{backgroundImage:`url(${first})`, backgroundSize:'cover'}}>
          <Hero/>
          <ParallaxLayer offset={0} sticky={{start:0, end:4}} style={{zIndex:10}}>
            <NavBar navTo={navTo}/>
          </ParallaxLayer>
          <ParallaxLayer speed={1} offset={1} factor={1.5}>
            <Tech />
            <ProjectCarousel />
          </ParallaxLayer>
          <ParallaxLayer speed={1} offset={1.9} factor={2}>
            <Timeline />

          </ParallaxLayer>
            <ParallaxLayer speed={1} offset={1.8} factor={0.5} sticky={{start:2.5, end:2.5}}>
          <ContactForm />

          </ParallaxLayer>
        </ParallaxLayer >

      </Parallax> 

    </div>
  )
}

export default App
