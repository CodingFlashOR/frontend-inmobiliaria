import Perfil from './Perfil'
import ListItems from './ListItems'

import { PerfilIcon, FlechaIcon, CorazonIcon, CampanaIcon, RelojIcon, EngranajeIcon, AyudaIcon, AcercaDeIcon, LlaveIcon } from './icons'

interface SideBarProps {
  setOpen: (value: boolean) => void;
  open: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ setOpen, open }) => {
  return (
    <div
      className={`bg-white min-h-screen fixed top-0 left-0 transition-all duration-300  ${
      open ? 'sm:w-80 w-52' : 'w-0'
    }`}
    >
      <div
        className={`bg-amarillo-cream h-5 transition-all duration-300 ${
        open ? 'sm:w-80 w-52' : 'w-0'
      }`}
      />
      <div
        className={`flex flex-col sm:pl-6 pl-4 gap-5 ${open ? 'opacity-100 visible delay-150' : 'opacity-0 invisible delay-0'}`}
      >
        <Perfil
          PerfilName='Nacho'
          open={open}
        />

        <div className={`border-t border-gray-600 sm:w-56 w-32 h-0.5 my-4 ${open ? 'opacity-100 visible delay-150' : 'opacity-0 invisible delay-0'}`} />

        <ListItems
          icono={PerfilIcon}
          texto='Perfil'
          url='/'
          open={open}
        />

        <ListItems
          icono={CorazonIcon}
          texto='Favoritos'
          url='/'
          open={open}
        />

        <ListItems
          icono={CampanaIcon}
          texto='Notificaciones'
          url='/'
          open={open}
        />

        <ListItems
          icono={RelojIcon}
          texto='Historial'
          url='/'
          open={open}
        />

        <div className={`border-t border-gray-600 sm:w-56 w-32 h-0.5 my-4 ${open ? 'opacity-100 visible delay-150' : 'opacity-0 invisible delay-0'}`} />

        <ListItems
          icono={EngranajeIcon}
          texto='Configuraciones'
          url='/'
          open={open}
        />

        <ListItems
          icono={AyudaIcon}
          texto='Ayuda'
          url='/'
          open={open}
        />

        <ListItems
          icono={AcercaDeIcon}
          texto='Acerca de'
          url='/'
          open={open}
        />

        <ListItems
          icono={LlaveIcon}
          texto='Cerrar Sesión'
          url='/'
          open={open}
        />
      </div>

      <div className={`flex justify-center items-center mt-10 ${open ? 'opacity-100 visible delay-150' : 'opacity-0 invisible delay-0'}`}>

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
