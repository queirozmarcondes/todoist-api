"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoistService = void 0;
const todoist_model_1 = require("../model/todoist.model");
class TodoistService {
    createTodoist(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const todoist = new todoist_model_1.Todoist(data);
            return todoist.save();
        });
    }
    getAllTodoists() {
        return __awaiter(this, void 0, void 0, function* () {
            return todoist_model_1.Todoist.find().lean();
        });
    }
    getTodoistById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return todoist_model_1.Todoist.findById(id).lean();
        });
    }
    updateTodoist(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return todoist_model_1.Todoist.findByIdAndUpdate(id, data, { new: true, runValidators: true }).lean();
        });
    }
    deleteTodoist(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return todoist_model_1.Todoist.findOneAndDelete({ _id: id }).lean();
        });
    }
}
exports.TodoistService = TodoistService;
