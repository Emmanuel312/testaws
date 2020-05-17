import * as multer from 'multer';
import * as path from 'path';
import * as crypto from 'crypto';
import * as aws from 'aws-sdk';
import * as multerS3 from 'multer-s3'; // storage na web instead no disco
import * as config from 'config';

const upload: any = config.get('upload');

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err, 'err');
        file.filename = `${hash.toString('hex')}-${file.originalname}`;
        cb(null, file.filename);
      });
    },
  }),
  s3:
    process.env.NODE_ENV === 'production' &&
    multerS3({
      s3: new aws.S3({
        accessKeyId: upload.access_key_id,
        secretAccessKey: upload.secret_access_key,
      }),
      bucket: upload.bucket_name,
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: 'public-read',
      key: (req, file, cb) => {
        crypto.randomBytes(16, (err, hash) => {
          if (err) cb(err);
          const fileName = `${hash.toString('hex')}-${file.originalname}`;
          cb(null, fileName);
        });
      },
    }),
};

export const multerConfig = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: storageTypes[upload.storage_type],
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
    ];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type.'));
    }
  },
};
