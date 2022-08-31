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