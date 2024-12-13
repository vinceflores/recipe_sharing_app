import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
@Injectable()
export class AppService {
  AWS_S3_BUCKET = 'recipesharingvf';
  s3 = new AWS.S3({
    accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
    // region: 'us-east-2',
  });

  getHello(): string {
    return 'Hello World!';
  }

  async uploadFile(file) {
    console.log(file);
    const { originalname } = file;

    return await this.s3_upload(
      file.buffer,
      this.AWS_S3_BUCKET,
      originalname,
      file.mimetype,
    );
  }

  async s3_upload(file: File, bucket: string, name: string, mimetype: any) {
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
      ACL: 'public-read',
      ContentType: mimetype,
      ContentDisposition: 'inline',
      CreateBucketConfiguration: {
        LocationConstraint: 'ap-south-1',
      },
    };
    // https://recipesharingvf.s3.us-east-2.amazonaws.com/Diagram+Export+Jan+11+2024.png
    try {
      const s3Response = await this.s3.upload(params).promise();
      const getObjectsParams = {
        Bucket: s3Response.Bucket, // Replace with your bucket name
        Key: String(s3Response.Key), // Replace with your object key
        Expires: 6000, // URL expiry in seconds (e.g., 60 seconds)
      };

      const seClient = new AWS.S3({
        accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
        region: (await this.getBucketRegion(this.AWS_S3_BUCKET)) as string,
      });

      const url = await seClient.getSignedUrlPromise(
        'getObject',
        getObjectsParams,
      );

      return { url };
    } catch (e) {
      console.log(e);
    }
  }

  async uploadFiles(files: File[]) {
    return await this.s3_uploadMany(files, this.AWS_S3_BUCKET);
  }
  private s3_uploadMany(files: File[], bucket: string) {}

  private async getBucketRegion(bucketName: string) {
    try {
      const data = await this.s3
        .getBucketLocation({ Bucket: bucketName })
        .promise();
      return data.LocationConstraint || 'us-east-1'; // Default to us-east-1 if no constraint
    } catch (error) {
      console.error('Error fetching bucket region:', error);
      throw error;
    }
  }
}
