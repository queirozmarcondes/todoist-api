import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Rota para verificação do webhook
app.get('/webhook', (req: Request, res: Response) => {
    const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN;
  
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];
  
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }

});

// Rota para receber mensagens do webhook
app.post('/webhook', (req: Request, res: Response) => {
    const body = req.body;
  
    if (body.object === 'whatsapp_business_account') {
      console.log('Mensagem recebida:', JSON.stringify(body, null, 2));
      res.sendStatus(200); // WhatsApp exige essa resposta para não reenviar
    } else {
      res.sendStatus(404);
    }
  });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
