import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Education } from './components/education'
import { Skills } from './components/skills'
import { Projects } from './components/projects'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

function App() {
  
  return (
    <main className='main'>
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
