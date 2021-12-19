import express from 'express';
import cors from 'cors';
import connectDatabase from "./database";
import { serverErrorMiddleware } from './middlewares/serverErrorMiddleware';
import examsRouter from './routers/examsRouter';
import teacherRouter from './routers/teacherRouter';
import subjectRouter from './routers/subjectRouter';
import multer from 'multer';
import multerConfig from './multer.config';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/exams', examsRouter);
app.use('/teachers', teacherRouter);
app.use('/subjects', subjectRouter);

app.post('/myfile', multer(multerConfig).single('file') ,async (req, res) => {
    return res.send(req.file)
})

app.use(serverErrorMiddleware);

export async function init () {
    return await connectDatabase();
}

export default app;

