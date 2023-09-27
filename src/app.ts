import express, { Request, Response} from 'express'
import { router as userRouter} from './routes/user.route'

const app = express()
app.use(userRouter)

export { app }
