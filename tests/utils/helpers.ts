import fs from 'fs';
import path from 'path';

export function deleteFilesFromUploads(fileName: string) {
    const directory =  path.join(__dirname, '../../src/tmp/uploads')

    fs.unlink(path.join(directory, fileName), (err) => {
        if (err) throw err;
    });
}