export
let productos = [
{
    id:"1",
    nombre: "Le Male Le",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_685366-MLA47602420663_092021-O.webp",
    categoria: "perfume",
    precio: 27000,
},
{
    id:"2",
    nombre: "Acqua Di Gio",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_700514-MLA48255540632_112021-O.webp",
    categoria: "perfume",
    precio: 22000,
},
{
    id:"3",
    nombre: "Versace",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_678443-MLA46088855665_052021-O.webp",
    categoria: "perfume",
    precio: 22000,
},
{
    id:"4",
    nombre: "Invictus",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_881099-MLA44749843781_012021-O.webp",
    categoria: "perfume",
    precio: 25000,
},
{
    id:"5",
    nombre: "Starwalker",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_602421-MLA45464416757_042021-O.webp",
    categoria: "perfume",
    precio: 23800,
}
]

export const getFetch = () => {
    return new Promise ((resolve , reject) =>{
          setTimeout (()=>{
          resolve (productos)
        
        }, 2000)
    })
}