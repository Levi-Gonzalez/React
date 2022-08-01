import React from 'react'
// import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({producto}) => { //llamamos a a través de prop a "producto"

    // const onAdd = (cant) => {
    //     console.log(`La cantidad es:  ${cant}`)
    // }

    return (
        <div ClassName="detalle-card card mb-4" >
        <div ClassName="row g-0">
          <div ClassName="col-md-6">
            <img src= {producto.imagen} ClassName="img-fluid rounded-start" alt="..." />
          </div>
          <div ClassName="col-md-8">
            <div ClassName="card-boy">
              <h3 >{producto.nombre}</h3>
              <p ClassName="card-text">{producto.categoria}</p>
            </div>
            <div>
                <h5>{producto.precio}</h5>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ItemDetail
