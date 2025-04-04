"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_config_1 = require("./docs/swagger.config");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const mongoose_config_1 = __importDefault(require("./config/mongoose.config"));
const todoist_routes_1 = __importDefault(require("./routes/todoist.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, mongoose_config_1.default)();
// Swagger na rota /api-docs
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_config_1.swaggerSpec));
// Usar as rotas do Todoist
app.use('/todoist', todoist_routes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
