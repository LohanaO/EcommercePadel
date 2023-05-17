const productos = [
    {nombre: "Paleta BullPadel", id:'1', idCat:'1', img:'../img/paleta bull.jpg',precio: 150000, description:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden' },
    {nombre: "Remera  Genova", id:'2',idCat:'2', img:'../img/remera genova.jpg' ,precio: 8000, description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden' },
    {nombre: "Paleta Head", id:'3',idCat:'1', img:'../img/paleta head.jpg', precio: 200000, description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"  },
    {nombre: "Paleta Babolat", id:'4',idCat:'1', img:'../img/paleta bab.jpg', precio: 2500000, description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"},
    {nombre: "Pantalon padel Hombre", id:'5',idCat:'2', img:'../img/pantalon hombre.jpg',precio: 5000, description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"},
    {nombre: "Musculosa Padel Mujer", id:'6',idCat:'2', img:'../img/musculosa mujer.jpg',precio: 6500, description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc" }
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
        }, 100);
    })
}

export const getProductoCatgoria = (idCategoria) => {
    return new Promise((resolve) => {
        const producCat = productos.filter(prod => prod.idCat===idCategoria);
        setTimeout(() => {
            resolve(producCat);
        }, 100);
       

    })

}
