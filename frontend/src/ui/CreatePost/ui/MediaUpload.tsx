import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { ChangeEvent, FC, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

interface Props {
	toggleMediaUpload: (toggle: boolean) => void;
}

export const MediaUpload: FC<Props> = ({ toggleMediaUpload }) => {
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

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
			<Box
				backgroundColor="gray.700"
				padding={2}
				border="1px"
				borderColor="gray.800"
				rounded="md"
				position="relative"
			>
				<Button
					position="absolute"
					top={2}
					right={2}
					variant="circledButton"
					onClick={() => toggleMediaUpload(false)}
				>
					<IoCloseCircle size={28} />
				</Button>
				<Flex
					justifyContent="center"
					alignItems="center"
					backgroundColor="gray.800"
					height={200}
				>
					{selectedFiles.length ? (
						<>
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
						</>
					) : (
						<Text>Add Photos / Videos</Text>
					)}
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
				></Input>
			</Box>
		</>
	);
};
