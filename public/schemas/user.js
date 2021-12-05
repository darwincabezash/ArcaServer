"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;
const User = "\n\ntype Query{\n    user:[User]\n}\n\ntype User{\n    _id:ID\n    firstName:String\n    lastName:String\n    age:Int\n}\n\ninput UserInput{\n    firstName:String\n    lastName:String\n    age:Int\n}\n\n\ntype Mutation{\n    createUser(input:UserInput):User\n    deleteUser(_id:ID):User\n    updateUser(_id:ID,input:UserInput):User\n}\n";
exports.User = User;
//# sourceMappingURL=user.js.map