export const userSchema = {
    User: {
        type: "object",
        properties: {
            id: { type: "string", description: "ID do usuário" },
            name: { type: "string", description: "Nome do usuário" },
            email: { type: "string", format: "email", description: "E-mail do usuário" },
            password: { type: "string", description: "Senha criptografada do usuário" },
        },
    },
    UserInput: {
        type: "object",
        properties: {
            name: { type: "string", description: "Nome do usuário" },
            email: { type: "string", format: "email", description: "E-mail do usuário" },
            password: { type: "string", description: "Senha do usuário" },
        },
        required: ["name", "email", "password"],
    },
};
