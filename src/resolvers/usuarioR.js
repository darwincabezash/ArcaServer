import UsuarioM from "../models/UsuarioM";
import PermisoM from "../models/PermisoM";
import mongoose from 'mongoose';

export const UsuarioR = {
    Query: {
        async usuario() {

            return await UsuarioM.find()
/*
            UsuarioM.
            findOne({ title: 'Casino Royale' }).            
            populate('permisos').
            exec(function (err, usuario) {
              console.log('RESULTADO ES: %s', usuario);
              // prints "The author is Ian Fleming"
            });
*/


        }
    }, Mutation: {
        //Crear Usuario
        /*async crearUsuario(_, { input }) {
            console.log(input);
            /*const nuevoUsuario = new UsuarioM(input);
            await nuevoUsuario.save();
            return nuevoUsuario;
        },*/

        async crearUsuario(_, { input })  {

            const permisoM = new PermisoM();
            permisoM.permiso="mi permiso"
            console.log(permisoM);

            permisoM.save(function (err) {
                if (err) return handleError(err);

            });


            const usuarioM = new UsuarioM();
            usuarioM,usuario="MI USUARIO";
            usuarioM.clave="MI CLAVE";
            usuarioM.permisos.push(permisoM._id);
            console.log(usuarioM);

            usuarioM.save(function (err) {
                if (err) return handleError(err);

            });




/*
            author.save(function (err) {
                if (err) return handleError(err);

                const story1 = new Story({
                    title: 'Casino Royale',
                    author: author._id    // assign the _id from the person
                });

                story1.save(function (err) {
                    if (err) return handleError(err);
                    // that's it!
                });
            });*/
        }
    }

}
