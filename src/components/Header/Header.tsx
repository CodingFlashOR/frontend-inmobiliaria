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

interface HeaderProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header ({ open, setOpen }: HeaderProps) {
  return (
    <>
      <div className=''>
        <BurgerButton setOpen={setOpen} />
        <h1 className=''>Inmobiliaria</h1>
        <button className=''>
          <LupaIcon />
        </button>
      </div>

      <div
        className=''
        style={{ zIndex: 9998 }}
      />

      <SideBar
        setOpen={setOpen}
        open={open}
      />
      <div className=''>
        <div>
          <a href='/' className=''>
            <img className='' src='https://i.ibb.co/3YpL3hD/logo-Editada.png' alt='Logo' />
            <p className='xl:text-4xl text-2xl font-serif font-bold'>Inmobiliaria</p>
          </a>
        </div>
        <nav className=''>
          <a href='/alquiler'>ALQUILAR</a>
          <a href='/comprar'>COMPRAR</a>
          <a href='/nosotros'>NOSOTROS</a>
          <a href='/login'>INICIAR SESIÓN</a>
        </nav>

      </div>
    </>
  )
}
