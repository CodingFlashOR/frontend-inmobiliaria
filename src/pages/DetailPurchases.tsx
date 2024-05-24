import { useParams } from 'react-router-dom'

export default function DetailPurchases () {
  const { id } = useParams()
  return (

    <div>{id}</div>

  )
}
