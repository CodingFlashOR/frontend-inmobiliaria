import Perfil from './Perfil'

interface SideBarProps {
  setOpen: (value: boolean) => void;
  open: boolean;
}

const FlechaIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-6 h-6'>
    <path stroke-linecap='round' stroke-linejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
  </svg>
)

const SideBar: React.FC<SideBarProps> = ({ setOpen, open }) => {
  return (
    <div
      className={`bg-white min-h-screen fixed top-0 left-0 transition-all duration-300 ${
      open ? 'sm:w-80 w-52' : 'w-0'
    }`}
    >
      <div
        className={`bg-amarillo-cream h-5 transition-all duration-300 ${
        open ? 'sm:w-80 w-52' : 'w-0'
    }`}
      />
      <div
        className='flex flex-col sm:pl-6 pl-4'
      >
        <Perfil
          PerfilName='Nacho'
          open={open}
        />

        <div className={`border-t border-gray-600 sm:w-56 w-32 h-0.5 my-4 ${
          open ? '' : 'hidden'
        }`}
        />
      </div>
      <div className={`flex justify-center items-center mt-10 ${
          open ? '' : 'hidden'
        }`}
      >
        <button
          className='hover:bg-amarillo-500 rounded-full shadow-md active:shadow-none p-2'
          onClick={() => {
            setOpen(false)
          }}
        >
          <FlechaIcon />
        </button>

      </div>
    </div>
  )
}

export default SideBar
