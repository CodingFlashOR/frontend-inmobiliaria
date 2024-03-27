interface PerfilProps {
  perfilIMG?: string;
  PerfilName: string;
  open: boolean;
}

export default function Profile ({ perfilIMG = 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photo.png', PerfilName, open }: PerfilProps) {
  const maxLength = 10 // Define tu longitud máxima aquí
  const trimmedName = PerfilName.length > maxLength ? PerfilName.substring(0, maxLength) + '...' : PerfilName

  return (
    <>
      <div className=''>
        <div>
          <img className='' src={perfilIMG} alt='' />
        </div>
        <h3
          className=''
        >{`Hola ${trimmedName}!`}
        </h3>
      </div>
    </>
  )
}
