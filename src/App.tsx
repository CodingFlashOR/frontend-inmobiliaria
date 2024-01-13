import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Alquilar from './pages/Alquilar.tsx'

function App() {

  return (
    <> 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/alquilar" element={<Alquilar/>}/>
    </Routes>
    </>
  )
}

export default App
