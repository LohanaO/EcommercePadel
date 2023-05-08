const productos = [
    {nombre: "Paleta BullPadel", id:1, img:'https://www.padelnuestro.com/images/cargador/productos/imagen-1-108804-a055d2db-37735-NORMAL.jpg',precio: 150000 },
    {nombre: "Paleta Nox", id:2, img:'https://img.tenniswarehouse-europe.com/watermark/rs.php?path=NPRSIL-1.jpg', precio: 100000 },
    {nombre: "Paleta Adidas", id:3, img:'https://www.tiendapadelpoint.com/image/cache/data/pala-adidas-bisoke-woman-800x800.jpg', precio: 200000  },
    {nombre: "Paleta Head", id:4, img:'https://www.tradeinn.com/f/13787/137873045/head-racchetta-padel-evo-sanyo.jpg', precio: 2500000 },
    {nombre: "Paleta Puma", id:4, img:'https://cdn.shopify.com/s/files/1/0016/7031/6081/products/A745000006-1_600x.jpg?v=1666858655',precio: 1800000 },
    {nombre: "Paleta Babolat", id:4, img:'https://www.padeliberico.es/8882-large_default/babolat-counter-veron-2022.jpg',precio: 1900000 }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( ()=> {
            resolve(productos)
        }, 2000)
    })
}