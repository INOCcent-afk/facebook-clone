import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { ChangeEvent, FC } from "react";
import { useFormContext } from "react-hook-form";
import { IoCloseCircle } from "react-icons/io5";
import { CreatePostForm } from "../types/CreatePostForm";

interface Props {
	toggleMediaUpload: (toggle: boolean) => void;
}

const MediaUpload: FC<Props> = React.memo(({ toggleMediaUpload }) => {
	const { setValue, watch } = useFormContext<CreatePostForm>();

	const selectedFiles = watch("files");

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const MAX_LENGTH = 2;

		if (e.target.files) {
			if (Array.from(e.target.files).length > MAX_LENGTH) {
				alert(`Cannot upload files more than ${MAX_LENGTH}`);
			} else {
				const files: FileList = e.target.files;
				const imageFiles: File[] = Array.from(files).filter((file) =>
					file.type.startsWith("image/")
				);

				setValue("files", [...selectedFiles, ...imageFiles]);
			}
		}
	};

	const removeMedia = () => {
		toggleMediaUpload(false);
		setValue("files", []);
	};

	const removeFile = (selectedFile: File) => {
		const filteredFiles = selectedFiles.filter(
			(file) => file !== selectedFile
		);

		setValue("files", filteredFiles);
	};

	return (
		<>
			<Box
				backgroundColor="gray.700"
				padding={2}
				border="1px"
				borderColor="gray.800"
				rounded="md"
				position="relative"
			>
				<Flex position="absolute" top={4} right={4} zIndex={1} gap={4}>
					{selectedFiles?.length && selectedFiles.length <= 2 ? (
						<Button>
							<Input
								type="file"
								accept="image/png, image/jpeg"
								aria-hidden="true"
								height="100%"
								width="100%"
								position="absolute"
								top="0"
								left="0"
								opacity="0"
								appearance="none"
								multiple
								onChange={handleFileChange}
								cursor="pointer"
							></Input>
							<Text>Add photo</Text>
						</Button>
					) : null}
					<Button variant="circledButton" onClick={removeMedia}>
						<IoCloseCircle size={28} />
					</Button>
				</Flex>

				{selectedFiles?.length ? (
					<Flex
						justifyContent="center"
						alignItems="center"
						backgroundColor="gray.800"
						height={300}
						overflow="hidden"
						rounded="md"
					>
						{selectedFiles.map((file) => (
							<Flex
								position="relative"
								key={file.lastModified}
								width="full"
								height="full"
							>
								<Button
									position="absolute"
									top="50%"
									right="50%"
									bottom="50%"
									left="50%"
									width="fit-content"
									transform="translate(-50%,-50%)"
									variant="lightGray"
									onClick={() => removeFile(file)}
									zIndex={1}
								>
									Remove Image
								</Button>
								<Box
									position="relative"
									width="full"
									height="full"
									opacity={0.8}
								>
									<Image
										src={URL.createObjectURL(file)}
										alt={file.name}
										fill
										style={{
											objectFit: "cover",
										}}
									/>
								</Box>
							</Flex>
						))}
					</Flex>
				) : (
					<>
						<Flex
							justifyContent="center"
							alignItems="center"
							backgroundColor="gray.800"
							height={300}
						>
							<Text>Add Photos / Videos</Text>
						</Flex>

						<Input
							type="file"
							accept="image/png, image/jpeg"
							aria-hidden="true"
							height="100%"
							width="100%"
							position="absolute"
							top="0"
							left="0"
							opacity="0"
							appearance="none"
							multiple
							onChange={handleFileChange}
							cursor="pointer"
						></Input>
					</>
				)}
			</Box>
		</>
	);
});

export { MediaUpload };
