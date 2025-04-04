"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = exports.swaggerOptions = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const todoist_1 = require("./swagger/paths/todoist");
const todoist_2 = require("./swagger/schemas/todoist");
exports.swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Todoist API',
            version: '1.0.0',
            description: 'API para gerenciamento de Todoists',
        },
        components: {
            schemas: todoist_2.todoistSchema,
        },
        paths: todoist_1.todoistPaths,
    },
    apis: [],
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(exports.swaggerOptions);
