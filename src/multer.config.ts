import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import UploadError from './errors/UploadError';

const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, 'tmp', 'uploads'))
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err, file.originalname)

                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                
                cb(null, fileName);
            })
        }
    }),
    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'my-repoprovas',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err, file.originalname)

                const fileName = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, fileName);
            })
        }
    }),
}

const multerConfig = {
    dest: path.resolve(__dirname, 'tmp', 'uploads'),
    storage: storageTypes[process.env.NODE_ENV === 'prod' ? 's3' : 'local'],
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (_req: any, file: any, cb: any) => {
        const allowedMimes = [
            'application/pdf'
        ]

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new UploadError('invalid file type'));
        }
    },
}

export default multerConfig;