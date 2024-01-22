import { useState } from 'react'
import BurgerButton from './BurgerButton'
import SideBar from './SideBar'

const LupaIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='white'
    className='w-6 h-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
    />
  </svg>
)

export default function Header () {
  const [open, setOpen] = useState(true)

  return (
    <>
      <div className='flex items-center justify-between bg-amarillo h-16 px-2'>
        <BurgerButton setOpen={setOpen} />
        <h1 className='flex-grow text-white text-xl ml-2'>Inmobiliaria</h1>
        <button className='flex items-center ml-2'>
          <LupaIcon />
        </button>
      </div>

      <div
        className={`bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 backdrop-blur-sm transition-all duration-300 ${
          open ? '' : 'hidden'
        }`}
      />

      <SideBar
        setOpen={setOpen}
        open={open}
      />
    </>
  )
}
