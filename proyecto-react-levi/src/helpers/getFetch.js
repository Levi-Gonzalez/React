
//esto es un mook, una simulación que nosotros nos conectamos algunos datos, que están hardcodeados/rígido. NO es dínamico
//Para que sea dínamico usar un lenguaje como NODE, Phyton, Django etc. Y construír nuestras APIS (del lado del back) de product.
export let products = [
{
    id:"1",
    name: "Bleu de Chanel",
    image:"https://http2.mlstatic.com/D_NQ_NP_885652-MLA45188141045_032021-O.webp",
    category: "Man",
    price: 97000
},
{
    id:"2",
    name: "Channel 5",
    image:"https://http2.mlstatic.com/D_NQ_NP_976382-MLA45743621157_042021-O.webp",
    category: "Women",
    price: 44500
},
{
    id:"3",
    name: "Invictus Victory",
    image:"https://http2.mlstatic.com/D_NQ_NP_902450-MLA47844614443_102021-O.webp",
    category: "Man",
    price: 25000
},  
{
    id:"4",
    name: "Channel Coco",
    image:"https://http2.mlstatic.com/D_NQ_NP_793832-MLA44750390837_012021-O.webp",
    category: "Women",
    price: 69000
},
{
    id:"5",
    name: "Invictus",
    image:"https://http2.mlstatic.com/D_NQ_NP_881099-MLA44749843781_012021-O.webp",
    category: "Man",
    price: 24000
},
{
    id:"6",
    name: "Lady Million",
    image:"https://http2.mlstatic.com/D_NQ_NP_659963-MLA47584294838_092021-O.webp",
    category: "Women",
    price: 22500
},
{
    id:"7",
    name: "Carolina Herrera",
    image:"https://http2.mlstatic.com/D_NQ_NP_630931-MLA45187812024_032021-O.webp",
    category: "Women",
    price: 20500
},

{
    id:"8",
    name: "Versace",
    image:"https://http2.mlstatic.com/D_NQ_NP_678443-MLA46088855665_052021-O.webp",
    category: "Man",
    price: 22000
},
{
    id:"9",
    name: "Acqua Di Gio",
    image:"https://http2.mlstatic.com/D_NQ_NP_700514-MLA48255540632_112021-O.webp",
    category: "Man",
    price: 22000
},
{
    id:"10",
    name: "Starwalker",
    image:"https://http2.mlstatic.com/D_NQ_NP_602421-MLA45464416757_042021-O.webp",
    category: "Man",
    price: 23800
},
{
    id:"11",
    name: "Lancôme ",
    image:"https://http2.mlstatic.com/D_NQ_NP_675972-MLA44749361071_012021-O.webp",
    category: "Women",
    price: 26800
},
{
    id:"12",
    name: "Carolina Herrera Goog Girl ",
    image:"https://http2.mlstatic.com/D_NQ_NP_920992-MLA49695549958_042022-O.webp",
    category: "Women",
    price: 26800
},
{
    id:"13",
    name: "1 Million Vip",
    image:"https://fraguru.com/mdimg/perfume/375x500.48903.jpg",
    category: "Man",
    price: 24000

},
{
    id:"14",
    name: "Her Secret",
    image:"https://http2.mlstatic.com/D_NQ_NP_632754-MLA48193853806_112021-O.webp",
    category: "Women",
    price: 7000
},
{
    id:"15",
    name: "Creed Aventus",
    image:"https://http2.mlstatic.com/D_NQ_NP_673262-MLA45334026390_032021-O.webp",
    category: "Man",
    price: 100000
},
{
    id:"16",
    name: "CH 212",
    image:"https://http2.mlstatic.com/D_NQ_NP_606291-MLA50822610338_072022-O.webp",
    category: "Women",
    price: 19800
},
{
    id:"17",
    name: "Jean Paul",
    image:"https://http2.mlstatic.com/D_NQ_NP_685366-MLA47602420663_092021-O.webp",
    category: "Man",
    price: 27000
},
{
    id:"18",
    name: "Dolce & Gabbana",
    image:"https://www.tradeinn.com/f/13856/138567271/dolce---gabbana-the-one-gold-agua-de-perfume-vaporizador-30ml.jpg",
    category: "Women",
    price: 27000
}

]

export const getFetch = (id) => {
    return new Promise ((resolve , reject) =>{
          setTimeout (()=>{
            if (id){
                resolve (products.find(product => product.id === id))
            }
            else {
                resolve (products)                
            }        
        }, 2000)
    })
}