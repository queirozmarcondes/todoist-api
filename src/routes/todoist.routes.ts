import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { TodoistController } from '../controllers/todoist.controller';

const router = Router();
const todoistController = new TodoistController();

/**
 * @swagger
 * tags:
 *   - name: Todoist
 *     description: API para gerenciar Todoist
 */

/**
 * @swagger
 * /todoist:
 *   post:
 *     summary: Criar um novo Todoist
 *     tags: [Todoist]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título do Todoist
 *               description:
 *                 type: string
 *                 description: Descrição do Todoist
 *               completed:
 *                 type: boolean
 *                 description: Se o Todoist foi concluído
 *             required:
 *               - title
 *               - completed
 *     responses:
 *       201:
 *         description: Todoist criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todoist'
 *       500:
 *         description: Erro ao criar Todoist
 */
router.post('/', asyncHandler(todoistController.create));

/**
 * @swagger
 * /todoist:
 *   get:
 *     summary: Retornar todos os Todoists
 *     tags: [Todoist]
 *     responses:
 *       200:
 *         description: Lista de Todoists
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todoist'
 *       500:
 *         description: Erro ao buscar Todoists
 */
router.get('/', asyncHandler(todoistController.getAll));

/**
 * @swagger
 * /todoist/{id}:
 *   get:
 *     summary: Retornar um Todoist por ID
 *     tags: [Todoist]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do Todoist
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retorna o Todoist com o ID fornecido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todoist'
 *       404:
 *         description: Todoist não encontrado
 *       500:
 *         description: Erro ao buscar Todoist
 */
router.get('/:id', asyncHandler(todoistController.getById));

/**
 * @swagger
 * /todoist/{id}:
 *   put:
 *     summary: Atualizar um Todoist por ID
 *     tags: [Todoist]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do Todoist
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               completed:
 *                 type: boolean
 *             required:
 *               - title
 *               - completed
 *     responses:
 *       200:
 *         description: Todoist atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todoist'
 *       404:
 *         description: Todoist não encontrado
 *       500:
 *         description: Erro ao atualizar Todoist
 */
router.put('/:id', asyncHandler(todoistController.update));

/**
 * @swagger
 * /todoist/{id}:
 *   delete:
 *     summary: Deletar um Todoist por ID
 *     tags: [Todoist]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do Todoist
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Todoist deletado com sucesso
 *       404:
 *         description: Todoist não encontrado
 *       500:
 *         description: Erro ao deletar Todoist
 */
router.delete('/:id', asyncHandler(todoistController.delete));

export default router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Todoist:
 *       type: object
 *       required:
 *         - title
 *         - completed
 *       properties:
 *         title:
 *           type: string
 *           description: O título do Todoist
 *         description:
 *           type: string
 *           description: A descrição do Todoist
 *         completed:
 *           type: boolean
 *           description: Se o Todoist foi concluído
 */
