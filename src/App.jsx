
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import './App.module.css'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
