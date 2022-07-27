
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
  const { id } = useParams ()



  return (
    <div className='border border-5 border-primary'>
        ItemDetailContainer
        <ItemDetail/>

    </div>
  )
}
export default ItemDetailContainer