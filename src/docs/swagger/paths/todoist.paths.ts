/**
 * @swagger
 * tags:
 *   name: Todoist
 *   description: API para gerenciar Todoists
 */

export const todoistPaths = {
    '/todoist': {
        post: {
            summary: 'Criar um novo Todoist',
            tags: ['Todoist'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Todoist',
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: 'Todoist criado com sucesso',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Todoist',
                            },
                        },
                    },
                },
                500: { description: 'Erro ao criar Todoist' },
            },
        },
        get: {
            summary: 'Retornar todos os Todoists',
            tags: ['Todoist'],
            responses: {
                200: {
                    description: 'Lista de Todoists',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: { $ref: '#/components/schemas/Todoist' },
                            },
                        },
                    },
                },
                500: { description: 'Erro ao buscar Todoists' },
            },
        },
    },
    '/todoist/{id}': {
        get: {
            summary: 'Retornar um Todoist por ID',
            tags: ['Todoist'],
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    required: true,
                    schema: { type: 'string' },
                    description: 'ID do Todoist',
                },
            ],
            responses: {
                200: {
                    description: 'Retorna o Todoist com o ID fornecido',
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Todoist' },
                        },
                    },
                },
                404: { description: 'Todoist não encontrado' },
                500: { description: 'Erro ao buscar Todoist' },
            },
        },
        put: {
            summary: 'Atualizar um Todoist por ID',
            tags: ['Todoist'],
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    required: true,
                    schema: { type: 'string' },
                    description: 'ID do Todoist',
                },
            ],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: { $ref: '#/components/schemas/Todoist' },
                    },
                },
            },
            responses: {
                200: {
                    description: 'Todoist atualizado com sucesso',
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Todoist' },
                        },
                    },
                },
                404: { description: 'Todoist não encontrado' },
                500: { description: 'Erro ao atualizar Todoist' },
            },
        },
        delete: {
            summary: 'Deletar um Todoist por ID',
            tags: ['Todoist'],
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    required: true,
                    schema: { type: 'string' },
                    description: 'ID do Todoist',
                },
            ],
            responses: {
                200: { description: 'Todoist deletado com sucesso' },
                404: { description: 'Todoist não encontrado' },
                500: { description: 'Erro ao deletar Todoist' },
            },
        },
    },
};
