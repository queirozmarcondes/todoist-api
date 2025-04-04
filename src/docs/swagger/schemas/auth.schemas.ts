export const authSchema = {
    LoginRequest: {
        type: "object",
        required: ["email", "password"],
        properties: {
            email: {
                type: "string",
                format: "email",
                example: "usuario@example.com",
            },
            password: {
                type: "string",
                format: "password",
                example: "senha123",
            },
        },
    },

    RefreshTokenRequest: {
        type: "object",
        required: ["refreshToken"],
        properties: {
            refreshToken: {
                type: "string",
                example: "eyJhbGciOiJIUzI1...",
            },
        },
    },

    AuthResponse: {
        type: "object",
        properties: {
            accessToken: {
                type: "string",
                example: "eyJhbGciOiJIUzI1...",
            },
            refreshToken: {
                type: "string",
                example: "eyJhbGciOiJIUzI1...",
            },
        },
    },
};
