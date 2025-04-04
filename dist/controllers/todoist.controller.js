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
exports.TodoistController = void 0;
const todoist_service_1 = require("../services/todoist.service");
const todoistService = new todoist_service_1.TodoistService();
class TodoistController {
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoist = yield todoistService.createTodoist(req.body);
                res.status(201).json(todoist);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoists = yield todoistService.getAllTodoists();
                res.json(todoists);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoist = yield todoistService.getTodoistById(req.params.id);
                if (!todoist) {
                    res.status(404).json({ message: 'Todoist not found' });
                    return;
                }
                res.json(todoist);
            }
            catch (error) {
                next(error);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoist = yield todoistService.updateTodoist(req.params.id, req.body);
                if (!todoist) {
                    res.status(404).json({ message: 'Todoist not found' });
                    return;
                }
                res.json(todoist);
            }
            catch (error) {
                next(error);
            }
        });
    }
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoist = yield todoistService.deleteTodoist(req.params.id);
                if (!todoist) {
                    res.status(404).json({ message: 'Todoist not found' });
                    return;
                }
                res.json({ message: 'Todoist deleted successfully' });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.TodoistController = TodoistController;
