import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema as any

const surveySchema = new mongoose.Schema({
    
            name: {
                type: String,
                required: true
            },
            question: [{
                type: ObjectId,
                ref: 'Question',
                required: true,
                
            },
        ]
    
})

const Survey = mongoose.model('Survey', surveySchema)
export default Survey
