import swaggerJSDoc from 'swagger-jsdoc';
import { todoistPaths } from './swagger/paths/todoist.paths';
import { todoistSchema } from './swagger/schemas/todoist.schemas';
import { authPaths } from './swagger/paths/auth.paths';
import { authSchema } from './swagger/schemas/auth.schemas';
import { userPaths } from './swagger/paths/user.paths';
import { userSchema } from './swagger/schemas/user.schemas';

export const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Todoist API',
            version: '1.0.0',
            description: 'API para gerenciamento de Todoists, autenticação e usuários',
        },
        components: {
            schemas: {
                ...todoistSchema,
                ...authSchema,
                ...userSchema,  // Inclui os schemas de usuários
            },
            securitySchemes: {
                BearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        paths: {
            ...todoistPaths,
            ...authPaths,
            ...userPaths,  // Inclui as rotas de usuários
        },
    },
    apis: [],
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
