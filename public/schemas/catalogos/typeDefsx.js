"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefsx = void 0;
const typeDefsx = "\ntype Query{\n    libro:[Libro]   \n    autor:[Autor]   \n}\n\ntype Autor {\n  _id: ID!\n  name: String!\n  libros: [ID]\n  AutorLibros:[Libro]!\n}\n\ninput AutorInput {\n  name: String\n  libros: [ID]\n}\n\n\ninput LibroInput {\n  title: String\n  content: String\n}\n\ntype Libro {\n  _id: ID!\n  title: String  \n  content: String\n}\n\ntype Mutation {\ncreateLibro(input: LibroInput!): Libro\ncreateAutor(input: AutorInput!): Autor\n}\n";
/*REVISAR ESTO QUE AL PARECER
CUANDO ES INPUT SOLO SE UA (ID) CUANDO ES POR SALIDA
SE USA (PRODUCT) O SEA 
EL OBJETO*/

/*----------------------------------------------------------------

type Story {
  id: ID!
  method: String!
  items: [Product]
}
input StoryInput {
  method: String
  items: [ID]
}

*/

exports.typeDefsx = typeDefsx;
//# sourceMappingURL=typeDefsx.js.map