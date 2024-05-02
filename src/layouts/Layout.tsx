import { ReactNode, useState } from 'react'

import './layout.css'

import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='layout'>
      <Header
        open={open}
        setOpen={setOpen}
      />
      {children}
      <NavBar />
    </div>
  )
}

export default Layout
