import React from 'react'
// import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = () => {

    const onAdd = (cant) => {
        console.log(`La cantidad es:  ${cant}`)
    }

    return (
        <div>
            ItemDetail
            {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
        </div>
    )
}

export default ItemDetail
