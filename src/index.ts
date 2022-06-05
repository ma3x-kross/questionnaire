import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db';
import surveyRoutes from './routes/surveyRoutes'
import questionRoutes from './routes/questionRoutes'
import answerRoutes from './routes/answerRoutes'

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express()
dotenv.config()
connectDB()

app.use(express.json())

const swaggerOptions = {
    openapi: '4.4.0',
    swaggerDefinition: {
        info: {
            title: 'Questionnaire REST API',
            version: '1.0.0',
            description: "A REST API built with Express and MongoDB."
        },
        servers: [
            {
              url: 'http://localhost:3000',
              description: 'Development server',
            },
          ],
    },
    
    apis: [`${__dirname}/routes/surveyRoutes.ts`,
           `${__dirname}/routes/questionRoutes.ts`,
           `${__dirname}/routes/answerRoutes.ts`]
}


app.use(surveyRoutes) // tells server to use routers in surveyRoutes.ts
app.use(questionRoutes) // tells server to use routers in questionRoutes.ts
app.use(answerRoutes) // tells server to use routers in answerRouters.ts

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const port = process.env.PORT
app.listen(port, () => {
    console.log(`The API is running on port ${port} 🚀🚀🚀`)
})