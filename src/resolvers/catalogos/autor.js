import Autor from "../../models/configuraciones/catalogos/Autor.js"
import Libro from "../../models/configuraciones/catalogos/Libro"

export const AutorLibroW = {
    Query: {
        async libro() {
            return await Libro.find();
        },
        async autor() {
            //return await Person.find().populate('story').exec();

            //return await Autor.find();

            const resultado = await Autor.aggregate(
                [
                    {
                        $lookup: {
                            from: "libros",  //COLECCION : poner el nombre de la coleccion de la base
                            localField: "libros",   //CAMPO LOCAL   
                            foreignField: "_id",    //CAMPO FORANEO
                            as:"AutorLibros"    //ALIAS
                        }
                    }
                ]
            )

            console.log("********* RESULTADO *********");
            //console.log(JSON.stringify(resultado) );
            return resultado;
        }
        
    }, Mutation: {        
        //Crear Escuela
        async createAutor(_, { input }) {
            try {
                console.log(input);
                const newProduct = await Autor(input);
                await newProduct.save()
                return newProduct;
            } catch (error) {
                console.error(error.message)
            }
        },
 //Crear Escuela createAutor
        async createLibro(_, { input }) {
            try {
                const newProduct = await Libro(input);
                await newProduct.save()
                return newProduct;
            } catch (error) {
                console.error(error.message)
            }
        },
    }

}
