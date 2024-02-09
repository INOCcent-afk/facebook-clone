import S3 from "aws-sdk/clients/s3";

const s3 = new S3({
	accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
	secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY,
	region: process.env.NEXT_PUBLIC_REGION,
	signatureVersion: "v4",
});

export const useUploadFiles = () => {
	const generatePresignedUrl = async (file: File) => {
		const fileType = encodeURIComponent(file.type);

		const params = {
			Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME,
			Key: file.name,
			Expires: 60,
			ContentType: `image/${fileType}`,
		};

		try {
			const preSignedUrl = await s3.getSignedUrlPromise(
				"putObject",
				params
			);

			const publicUrl = `https://${process.env.NEXT_PUBLIC_BUCKET_NAME}.s3.amazonaws.com/${file.name}`;

			return { preSignedUrl, publicUrl };
		} catch (error) {
			console.error("Error generating pre-signed URL:", error);
			throw error;
		}
	};

	const handleGenerateUrlAndStore = async (files: File[]) => {
		try {
			let images = [];

			for (const file of files) {
				const { preSignedUrl, publicUrl } = await generatePresignedUrl(
					file
				);

				console.log(file);
				await fetch(preSignedUrl, {
					method: "PUT",
					body: file,
				});

				images.push({ image: publicUrl });
			}

			return images;
		} catch (error) {
			console.error("Error:", error);
			return [];
		}
	};

	return { handleGenerateUrlAndStore };
};
