import { useParams } from 'react-router-dom';

export default function DetalleAlquiler() {
    const { id } = useParams();
  return (
    <div>{id}</div>
  )
}
