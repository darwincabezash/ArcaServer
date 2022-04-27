
export const typeDefsx=`
type Query{
    libro:[Libro]   
    autor:[Autor]   
}

type Autor {
  _id: ID!
  name: String!
  libros: [ID]
  AutorLibros:[Libro]!
}

input AutorInput {
  name: String
  libros: [ID]
}


input LibroInput {
  title: String
  content: String
}

type Libro {
  _id: ID!
  title: String  
  content: String
}

type Mutation {
createLibro(input: LibroInput!): Libro
createAutor(input: AutorInput!): Autor
}
`;


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