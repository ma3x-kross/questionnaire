import asyncHandler from 'express-async-handler'
import Survey from '../../models/Survey'


// @desc     Get all surveys
// @route    GET /surveys
// @access   Private
export const getAllSurveys = asyncHandler(async(req, res) => {
    
    const survey = await Survey.find({}).populate('question')
    if(!survey) res.status(404).json({})
    else res.status(200).json(survey)
   
})

// @desc     Get survey
// @route    GET /surveys/:id
// @access   Private
export const getSurvey = asyncHandler(async(req, res) => {
    const _id = req.params.id

    const survey = await Survey.findById({_id}).populate('question')
    if(!survey) res.status(404).json({})
    else res.status(200).json(survey)
   
})


// @desc     Create survey
// @route    POST /surveys
// @access   Private
export const createNewSurvey = asyncHandler(async(req, res) => {
    const { name, questionIds} = req.body
    

    const survey = await Survey.create({
        name: name,
        question: questionIds
        
    })

    res.json(survey)
    
})

// @desc     Update survey
// @route    PUT /surveys/:id
// @access   Private
export const updateSurvey = asyncHandler(async(req, res) => {
    const _id = req.params.id
    const { name, questionIds } = req.body

    const survey = await Survey.findById(_id)

    if(!survey) {
        res.status(404)
        throw new Error('The survey wasn\'t found!')
    }
    survey.name = name
    survey.question = questionIds

    const updateSurvey = await survey.save()

    res.status(200).json(updateSurvey)
    
})

// @desc     Delete survey
// @route    DELETE /surveys/:id
// @access   Private
export const deleteSurvey = asyncHandler(async (req, res) => {
    const _id = req.params.id
    const survey = await Survey.deleteOne({_id})
    if(survey.deletedCount === 0){
        res.status(404).json()
        throw new Error('The survey wasn\'t found!')
    }
    else{
        res.status(204).json({message: 'Survey has been removed'})
    }
})