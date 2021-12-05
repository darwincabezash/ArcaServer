"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Task = void 0;
const Task = "\ntype Query{\n    task:[Task]\n}\n\ntype Task{\n    _id:ID\n    title:String!\n    description:String!\n    number:Int\n}\n\ninput TaskInput{\n    title:String!\n    description:String!\n    number:Int \n}\n\n\ntype Mutation{\n    createTask(input:TaskInput):Task   \n}\n";
exports.Task = Task;
//# sourceMappingURL=task.js.map