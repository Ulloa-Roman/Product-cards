const productosTecnologicos = [
    {
        Nombre: " "+"Iphone",
        Marca: " "+"Apple",
        Modelo: " "+"iPhone 15",
        Precio: " "+"$1,000",
        Especificaciones:" "+ [ "Face ID"]
    },
    {
        Nombre: " "+"Notebook",
        Marca: " "+"Dell",
        Modelo: " "+"XPS 13",
        Precio: " "+"$1,300",
        Especificaciones:" "+["Intel i7"]
    },
    {
        Nombre: " "+"Smartwatch",
        Marca: " "+"Samsung",
        Modelo: " "+"Galaxy Watch 6",
        Precio: " "+"$400",
        Especificaciones:" "+["Incluye correas"]
    },
    {
        Nombre: " "+"Tablet",
        Marca: " "+"Microsoft",
        Modelo: " "+"Surface Pro 9",
        Precio: " "+"$1,100",
        Especificaciones:" "+[ "2-in-1"]
    },
    {
        Nombre:" "+"Consola",
        Marca:" "+"Sony",
        Modelo:" "+"PlayStation 5",
        Precio:" "+"$500",
        Especificaciones: " "+["Graficos 8k"]
    },
    {
        Nombre:" "+"Consola de Juegos",
        Marca:" "+"Nintendo",
        Modelo:" "+"Switch 5",
        Precio:" "+"$300",
        Especificaciones:" "+["40 gb de RAM"]
    },
    {
        Nombre:" "+"Barra de sonido",
        Marca:" "+"Sony",
        Modelo:" "+"Soundbar Sony MDR",
        Precio:" "+"$150",
        Especificaciones: [ "portable"]
    },
    {
        Nombre:" "+"Mouse",
        Marca:" "+"Logitech",
        Modelo:" "+"M500",
        Precio:" "+"$90",
        Especificaciones: ["Inalambrico"]
    },
    {
        Nombre:" "+"Teclado",
        Marca:" "+"Logitech",
        Modelo:" "+"K580",
        Precio:" "+"$130",
        Especificaciones:["Wireless"]
    },
    {
        Nombre:" "+"Monitor",
        Marca:" "+"Samsung",
        Modelo:" "+"UE43NU7",
        Precio:" "+"$1,200",
        Especificaciones: " "+["43 pulgadas"]
    },
    {
        Nombre:" "+"Mousepad",
        Marca:" "+"Logitech",
        Modelo:" "+"M570",
        Precio:" "+"$60",
        Especificaciones:" "+["Inalambrico"]
    },
    {
        Nombre:" "+"Audifonos",
        Marca:" "+"Sony",
        Modelo:" "+"Headphones Sony WH1000XM3",
        Precio:" "+"$100",
        Especificaciones: " "+["Bluetooth"]
    },
    {
        Nombre:" "+"Reproductor de DVD",
        Marca:" "+"Sony",
        Modelo:" "+"BD-RE40",
        Precio:" "+"$80",
        Especificaciones: " "+["Bluetooth"]
    },
    {
        Nombre:" "+"Mouse",
        Marca:" "+"Logitech",
        Modelo:" "+"M57",
        Precio:" "+"$40",
        Especificaciones: ["Inalambrico"]
    },
    {
        Nombre:" "+"Teclado",
        Marca:" "+"Logitech",
        Modelo:" "+"K480",
        Precio:" "+"$70",
        Especificaciones:" "+["Wireless"]
    },
    {
        Nombre:" "+"Monitor",
        Marca:" "+"LG",
        Modelo:" "+"K480",
        Precio:" "+"$1,000",
        Especificaciones: " "+["24 pulgadas"]
    },
    {
        Nombre:" "+"Impresora",
        Marca:" "+"Epson",
        Modelo:" "+"M57",
        Precio:" "+"$300",
        Especificaciones:" "+["InkJet"]
    },
    {
        Nombre:" "+"Disco duro",
        Marca:" "+"Western Digital",
        Modelo:" "+"Blue",
        Precio:" "+"$1,500",
        Especificaciones: " "+["500 GB"]
    },
    {
        Nombre:" "+"Auriculares",
        Marca:" "+"Sony",
        Modelo:" "+"Headphones Sony WH1000XM4",
        Precio:" "+"$80",
        Especificaciones: " "+["Bluetooth"]
    },
    {
        Nombre:" "+"Ipad",
        Marca:" "+"Apple",
        Modelo:" "+"Air",
        Precio:" "+"$800",
        Especificaciones: " "+["13 pulgadas"]
    }
];


const container = document.querySelector(".container");
    
 

for (let producto of productosTecnologicos){
    const card = document.createElement("div");
    card.classList.add("card");

    const titulo = document.createElement("h3");
    titulo.textContent = producto["Nombre"]
    card.append(titulo);

    let Precio = parseFloat(producto.Precio.replace("$", "").replace(",", ""));  

    // Mostrar el precio en la tarjeta  
    const precioElement = document.createElement("p");  
    precioElement.innerHTML = `<span class="prop">Precio</span>: ${producto.Precio}`;  
    card.append(precioElement); // Agregamos el precio a la tarjeta

    for (let keyProducto in producto) {  
        if (keyProducto !== "Nombre" && keyProducto !== "Precio") {
            const p = document.createElement("p");  
            p.innerHTML = `<span class="prop">${keyProducto}</span>: ${producto[keyProducto]}`;  
            card.append(p);  
        }  
    }  

    // Cambiar título si el precio es menor a 200  
    if (Precio < 200) {  
        titulo.innerHTML = `<span class="prop">${producto.Nombre} - OFERTA</span>`;  
    }  


    container.append(card);  
} 


 