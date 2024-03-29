import { ReactNode, useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className=''>
      <Header
        open={open}
        setOpen={setOpen}
      />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
