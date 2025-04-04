import swaggerJSDoc from 'swagger-jsdoc';
import { todoistPaths } from './swagger/paths/todoist';
import { todoistSchema } from './swagger/schemas/todoist';

export const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Todoist API',
            version: '1.0.0',
            description: 'API para gerenciamento de Todoists',
        },
        components: {
            schemas: todoistSchema,
        },
        paths: todoistPaths,
    },
    apis: [],
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
