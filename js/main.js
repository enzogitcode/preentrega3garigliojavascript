alert("Bienvenido a la Academia de Lenguajes Krebs")
const carrito = []
const cursos = [{ codigo: 1, nombre: 'Alemán A1', precio: 15000 },
{ codigo: 2, nombre: 'Alemán A2', precio: 18000 },
{ codigo: 3, nombre: 'Alemán B1', precio: 20000 },
{ codigo: 4, nombre: 'Alemán B2', precio: 30000 },
{ codigo: 5, nombre: 'Alemán C1', precio: 40000 },
{ codigo: 6, nombre: 'Alemán C2', precio: 50000 },
{ codigo: 7, nombre: 'Japonés N5', precio: 20000 },
{ codigo: 8, nombre: 'Japonés N4', precio: 25000 },
{ codigo: 9, nombre: 'Japonés N3', precio: 30000 },
{ codigo: 10, nombre: 'Japonés N2', precio: 40000 },
{ codigo: 11, nombre: 'Japonés N1', precio: 50000 },
{ codigo: 12, nombre: 'Preparación para exámen de inglés IELTS', precio: 45000 },
{ codigo: 13, nombre: 'Preparación para exámen de inglés TOEFL', precio: 45000 },
{ codigo: 14, nombre: 'Preparación para exámen de inglés TOEIC', precio: 45000 }
]

function buscarCurso(codigo) {
    let cursoSeleccionado = cursos.find((curso) => curso.codigo === codigo)
    return cursoSeleccionado
}
function comprar() {
    let codigo = prompt("Ingresa el código del curso que deseas adquirir")
    let cursoElegido = buscarCurso(parseInt(codigo))

    if (cursoElegido !== undefined) {
        carrito.push(cursoElegido)
        console.table(carrito)
        let respuesta = confirm("¿Deseas adquirir otro curso?")
        if (respuesta === true) {
            comprar()
        } else {
            const shop = new Compra(carrito)
            let subtotal = shop.obtenerSubtotal()
            console.table(carrito)
            alert("El costo total de tu compra es de $ " + subtotal +". \n  Gracias por elegirnos.")
        }
    } 
    else {
        alert("Error en el código escrito. Por favor, refresque la página para comenzar de nuevo.")
    }
}