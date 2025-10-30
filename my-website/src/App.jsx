import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import NotExistingPage from './pages/NotExistingPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/skills' element={<SkillsPage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='*' element={<NotExistingPage />} />
    </Routes>
  )
}

export default App
