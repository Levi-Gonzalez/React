let productos = [
{
    id:"1",
    nombre: "212",
    categoria: "perfume",
    precio: $10000,
},
{
    id:"2",
    nombre: "Versace",
    categoria: "perfume",
    precio: $15000,
},
{
    id:"3",
    nombre: "Play",
    categoria: "perfume",
    precio: $11000,
}
]

export const getFetch = () => {
    return new Promise ((resolve , reject) =>{
        setTimeout (()=>{
            resolver (productos)
        
        }, 3000)
    })
}