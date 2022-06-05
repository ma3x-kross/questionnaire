import asyncHandler from 'express-async-handler'
import Question from '../../models/Question'


// @desc     Get all quiz questions
// @route    GET /questions
// @access   Private
export const getQuestions = asyncHandler(async(req, res) => {
    const questions = await Question.find({}).populate('answer')
     res.status(200).json(questions)
   
})

// @desc     Get quiz question
// @route    GET /questions/:id
// @access   Private
export const getQuestion = asyncHandler(async(req, res) => {
    const _id = req.params.id

    const question = await Question.findById({_id}).populate('answer')
    if(!question) res.status(404).json({})
    else res.status(200).json(question)
   
})

// @desc     Create new quiz question
// @route    POST /questions
// @access   Private
export const createNewQuestion = asyncHandler(async(req, res) => {
    const { description, type,  answerIds} = req.body
    

    const question = await Question.create({
        description,
        type,
        answer: answerIds
        
    })

    res.json(question)
    
})


// @desc     Update  quiz question
// @route    PUT /questions/:id
// @access   Private
export const updateQuestion = asyncHandler(async(req, res) => {
    const _id = req.params.id
    const { description, type, answerIds } = req.body

    const question = await Question.findById(_id)

    if(!question) {
        res.status(404)
        throw new Error('The question wasn\'t found!')
    }
    question.description = description
    question.type = type
    question.answer = answerIds

    const updateQuestion = await question.save()

    res.status(200).json(updateQuestion)
    
})

// @desc     Delete question
// @route    DELETE /questions/:id
// @access   Private
export const deleteQuestion = asyncHandler(async (req, res) => {
    const _id = req.params.id
    const question = await Question.deleteOne({_id})
    if(question.deletedCount === 0){
        res.status(404).json()
        throw new Error('The question wasn\'t found!')
    }
    else{
        res.status(204).json({message: 'Question has been removed'})
    }
})