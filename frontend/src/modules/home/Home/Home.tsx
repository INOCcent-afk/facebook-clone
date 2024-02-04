import Head from "next/head";
import { AuthDashboard } from "../AuthDashboard";
import { Feed } from "../Feed";
import { useAuth } from "@/contexts";
import { Box, Button } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import S3 from "aws-sdk/clients/s3";

const s3 = new S3({
	accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
	secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY,
	region: process.env.NEXT_PUBLIC_REGION,
	signatureVersion: "v4",
});

export const Home = () => {
	const { user } = useAuth();

	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

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

			return preSignedUrl;
		} catch (error) {
			console.error("Error generating pre-signed URL:", error);
			throw error;
		}
	};

	const handleGenerateUrlAndStore = async () => {
		try {
			for (const file of selectedFiles) {
				const preSignedUrl = await generatePresignedUrl(file);
				await fetch(preSignedUrl, {
					method: "PUT",
					body: file,
				});

				// Store to database
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const files: FileList = e.target.files;
			const imageFiles: File[] = Array.from(files).filter((file) =>
				file.type.startsWith("image/")
			);
			setSelectedFiles([...selectedFiles, ...imageFiles]);
		}
	};

	return (
		<>
			<Head>
				<title>Facebook - log in or sign up </title>
				<meta
					name="description"
					content="Facebook - log in or sign up"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box>
				<div>
					<input
						type="file"
						accept="image/png, image/jpeg"
						multiple
						onChange={handleFileChange}
					/>
					<div>
						<h4>Selected Image Files:</h4>
						<ul>
							{selectedFiles.map((file, index) => (
								<img
									key={index}
									src={URL.createObjectURL(file)}
									alt={`Selected Image ${index + 1}`}
									style={{
										maxWidth: "100px",
										maxHeight: "100px",
										margin: "5px",
									}}
								/>
							))}
						</ul>
					</div>
				</div>
			</Box>

			<Button onClick={handleGenerateUrlAndStore}>Submit</Button>

			{user ? <Feed /> : <AuthDashboard />}
		</>
	);
};
