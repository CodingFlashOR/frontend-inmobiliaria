// ListItems.tsx
interface ListItemsProps {
  icono: React.FC;
  texto: string;
  url: string;
  open: boolean
}

export default function ListItems ({ icono: Icono, texto, url, open }: ListItemsProps) {
  return (
    <a
      href={url}
      className={`transition-all duration-300 ${open ? 'opacity-100 visible delay-150' : 'opacity-0 invisible delay-0'} flex gap-2 ml-1 t`}
    >
      <Icono />
      <p>{texto}</p>
    </a>
  )
}
