const productos = [
    {nombre: "Paleta BullPadel", id:1, img:'https://www.padelnuestro.com/images/cargador/productos/imagen-1-108804-a055d2db-37735-NORMAL.jpg',precio: 150000, description:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden' },
    {nombre: "Paleta Nox", id:2, img:'https://img.tenniswarehouse-europe.com/watermark/rs.php?path=NPRSIL-1.jpg', precio: 100000, description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden' },
    {nombre: "Paleta Adidas", id:3, img:'https://www.tiendapadelpoint.com/image/cache/data/pala-adidas-bisoke-woman-800x800.jpg', precio: 200000, description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"  },
    {nombre: "Paleta Head", id:4, img:'https://www.tradeinn.com/f/13787/137873045/head-racchetta-padel-evo-sanyo.jpg', precio: 2500000, description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"},
    {nombre: "Paleta Puma", id:5, img:'https://cdn.shopify.com/s/files/1/0016/7031/6081/products/A745000006-1_600x.jpg?v=1666858655',precio: 1800000, description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"},
    {nombre: "Paleta Babolat", id:6, img:'https://www.padeliberico.es/8882-large_default/babolat-counter-veron-2022.jpg',precio: 1900000, description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( ()=> {
            resolve(productos)
        }, 1000)
    })
}

export const getProductoId=(id)=>{
    return new Promise((resolve) => {
        const produto= productos.find(productos => productos.id===id)
        setTimeout(() => {
            resolve(produto)
        }, 2000);
    })
}
