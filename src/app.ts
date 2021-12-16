import express from 'express';
import cors from 'cors';
import connectDatabase from "./database";
import { serverErrorMiddleware } from './middlewares/serverErrorMiddleware';
import examsRouter from './routers/examsRouter';
const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
    res.send('aloo');
});

app.use('/exams', examsRouter)

app.use(serverErrorMiddleware);

export async function init () {
    await connectDatabase();
}

export default app;

