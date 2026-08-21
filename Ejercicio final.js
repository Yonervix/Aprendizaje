

let producto = [
    { nombre: 'Camiseta ', precio: 20 },
    { nombre: 'Pantalón ', precio: 30 },
    { nombre: 'Zapatos ', precio: 50 },
    { nombre: 'Sombrero ', precio: 15 }
]

producto.push({ nombre: 'conjunto de jin ', precio: 2032 })

console.log("Lista de productos:")
for (let i =0; i< producto.length; i++) {
    console.log("producto: "+ producto[i].nombre +  "precio: " + producto[i].precio)
} 


