import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';

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
    storage: storageTypes['s3'],
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (_req: any, file: any, cb: any) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif',
        ]

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('invalid file type'));
        }
    },
}

export default multerConfig;