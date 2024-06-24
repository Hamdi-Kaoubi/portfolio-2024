import './App.css'

import About from "./components/About"
import Contact from './components/Contact'
import Footer from './components/Footer'
import Landing from "./components/Landing"
import Navigation from "./components/Navigation"
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

function App() {
  
  return (
    <div className='app container mx-auto'>
      <Navigation/>
      <Landing/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
