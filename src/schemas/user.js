
export const User=`

type Query{
    user:[User]
}

type User{
    _id:ID
    firstName:String
    lastName:String
    age:Int
}

input UserInput{
    firstName:String
    lastName:String
    age:Int
}


type Mutation{
    createUser(input:UserInput):User
    deleteUser(_id:ID):User
    updateUser(_id:ID,input:UserInput):User
}
`;

