import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const multerConfig = {
    dest: path.resolve(__dirname, 'tmp', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, 'tmp', 'uploads'))
        },
        filename: (req, file, cb) => {
            const hash = crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err, file.originalname)

                const fileName = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, fileName);
            })
        }
    }),
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