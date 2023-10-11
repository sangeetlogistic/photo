import AWS from 'aws-sdk';
import { awsImagePath, awsVideoPath } from '../constants/general';
import { ACCESS_ID, ACCESS_KEY, REGION } from '../constants/predicates';

export const s3ImageUpload = (fileObj: any, video: boolean = false) =>
    new Promise((resolve) => {
        const fileName = !fileObj.extension
            ? `${new Date().getTime().toString()}.${!video ? 'png' : 'mp4'}`
            : `${new Date().getTime().toString()}.${fileObj.extension}`;

        AWS.config.update({
            accessKeyId: ACCESS_ID,
            secretAccessKey: ACCESS_KEY,
            region: REGION,
        });
        const s3 = new AWS.S3();

        const params = {
            Bucket: 'photo2painting',
            Key: `${!video ? awsImagePath : awsVideoPath}${fileName}`,
            Body: fileObj,
            ContentType: fileObj.extension ? fileObj.type : `${!video ? 'image/jpeg' : 'video/mp4'}`,
        };

        const options = { partSize: 500 * 1024 * 1024, queueSize: 1 };

        s3.upload(params, options, (err, data) => {
            if (err) {
                resolve({ status: 401 });
            }
            if (data) {
                resolve({ status: 201, data });
            } else {
                resolve({ status: 401 });
            }
        });
    });
