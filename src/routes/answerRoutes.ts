import { createNewAnswer, deleteAnswer, getAnswer, getAnswers, updateAnswer } 
from '../controllers/Answer/answerController';
import express from 'express'


const router = express.Router()
const jsonParser = express.json()


/**
 * @swagger
 * /answers:
 *   get:
 *     description: All answers
 *     responses:
 *       200:
 *         description: Returns all the answers
 */
router.get('/answers', getAnswers)

/**
 * @swagger
 * /answers/{id}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The answer ID.
 *     description: Get a answer by id
 *     responses:
 *       200:
 *         description: Returns the requested answer
 */
router.get('/answers/:id', getAnswer)

/**
 * @swagger
 * /answers:
 *   post:
 *     parameters:
 *      - in: body
 *        name: answer
 *        description: New answer
 *        schema:
 *          type: object
 *          properties:
 *            value:
 *              type: string
 *            isCorrect:
 *               type: boolean
 *           
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/answers', jsonParser, createNewAnswer )

 
/**
 * @swagger
 * /answers/{id}:
 *   put:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The answer ID.
 *      - in: body
 *        name: answer
 *        description: New answer
 *        schema:
 *          type: object
 *          properties:
 *            value:
 *              type: string
 *            isCorrect:
 *               type: boolean
 *           
 *     responses:
 *       201:
 *         description: Created
 */
router.put('/answers/:id', updateAnswer)

/**
 * @swagger
 * /answers/{id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The answer ID.
 *     description: Delete a answer by id
 *     responses:
 *       200:
 *         description: Returns the requested question
 */
router.delete('/answers/:id', deleteAnswer)

export default router
