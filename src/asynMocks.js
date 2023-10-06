const products = [
    {
        id: '1',pice: '$128',name:'ATH MB50XBT',category:'Auridulares',img:'https://audiomant.vercel.app/archivos.img/ath-m50xbt2_01.png',stock: 30,description:'Auriculares Auditechnica'},
        {id: '1',pice: '$135',name:'AT2020 USB',category:'Microfonos',img:'https://audiomant.vercel.app/archivos.img/at2020usb_plus_01.png',stock: 15,description:'Microfono Auditechnica'},
        {id: '1',pice: '$112',name:'AT-LP60XHP',category:'Tocadiscos',img:'https://audiomant.vercel.app/archivos.img/at-lp60xhp-gm_01.png',stock: 7,description:'Microfono Auditechnica'},

]
export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
}
