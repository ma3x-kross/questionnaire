import { createNewQuestion, deleteQuestion, getQuestion, getQuestions, updateQuestion } 
from './../controllers/question/questionController';
import express from 'express'


const router = express.Router()
const jsonParser = express.json()


/**
 * @swagger
 * /questions:
 *   get:
 *     description: All questions
 *     responses:
 *       200:
 *         description: Returns all the questions
 */
router.get('/questions', getQuestions)


/**
 * @swagger
 * /questions/{id}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The question ID.
 *     description: Get a question by id
 *     responses:
 *       200:
 *         description: Returns the requested question
 */
router.get('/questions/:id', getQuestion)

/**
 * @swagger
 * /questions:
 *   post:
 *     parameters:
 *      - in: body
 *        name: question
 *        description: New question
 *        schema:
 *          type: object
 *          properties:
 *            description:
 *              type: string
 *            type:
 *              type: string
 *            answerIds:
 *              type: array
 *              items:
 *                type: string
 *           
 *     responses:
 *       201:
 *         description: Created
 */

router.post('/questions', jsonParser, createNewQuestion )

/**
 * @swagger
 * /questions/{id}:
 *   put:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The question ID.
 *      - in: body
 *        name: question
 *        description: New question
 *        schema:
 *          type: object
 *          properties:
 *            description:
 *              type: string
 *            type:
 *              type: string
 *            answerIds:
 *              type: array
 *              items:
 *                type: string
 *           
 *     responses:
 *       201:
 *         description: Created
 */

router.put('/questions/:id', updateQuestion)

/**
 * @swagger
 * /questions/{id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The question ID.
 *     description: Delete a question by id
 *     responses:
 *       200:
 *         description: Returns the requested question
 */

router.delete('/questions/:id', deleteQuestion)

export default router
