// import { useState } from 'react';
import './App.css'
import { Suggestions } from './components/pages/Suggestions.jsx'
// import SingleProjectPage from './components/pages/SingleProjectPage'
// import DashboardPrograms from './components/pages/DashboardPrograms'
// import DashboardProjects from './components/pages/DashboardProjects'


function App() {

  // const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Suggestions/>
      {/* <DashboardPrograms /> */}  
      {/* <DashboardProjects /> */}
      {/* <SingleProjectPage /> */}

      {/* A implémenter */}

      {/* <button onClick={() => setCurrentPage('home')}>Home</button>
      <button onClick={() => setCurrentPage('about')}>About</button>
      <button onClick={() => setCurrentPage('contact')}>Contact</button>

      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}   */}
    </>
  )
}

export default App
