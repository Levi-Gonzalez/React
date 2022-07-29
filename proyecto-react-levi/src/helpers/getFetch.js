export
let productos = [
{
    id:"1",
    nombre: "Bleu de Chanel",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_885652-MLA45188141045_032021-O.webp",
    categoria: "Man",
    precio: "97.000",
},
{
    id:"2",
    nombre: "Chanel 5",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_976382-MLA45743621157_042021-O.webp",
    categoria: "Women",
    precio: "44.500",
},
{
    id:"3",
    nombre: "Invictus",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_902450-MLA47844614443_102021-O.webp",
    categoria: "Man",
    precio: "25.000",
},  
{
    id:"4",
    nombre: "Channel Coco",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_793832-MLA44750390837_012021-O.webp",
    categoria: "Women",
    precio: "69.000",
},
{
    id:"5",
    nombre: "Invictus",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_881099-MLA44749843781_012021-O.webp",
    categoria: "Man",
    precio: "24.000"
},
{
    id:"6",
    nombre: "Lady Million",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_659963-MLA47584294838_092021-O.webp",
    categoria: "Women",
    precio: "22.500"
},
{
    id:"7",
    nombre: "Carolina Herrera",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_630931-MLA45187812024_032021-O.webp",
    categoria: "Women",
    precio: "20.500"
},

{
    id:"8",
    nombre: "Versace",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_678443-MLA46088855665_052021-O.webp",
    categoria: "Man",
    precio: "22.000"
},
{
    id:"9",
    nombre: "Acqua Di Gio",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_700514-MLA48255540632_112021-O.webp",
    categoria: "Man",
    precio: "22.000"
},
{
    id:"10",
    nombre: "Starwalker",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_602421-MLA45464416757_042021-O.webp",
    categoria: "Man",
    precio: "23.800"
},
{
    id:"11",
    nombre: "Lancôme ",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_675972-MLA44749361071_012021-O.webp",
    categoria: "Women",
    precio: "26.800"
},
{
    id:"12",
    nombre: "Carolina Herrera Goog Girl ",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_920992-MLA49695549958_042022-O.webp",
    categoria: "Women",
    precio: "26.800"
},
{
    id:"13",
    nombre: "1 Million Vip",
    imagen:"https://fraguru.com/mdimg/perfume/375x500.48903.jpg",
    categoria: "Man",
    precio: "24.000"

},
{
    id:"14",
    nombre: "Her Secret",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_632754-MLA48193853806_112021-O.webp",
    categoria: "Women",
    precio: "7.000"
},
{
    id:"15",
    nombre: "Creed Aventus",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_673262-MLA45334026390_032021-O.webp",
    categoria: "Man",
    precio: "100.000"
},
{
    id:"16",
    nombre: "CH 212",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_606291-MLA50822610338_072022-O.webp",
    categoria: "Women",
    precio: "19.800"
},
{
    id:"17",
    nombre: "Le Male Le",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_685366-MLA47602420663_092021-O.webp",
    categoria: "Man",
    precio: "27.000"
},
{
    id:"18",
    nombre: "Dolce & Gabbana",
    imagen:"https://www.tradeinn.com/f/13856/138567271/dolce---gabbana-the-one-gold-agua-de-perfume-vaporizador-30ml.jpg",
    categoria: "Man",
    precio: "27.000"
}

]

export const getFetch = (id) => {
    return new Promise ((resolve , reject) =>{
          setTimeout (()=>{
            if (id){
                resolve (productos.find(producto => producto.id === id))
            }
            else {
                resolve (productos)                
            }        
        }, 1000)
    })
}