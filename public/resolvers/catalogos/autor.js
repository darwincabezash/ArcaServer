"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutorLibroW = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/es.json.stringify.js");

var _Autor = _interopRequireDefault(require("../../models/configuraciones/catalogos/Autor.js"));

var _Libro = _interopRequireDefault(require("../../models/configuraciones/catalogos/Libro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AutorLibroW = {
  Query: {
    async libro() {
      return await _Libro.default.find();
    },

    async autor() {
      //return await Person.find().populate('story').exec();
      //return await Autor.find();
      const resultado = await _Autor.default.aggregate([{
        $lookup: {
          from: "libros",
          localField: "libros",
          foreignField: "_id",
          as: "AutorLibros"
        }
      }]);
      console.log("********* RESULTADO *********");
      console.log(JSON.stringify(resultado));
    }

  },
  Mutation: {
    //Crear Escuela
    async createAutor(_, _ref) {
      let {
        input
      } = _ref;

      try {
        console.log(input);
        const newProduct = await (0, _Autor.default)(input);
        await newProduct.save();
        return newProduct;
      } catch (error) {
        console.error(error.message);
      }
    },

    //Crear Escuela createAutor
    async createLibro(_, _ref2) {
      let {
        input
      } = _ref2;

      try {
        const newProduct = await (0, _Libro.default)(input);
        await newProduct.save();
        return newProduct;
      } catch (error) {
        console.error(error.message);
      }
    }

  }
};
exports.AutorLibroW = AutorLibroW;
//# sourceMappingURL=autor.js.map