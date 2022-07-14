let Usuarios = class{
    constructor(nombre, apellido, libros, mascotas){
    this.nombre = nombre
    this.apellido = apellido
    this.libros = libros
    this.mascotas = mascotas
    }
    getFullName(){
        console.log(this.nombre + ' ' + this.apellido)
}
  addMascota(){
    this.mascotas.unshift('loro')
  }
	countMascotas(){
    console.log(usuario.mascotas.length)
  }
	addBook(){
    this.libros.unshift({titulo:'Robinson Crusoe', autor: 'Johnson'})
  }
	getBookNames(){
     let lista = this.libros.map(dato => dato.titulo)
     return(lista)
  }
}
let usuario = new Usuarios('Pepe','Pipo',([{titulo:'El Viejo y El Mar', autor: 'Hemingway'},{titulo:'Moby Dick', autor:'Levington'}]),['dogo','chiuaua'])

//Mostrar nombre completo
usuario.getFullName()
//Agregar un libro
usuario.addBook()
console.log(usuario.libros)
//Agregar una mascota
usuario.addMascota()
console.log(usuario.mascotas)
//Contador de mascotas
usuario.countMascotas()
//Lista de Libros
usuario.getBookNames()
console.log(usuario.lista)
