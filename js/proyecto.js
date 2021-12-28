
class Produ{
    constructor(nombre, codigo, precio){
        this.nombre = nombre.toUpperCase();
        this.codigo = codigo;
        this.precio = parseFloat(precio);
}
}
const form  = document.querySelector("#form");
//const input = document.querySelector("#Nombre_Producto");
const evento = 'submit';
/*input.addEventListener('change', validacion);
function validacion(){

    if (input.value.length < 3) {
		input.classList.add('is-invalid');
		input.classList.remove('is-valid');
		
	} else {
		input.classList.remove('is-invalid');
		input.classList.add('is-valid');
		
	}
}*/
  
form.addEventListener(evento, recogerDatos);
function recogerDatos(e){
    e.preventDefault();
  
	
    const nombre= document.querySelector("#Nombre_Producto").value;
    const codi= document.querySelector("#Codigo").value;
    const precio= document.querySelector("#Precio").value;
    
    let suma= parseFloat(precio) * 1.21;
  
    function listaLS(listas){
        const tareasJSON = JSON.stringify(listas);
        localStorage.setItem("listas", tareasJSON);
    }
    
    const lista = localStorage.getItem("listas");
    let productos;

    if(lista === null){
        productos = [];
    }else{
        productos = JSON.parse(lista);
    }

const producto1 = new Produ(nombre,codi,suma);
productos.push(producto1);
listaLS(productos);




let mostrarProductos = document.querySelector("#productos");
let mostrarProductos2 = document.querySelector("#guardado"); 



mostrarProductos.innerHTML +=`
    <div>
    <h3> ${nombre}</h3> 
    <p>Cod: ${codi}</p>
    <p>Precio + Iva: $${suma}</p>
    </div><br>
    `
    for(i=0; i<productos.length; i++){

        mostrarProductos2.innerHTML +=`
        <div>
        <h3> ${productos[i].nombre}</h3> 
        <p>Cod: ${productos[i].codigo}</p>
        <p>Precio + Iva: $${productos[i].precio}</p>
        
        </div><br>
        `
  
        
    }
}
   $("document").ready(function(){
       $("#fadeTog").click(function(){
           $("#guardado").fadeToggle();
       });
       $("#fadeTog").click(function(){
        $("#form").fadeToggle();
    });
    $("#fadeTog").click(function(){
        $("#productos").fadeToggle();
    });
   });
$("MisProductos").append('<button id="btn"> boton ejercicio</button>');

const tiendas = [];

class tienda{
    constructor(nombre, precio){
        this.id = tiendas.length;
        this.nombre = nombre.toUpperCase();
        this.precio = Number(precio);
    }

    mostrar(){
        return `El Producto: ${this.nombre}, Tiene un valor de: $ ${this.precio}`;
    } 
}

tiendas.push(new tienda("Monitor 27 samsung", '25000'));
tiendas.push(new tienda("Monitor  Gamer Asus LED 27'", '25000'));
tiendas.push(new tienda("Monitor Gamer LG LED 25'", '53800'));
tiendas.push(new tienda("CPU armada AMD A6 7480", '48000'));

function seleccion(id){

    let innerSelect = '';
    tiendas.forEach(producto => innerSelect += `<option value='${producto.id}'>${producto.nombre}</option>` )

    return `<select  id="${id}">${innerSelect}</select>`;
}

$('body').append(seleccion('ElegirProducto'));
$('#ElegirProducto').change(function (e){
    e.preventDefault();

    const seleccionar = tiendas.find(elemento => elemento.id == e.target.value);

    $("body").append(`<h3 'mostrar'>${seleccionar.mostrar()}</h3>`)

    
});

$('body').css("color", "rgb(161, 190, 243)").slideUp(2000).slideDown(2000);