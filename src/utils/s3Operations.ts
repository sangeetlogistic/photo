import AWS from 'aws-sdk';
import { awsImagePath } from '../constants/general';
import { ACCESS_ID, ACCESS_KEY, REGION } from '../constants/predicates';

export const s3ImageUpload = (fileObj: any, progressFun: React.Dispatch<React.SetStateAction<number>>) =>
    new Promise((resolve) => {
        const fileName = !fileObj.extension ? `${new Date().getTime().toString()}.png` : `${new Date().getTime().toString()}.${fileObj.extension}`;

        AWS.config.update({
            accessKeyId: ACCESS_ID,
            secretAccessKey: ACCESS_KEY,
            region: REGION,
        });
        const s3 = new AWS.S3();

        const params = {
            Bucket: 'photo2painting',
            Key: `${awsImagePath}${fileName}`,
            Body: fileObj,
            ContentType: fileObj.extension ? fileObj.type : 'image/jpeg',
        };

        const options = { partSize: 500 * 1024 * 1024, queueSize: 1 };

        s3.upload(params, options, (err, data) => {
            if (err) {
                console.log('ERR :: ', err);
                // return err;
                resolve({ status: 401 });
            }
            if (data) {
                // return data;
                resolve({ status: 201, data });
            } else {
                resolve({ status: 401 });
                // console.log("error");
                // return 0;
            }
        });

        // .on('httpUploadProgress', (evt: any) => {
        //   const { loaded, total } = evt;
        //   const totalCount = (Number(loaded) * 500) / Number(total);
        //   progressFun(totalCount);
        // });
    });
