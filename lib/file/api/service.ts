import { S3 } from "aws-sdk";

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const bucket = process.env.AWS_BUCKET;

const generateKey = (fileName: string) => {
  // TODO: Generate unique key
  return fileName;
};

export const getUploadKey = async (
  fileName: string,
  fileType: string
): Promise<{ signedRequest: string; url: string }> => {
  return new Promise((resolve, reject) => {
    const key = generateKey(fileName);
    s3.getSignedUrl(
      "putObject",
      {
        Bucket: bucket,
        Key: key,
        ContentType: fileType,
      },
      (error, data) => {
        if (error) reject(error);
        resolve({
          signedRequest: data,
          url: `https://${bucket}.s3.amazonaws.com/${key}`,
        });
      }
    );
  });
};
