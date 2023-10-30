const products = [
    {
        id: '1',price: 128 ,name:'ATH MB50XBT',category:'Auriculares',img:'https://audiomant.vercel.app/archivos.img/ath-m50xbt2_01.png',stock: 30,description:'Auriculares Auditechnica'},
        {id: '2',price: 135 ,name:'AT2020 USB',category:'Microfonos',img:'https://audiomant.vercel.app/archivos.img/at2020usb_plus_01.png',stock: 15,description:'Microfono Auditechnica'},
        {id: '3',price: 122,name:'AT-LP60XHP',category:'Tocadiscos',img:'https://audiomant.vercel.app/archivos.img/at-lp60xhp-gm_01.png',stock: 7,description:'Microfono Auditechnica'},

]
export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
    },500)
})

}
export const getProductsByCategory = (productCategory) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productCategory))
    },500)
})

}