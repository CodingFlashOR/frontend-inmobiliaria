import { ReactNode } from 'react'
import Header from '../components/Header/Header'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='xl:p-20 lg:p-10'>
      <Header />
      {children}
    </div>
  )
}

export default Layout
