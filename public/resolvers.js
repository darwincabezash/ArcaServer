"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;

require("core-js/modules/es.promise.js");

var _sample = require("./sample");

var _User = _interopRequireDefault(require("./models/User"));

var _Persona = _interopRequireDefault(require("./models/Persona"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const resolvers = {
  Query: {
    hello: () => {
      return "Hola mundo GQL";
    },

    nuevo(root, _ref, context) {
      let {
        name
      } = _ref;
      console.log(context);
      return "Hola de nuevo:  ".concat(name);
    },

    greet: (root, args) => {
      console.log(args);
      return "Hello ".concat(args.name);
    },
    usandoDestructuracion: (root, _ref2) => {
      let {
        name
      } = _ref2;
      console.log(name);
      return "Hello ".concat(name);
    },
    task: () => {
      return _sample.task;
    },

    async user() {
      return await _User.default.find();
    },

    async persona() {
      return await _Persona.default.find();
    }

  },
  Mutation: {
    createTask(_, _ref3) {
      let {
        input
      } = _ref3;
      //console.log(input);
      input._id = _sample.task.length;

      _sample.task.push(input);

      return input;
    },

    async createUser(_, _ref4) {
      let {
        input
      } = _ref4;
      const newUser = new _User.default(input);
      await newUser.save();
      return newUser;
    },

    async deleteUser(_, _ref5) {
      let {
        _id
      } = _ref5;
      var deletedUser = await _User.default.findByIdAndDelete(_id);
      return deletedUser;
    },

    async updateUser(_, _ref6) {
      let {
        _id,
        input
      } = _ref6;
      console.log(_id);
      console.log(input);
      return await _User.default.findByIdAndUpdate(_id, input, {
        new: true
      });
    },

    //::::PERSONA:::::
    //Crear Persona
    async crearPersona(_, _ref7) {
      let {
        input
      } = _ref7;
      console.log(input);
      const nuevaPersona = new _Persona.default(input);
      await nuevaPersona.save();
      return nuevaPersona;
    }

  }
};
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

exports.resolvers = resolvers;
//# sourceMappingURL=resolvers.js.map