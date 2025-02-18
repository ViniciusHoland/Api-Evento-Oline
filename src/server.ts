import { fastify} from 'fastify'
import  { fastifyCors } from '@fastify/cors'
import {
    validatorCompiler,
    serializerCompiler
} from 'fastify-type-provider-zod'
import { z } from 'zod'

const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, {
    origin: true,
})

app.post('/subscriptions', {
    schema: {
        body: {
            name: z.string(),
            email: z.string().email()
        }
    }
} , () => {})



app.listen({port : 3333}).then(() => {
    console.log('Server is running on port 3333')
})