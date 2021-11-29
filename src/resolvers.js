import { task } from "./sample";
import User from "./models/User";
import Persona from "./models/Persona";

export const resolvers = {
    Query: {
        hello: () => {
            return "Hola mundo GQL"
        },
        nuevo(root, { name }, context) {
            console.log(context);
            return `Hola de nuevo:  ${name}`;
        },
        greet: (root, args) => {
            console.log(args);
            return `Hello ${args.name}`;
        },
        usandoDestructuracion: (root, { name }) => {
            console.log(name);
            return `Hello ${name}`;
        },
        task: () => {
            return task;
        },
        async user() {
            return await User.find();
        },
        async persona() {
            return await Persona.find();
        }
    }, Mutation: {
        createTask(_, { input }) {
            //console.log(input);
            input._id = task.length;

            task.push(input);
            return input;
        },
        async createUser(_, { input }) {
            const newUser = new User(input);
            await newUser.save();
            return newUser;
        },
        async deleteUser(_, { _id }) {
            var deletedUser = await User.findByIdAndDelete(_id);
            return deletedUser;
        },
        async updateUser(_, { _id, input }) {
            console.log(_id);
            console.log(input);
            return await User.findByIdAndUpdate(_id, input, { new: true });
        },
        
        //::::PERSONA:::::

        //Crear Persona
        async crearPersona(_, { input }) {
            console.log(input);
            const nuevaPersona = new Persona(input);
            await nuevaPersona.save();
            return nuevaPersona;
        }
    }

}


/*
import { task } from "./sample";
import {User} from "./models/User";
import {Persona} from "./models/Persona";


export const resolvers = {
    Query: {
        hello: () => {
            return "Hola mundo GQL"
        },
        nuevo(root, { name }, context) {
            console.log(context);
            return `Hola de nuevo:  ${name}`;
        },
        greet: (root, args) => {
            console.log(args);
            return `Hello ${args.name}`;
        },
        usandoDestructuracion: (root, { name }) => {
            console.log(name);
            return `Hello ${name}`;
        },
        task: () => {
            return task;
        },
        async user() {
            return await User.find();
        },
        async persona() {
            return await Persona.find();
        }
    }, Mutation: {
        createTask(_, { input }) {
            //console.log(input);
            input._id = task.length;

            task.push(input);
            return input;
        },
        async createUser(_, { input }) {
            const newUser = new User(input);
            await newUser.save();
            return newUser;
        },
        async deleteUser(_, { _id }) {
            var deletedUser = await User.findByIdAndDelete(_id);
            return deletedUser;
        },
        async updateUser(_, { _id, input }) {
            console.log(_id);
            console.log(input);
            return await User.findByIdAndUpdate(_id, input, { new: true });
        },
        //CREAR PERSONA
        async crearPersona(_, { input }) {
            console.log(input);
            const nuevaPersona = new Persona(input);
            await nuevaPersona.save();
            return nuevaPersona;
        },
    }

}

*/