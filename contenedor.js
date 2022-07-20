const fs = require('fs');

class Contenedor{
    constructor(ruta){
        this.ruta = ruta
    }
    async save(obj){
        try{
            let dataArchivo  = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            if(dataArchivoParse.length){
            await fs.promises.writeFile(this.ruta, JSON.stringify([...dataArchivoParse, {obj, id: dataArchivoParse.length+1}], null, 2))

            }else{
                await fs.promises.writeFile(this.ruta, JSON.stringify([{obj, id: dataArchivoParse.length+1}], null, 2))
            }

            console.log(`El archivo tiene el id: ${dataArchivoParse.length+1}`)
        }catch(error){
            console.log(error)
        }
      
    } 
   
    async getById(id){
        try{
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            let producto = dataArchivoParse.find(producto => producto.id === id)
            if(producto){
                //return producto
                console.log(producto)
            }else{
                console.log('No se encontro')
            }

        }catch(error){
            console.log(error)
        }
    }
    async getAll(){
        try{
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            if(dataArchivoParse.length){
                    // return dataArchivoParse
                    console.log(dataArchivoParse)
            }else{
                console.log('No hay productos')
            }    
           }catch(error){
            console.log(error)
        }
    }
    async deleteById(id){
        try{
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            let producto = dataArchivoParse.find(producto => producto.id === id)
            if(producto){
                let dataArchivoParseFiltrado = dataArchivoParse.filter(producto => producto.id !== id)
                await fs.promises.writeFile(this.ruta, JSON.stringify(dataArchivoParseFiltrado, null , 2), 'utf-8')
                console.log('Producto elminado')
            }else{
                console.log('No se encontro el producto')
                
            }

        }catch(error){
            console.log(error)
        }
    }
    async deleteAll(){
        try{
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            if(dataArchivoParse.length){
                await fs.promises.writeFile(this.ruta, JSON.stringify([]), 'utf-8')
                console.log('Productos Borrados')
            }else{
                console.log('No hay productos que borrar')
            }    
           }catch(error){
            console.log(error)
        }
    }
}
module.exports = Contenedor