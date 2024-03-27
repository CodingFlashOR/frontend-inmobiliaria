import { useRef, useEffect } from 'react'
import Profile from './Profile'
import ListItems from './ListItems'
import { PerfilIcon, FlechaIcon, CorazonIcon, CampanaIcon, RelojIcon, EngranajeIcon, AyudaIcon, AcercaDeIcon, LlaveIcon } from './Icons'

interface SideBarProps {
  setOpen: (value: boolean) => void;
  open: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ setOpen, open }) => {
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside (event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setOpen])

  return (
    <div
      ref={sidebarRef}
      className=''
      style={{ zIndex: 9999 }} // Pa que este siempre adelante
    >
      <div
        className=''
      />
      <div
        className=''
      >
        <Profile PerfilName='Nacho' open={open} />

        <div className='' />

        <ListItems icono={PerfilIcon} texto='Perfil' url='/' open={open} />
        <ListItems icono={CorazonIcon} texto='Favoritos' url='/' open={open} />
        <ListItems icono={CampanaIcon} texto='Notificaciones' url='/' open={open} />
        <ListItems icono={RelojIcon} texto='Historial' url='/' open={open} />

        <div className='' />

        <ListItems icono={EngranajeIcon} texto='Configuraciones' url='/' open={open} />
        <ListItems icono={AyudaIcon} texto='Ayuda' url='/' open={open} />
        <ListItems icono={AcercaDeIcon} texto='Acerca de' url='/' open={open} />
        <ListItems icono={LlaveIcon} texto='Cerrar Sesión' url='/' open={open} />
      </div>

      <div className=''>
        <button
          className=''
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
