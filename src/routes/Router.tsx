import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Alquilar from '../pages/Alquilar'
import DetalleAlquiler from '../pages/DetalleAlquiler'
import Usuario from '../pages/Usuario'
import PrivateRoute from './PrivateRoute'
import NotFound from '../pages/NotFound'
import Comprar from '../pages/Comprar'
import Nosotros from '../pages/Nosotros'
import Login from '../pages/Login'
import DetalleCompras from '../pages/DetalleCompras'

export default function Router () {
  return (

    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/alquiler' element={<Alquilar />} />

      <Route path='/alquiler/:id' element={<DetalleAlquiler />} />

      <Route path='/comprar' element={<Comprar />} />

      <Route path='/comprar/:id' element={<DetalleCompras />} />

      <Route path='/nosotros' element={<Nosotros />} />

      <Route path='/login' element={<Login />} />

      <Route path='/user' element={<PrivateRoute element={<Usuario />} />} />

      <Route path='*' element={<NotFound />} />

    </Routes>

  )
}
