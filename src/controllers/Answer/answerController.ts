import asyncHandler from 'express-async-handler'
import Answer from '../../models/Answer'

// @desc     Create new answer
// @route    POST /answer
// @access   Private
export const createNewAnswer = asyncHandler(async(req, res) => {
    const { value, isCorrect } = req.body

    const question = await Answer.create({
        value,
        isCorrect
    })
    res.status(201).json(question)
    
})


// @desc     Update  answer
// @route    PUT /answers/:id
// @access   Private
export const updateAnswer = asyncHandler(async(req, res) => {
    const _id = req.params.id
    const { value, isCorrect } = req.body

    const answer = await Answer.findById(_id)

    if(!answer) {
        res.status(404)
        throw new Error('The answer wasn\'t found!')
    }
    answer.value = value
    answer.isCorrect = isCorrect

    const updateAnswer = await answer.save()

    res.status(200).json(updateAnswer)
    
})

// @desc     Delete answer
// @route    DELETE /answers/:id
// @access   Private
export const deleteAnswer = asyncHandler(async (req, res) => {
    const _id = req.params.id
    const answer = await Answer.deleteOne({_id})
    if(answer.deletedCount === 0){
        res.status(404).json()
        throw new Error('The answer wasn\'t found!')
    }
    else{
        res.status(204).json({message: 'Answer has been removed'})
    }
})

// @desc     Get answers
// @route    GET /answers
// @access   Private
export const getAnswers = asyncHandler(async(req, res) => {
    const answer = await Answer.find()
     res.status(200).json(answer)
   
})

// @desc     Get answer
// @route    GET /answers/:id
// @access   Private
export const getAnswer = asyncHandler(async(req, res) => {
    const _id = req.params.id

    const answer = await Answer.find({_id})
    if(!answer) res.status(404).json({})
    else res.status(200).json(answer)
})