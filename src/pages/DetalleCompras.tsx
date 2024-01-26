import { useParams } from 'react-router-dom'

export default function DetalleCompras () {
  const { id } = useParams()
  return (
    <div>{id}</div>
  )
}
