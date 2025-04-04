"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const todoist_controller_1 = require("../controllers/todoist.controller");
const router = (0, express_1.Router)();
const todoistController = new todoist_controller_1.TodoistController();
router.post('/', (0, express_async_handler_1.default)(todoistController.create));
router.get('/', (0, express_async_handler_1.default)(todoistController.getAll));
router.get('/:id', (0, express_async_handler_1.default)(todoistController.getById));
router.put('/:id', (0, express_async_handler_1.default)(todoistController.update));
router.delete('/:id', (0, express_async_handler_1.default)(todoistController.delete));
exports.default = router;
