"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Rota para verificação do webhook
app.get('/webhook', (req, res) => {
    const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN;
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        console.log('WEBHOOK_VERIFIED');
        res.status(200).send(challenge);
    }
    else {
        res.sendStatus(403);
    }
});
// Rota para receber mensagens do webhook
app.post('/webhook', (req, res) => {
    const body = req.body;
    if (body.object === 'whatsapp_business_account') {
        console.log('Mensagem recebida:', JSON.stringify(body, null, 2));
        res.sendStatus(200); // WhatsApp exige essa resposta para não reenviar
    }
    else {
        res.sendStatus(404);
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
