
export const Task=`
type Query{
    task:[Task]
}

type Task{
    _id:ID
    title:String!
    description:String!
    number:Int
}

input TaskInput{
    title:String!
    description:String!
    number:Int 
}


type Mutation{
    createTask(input:TaskInput):Task   
}
`;