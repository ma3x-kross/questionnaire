import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema as any

const questionSchema = new mongoose.Schema({
    
            description: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            answer: [{
                type: ObjectId,
                ref: 'Answer',
                required: true,
                
            },
        ]
    
})

const Question = mongoose.model('Question', questionSchema)
export default Question
