interface PerfilProps {
    perfilIMG?: string;
    PerfilName: string;
    open: boolean
}

export default function Perfil ({ perfilIMG = 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photo.png', PerfilName, open }: PerfilProps) {
  const maxLength = 10 // Define tu longitud máxima aquí
  const trimmedName = PerfilName.length > maxLength ? PerfilName.substring(0, maxLength) + '...' : PerfilName

  return (
    <>
      <div className={`${!open && 'hidden transition-none'} flex sm:mt-6 mt-4 gap-4`}>
        <div>
          <img className='rounded-full object-cover w-20 h-20 ' src={perfilIMG} alt='' />
        </div>
        <h3
          className='mt-8'
        >{`Hola ${trimmedName}!`}
        </h3>
      </div>
    </>
  )
}
