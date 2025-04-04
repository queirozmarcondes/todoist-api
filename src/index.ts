import express from 'express';
import { swaggerSpec } from './docs/swagger.config';
import swaggerUi from 'swagger-ui-express';
import connectDB from './config/mongoose.config';
import todoistRoutes from './routes/todoist.routes';

const app = express();

app.use(express.json());
connectDB();

// Swagger na rota /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Usar as rotas do Todoist
app.use('/todoist', todoistRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
