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
      className=''
    >
      <Icono />
      <p>{texto}</p>
    </a>
  )
}
