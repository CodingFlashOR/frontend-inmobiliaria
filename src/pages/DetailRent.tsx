import { useParams } from 'react-router-dom'

export default function DetailRent () {
  const { id } = useParams()
  return (

    <div>{id}</div>

  )
}
