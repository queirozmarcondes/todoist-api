export const authPaths = {
    "/login": {
        post: {
            summary: "Autenticar usuário",
            tags: ["Auth"],
            description: "Realiza login do usuário e retorna um token JWT.",
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/LoginRequest",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Login bem-sucedido",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/AuthResponse",
                            },
                        },
                    },
                },
                401: {
                    description: "Credenciais inválidas",
                },
            },
        },
    },

    "/users/logout": {
        post: {
            summary: "Logout do usuário",
            tags: ["Auth"],
            description: "Invalida o token de autenticação do usuário.",
            security: [{ BearerAuth: [] }],
            responses: {
                200: {
                    description: "Logout bem-sucedido",
                },
                401: {
                    description: "Não autorizado",
                },
            },
        },
    },

    "/users/refresh-token": {
        post: {
            summary: "Renovar token de acesso",
            tags: ["Auth"],
            description: "Gera um novo token JWT baseado no refresh token.",
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/RefreshTokenRequest",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Token atualizado",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/AuthResponse",
                            },
                        },
                    },
                },
                401: {
                    description: "Token inválido ou expirado",
                },
            },
        },
    },
};
