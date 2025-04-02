import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import connectDB from './config/mongoose.config';
import todoistRoutes from './routes/todoist.routes';

const app = express();

app.use(express.json()); // Middleware para analisar JSON no corpo das requisições
// Conecta ao banco de dados MongoDB
connectDB();

// Configuração do Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todoist API',
      version: '1.0.0',
      description: 'API para gerenciamento de Todoists',
    },
  },
  apis: ['./src/routes/todoist.routes.ts'], // Caminho para os arquivos de rotas
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Usar o Swagger UI para exibir a documentação
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Usar as rotas do Todoist
app.use('/todoist', todoistRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
