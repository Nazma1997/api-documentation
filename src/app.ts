import express, {Express} from 'express';
import helmet from "helmet";
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import routes from './api/v1/routes/index'
import swaggerConfig from '../config/swaggerConfig'
dotenv.config();
  
const app : Express = express();
app.use(helmet());
app.use(morgan('combined'))
app.use(express.json());
app.use(cors())
app.use(routes)

swaggerConfig(app)


app.get("/", (req, res) => {
    res.send('You are landed an empty ocean')
})



export default app