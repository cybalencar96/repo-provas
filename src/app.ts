import express from 'express';
import cors from 'cors';
import connectDatabase from "./database";
import { serverErrorMiddleware } from './middlewares/serverErrorMiddleware';
import examsRouter from './routers/examsRouter';
import teacherRouter from './routers/teacherRouter';
import subjectRouter from './routers/subjectRouter';


import multer from 'multer';
import multerConfig from './multer.config';
import { getRepository } from 'typeorm';
import { FileEntity } from './entities/FileEntity';


const app = express();

app.use(cors());
app.use(express.json());

app.use('/exams', examsRouter);
app.use('/teachers', teacherRouter);
app.use('/subjects', subjectRouter);

app.post('/myfile', multer(multerConfig).single('file') ,async (req, res) => {
    const file = getRepository(FileEntity).create({
        name: req.file.originalname,
        url: '',
        size: req.file.size,
        key: req.file.filename,
    });

    const newFile = await getRepository(FileEntity).save(file);

    return res.send(newFile)
})

app.use(serverErrorMiddleware);

export async function init () {
    return await connectDatabase();
}

export default app;

