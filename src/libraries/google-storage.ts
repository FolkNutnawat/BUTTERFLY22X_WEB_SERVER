import { Storage } from '@google-cloud/storage';
import { randomUUID } from 'crypto';
import { GCS_BUCKET } from '../configs/environments';

const storage = new Storage({
  projectId: 'butterfly22x-web-server',
  keyFilename: 'butterfly22x-web-server-c6808a9ad253.json',
});

export const bucket = storage.bucket(GCS_BUCKET);

export const uploadFile = (file: Express.Multer.File, ref = '') => {
  return new Promise((resolve, reject) => {
    const fileName = file.originalname.split('.');
    const blob = bucket.file(`${ref ? ref + '/' : ''}${fileName[0] + randomUUID()}.${fileName.slice(-1)[0]}`);
    const blobStream = blob.createWriteStream();

    blobStream.on('error', (err: any) => {
      console.log(err);
      file.uploadError = err;
      reject({ success: false, file });
    });

    blobStream.on('finish', () => {
      // The public URL can be used to directly access the file via HTTP.
      file.ref = blob.name;
      file.publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      resolve({ success: true, file });
    });

    blobStream.end(file.buffer);
  });
};
