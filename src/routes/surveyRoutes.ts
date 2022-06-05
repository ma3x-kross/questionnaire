import { getSurvey, createNewSurvey, updateSurvey, deleteSurvey, getAllSurveys } from './../controllers/Survey/surveyController';
import express from 'express'


const router = express.Router()
const jsonParser = express.json()


/**
 * @swagger
 * /surveys:
 *   get:
 *     description: All surveys
 *     responses:
 *       200:
 *         description: Returns all the surveys
 */
router.get('/surveys', getAllSurveys)

/**
 * @swagger
 * /surveys/{id}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The survey ID.
 *     description: Get a survey by id
 *     responses:
 *       200:
 *         description: Returns the requested surveys
 */
router.get('/surveys/:id', getSurvey)



/**
 * @swagger
 * /surveys:
 *   post:
 *     parameters:
 *      - in: body
 *        name: survey
 *        description: New survey
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *            questionIds:
 *              type: array
 *              items:
 *                type: string
 *           
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/surveys', jsonParser, createNewSurvey )

/**
 * @swagger
 * /surveys/{id}:
 *   put:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The survey ID.
 *      - in: body
 *        name: survey
 *        description: Update survey
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *            questionIds:
 *              type: array
 *              items:
 *                type: string
 *           
 *     responses:
 *       201:
 *         description: Created
 */
router.put('/surveys/:id', updateSurvey)

/**
 * @swagger
 * /surveys/{id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The survey ID.
 *     description: Delete a survey by id
 *     responses:
 *       200:
 *         description: Returns the requested survey
 */
router.delete('/surveys/:id', deleteSurvey)

export default router
