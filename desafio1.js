const Usuarios = class{
  constructor(nombre, apellido, libros, mascotas){
  this.nombre = nombre
  this.apellido = apellido
  this.libros = libros
  this.mascotas = mascotas
  }
getFullName(){
  const nombreCompleto = `${this.nombre} ${this.apellido}`
  return(nombreCompleto)
}
addMascota(nuevo){
  this.mascotas.push(nuevo)
}
countMascotas(){
  return(this.mascotas.length)
}
addBook(nuevoLibro){
  this.libros.push(nuevoLibro)
}
getBookNames(){
   const lista = this.libros.map(dato => dato.titulo)
   return(lista)
}
}
let usuario = new Usuarios('Pepe','Pipo',([{titulo:'El Viejo y El Mar', autor: 'Hemingway'},{titulo:'Moby Dick', autor:'Melville'}]),['dogo','chiuaua'])

//Mostrar nombre completo
usuario.getFullName()
//Agregar un libro
usuario.addBook({titulo:'Robinson Crusoe', autor: 'Defoe'})
console.log(usuario.libros)
//Agregar una mascota
usuario.addMascota('loro')
console.log(usuario.mascotas)
//Contador de mascotas
usuario.countMascotas()
//Lista de Libros
usuario.getBookNames()
