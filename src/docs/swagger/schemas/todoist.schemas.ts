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
 *         id:
 *           type: string
 *           description: ID único do Todoist
 *         title:
 *           type: string
 *           description: O título do Todoist
 *         description:
 *           type: string
 *           description: A descrição do Todoist (opcional)
 *         completed:
 *           type: boolean
 *           description: Indica se o Todoist foi concluído
 */
export const todoistSchema = {
    Todoist: {
        type: 'object',
        required: ['title', 'completed'],
        properties: {
            description: { type: 'string', description: 'Descrição do Todoist' },
            completed: { type: 'boolean', description: 'Se o Todoist foi concluído' },
        },
    },
};
