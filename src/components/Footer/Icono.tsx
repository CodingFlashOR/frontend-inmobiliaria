interface IconoProps {
  icono: React.FC<React.SVGProps<SVGSVGElement>>;
  titulo: string;
}

const Icono: React.FC<IconoProps> = ({ icono: IconoComponent, titulo }) => {
  return (
    <div className='flex flex-col items-center justify-center mt-2'>
      <IconoComponent />
      <p className=' text-amarillo text-sm'>{titulo}</p>
    </div>
  )
}

export default Icono
