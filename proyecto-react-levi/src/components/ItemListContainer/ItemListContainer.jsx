import ItemCount from "../itemCount/ItemCount"

  const ItemListContainer = ({saludo}) => {
    const onAdd = (cantidad) => {
      console.log( `La cantidad es: ${cantidad}`);
    }

  return (
    <div>
      {saludo}
      <ItemCount initial={1} stock={12} onAdd={onAdd} />
    </div>
  )
}


export default ItemListContainer