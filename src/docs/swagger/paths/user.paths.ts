export const userPaths = {
    "/users": {
        post: {
            summary: "Criar um novo usuário",
            description: "Cria um usuário no sistema.",
            tags: ["Users"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/UserInput",
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Usuário criado com sucesso",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/User",
                            },
                        },
                    },
                },
                400: {
                    description: "Erro ao criar usuário",
                },
            },
        },
    },
    "/users/{id}": {
        get: {
            summary: "Obter um usuário por ID",
            description: "Retorna os dados de um usuário específico.",
            tags: ["Users"],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    description: "ID do usuário",
                    schema: {
                        type: "string",
                    },
                },
            ],
            responses: {
                200: {
                    description: "Usuário encontrado",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/User",
                            },
                        },
                    },
                },
                404: {
                    description: "Usuário não encontrado",
                },
            },
        },
        put: {
            summary: "Atualizar um usuário",
            description: "Atualiza os dados de um usuário existente.",
            tags: ["Users"],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    description: "ID do usuário",
                    schema: {
                        type: "string",
                    },
                },
            ],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/UserInput",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Usuário atualizado com sucesso",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/User",
                            },
                        },
                    },
                },
                400: {
                    description: "Erro ao atualizar usuário",
                },
            },
        },
        delete: {
            summary: "Excluir um usuário",
            description: "Remove um usuário do sistema.",
            tags: ["Users"],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    description: "ID do usuário",
                    schema: {
                        type: "string",
                    },
                },
            ],
            responses: {
                204: {
                    description: "Usuário deletado com sucesso",
                },
                404: {
                    description: "Usuário não encontrado",
                },
            },
        },
    },
};
