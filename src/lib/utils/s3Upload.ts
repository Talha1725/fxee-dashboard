import AWS from 'aws-sdk';

// AWS Configuration from environment variables
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();
const BUCKET_NAME = process.env.S3_BUCKET_NAME;

/**
 * Upload a file to AWS S3 and return the public URL
 * @param file - The file to upload (File object)
 * @returns Promise<string> - The public URL of the uploaded file
 */
export async function uploadToS3(file: File): Promise<string> {
  try {
    // Generate unique filename
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2);
    const fileExtension = file.name.split('.').pop() || 'jpg';
    const fileName = `uploads/${timestamp}_${randomStr}.${fileExtension}`;

    // Validate environment variables
    if (!BUCKET_NAME) {
      throw new Error('S3 bucket name not configured');
    }

    // Upload parameters
    const uploadParams = {
      Bucket: BUCKET_NAME,
      Key: fileName,
      Body: file,
      ContentType: file.type,
      ACL: 'public-read' as const
    };

    // Upload to S3
    const result = await s3.upload(uploadParams).promise();
    
    // Return the public URL
    return result.Location;
  } catch (error) {
    console.error('Error uploading to S3:', error);
    throw new Error('Failed to upload file to S3');
  }
}