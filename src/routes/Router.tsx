import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ToRent from '../pages/ToRent'
import DetailRent from '../pages/DetailRent'
import User from '../pages/User'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import NotFound from '../pages/NotFound'
import Buying from '../pages/Buying'
import AboutUs from '../pages/AboutUs'
import Login from '../pages/Login'
import DetailPurchases from '../pages/DetailPurchases'
import Register from '../pages/Register'

export default function Router () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/alquiler' element={<ToRent />} />
      <Route path='/alquiler/:id' element={<DetailRent />} />
      <Route path='/comprar' element={<Buying />} />
      <Route path='/comprar/:id' element={<DetailPurchases />} />
      <Route path='/nosotros' element={<AboutUs />} />

      <Route path='/login' element={<PublicRoute element={<Login />} />} />
      <Route path='/register' element={<PublicRoute element={<Register />} />} />

      <Route path='/user' element={<PrivateRoute element={<User />} />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
