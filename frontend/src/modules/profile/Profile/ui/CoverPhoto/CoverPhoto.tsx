import { Box, Input } from "@chakra-ui/react";
import Image from "next/image";
import React, { ChangeEvent, FC } from "react";
import Color from "color-thief-react";
import { MdOutlineCameraAlt } from "react-icons/md";
import { useProfileStore } from "../../stores/useProfileStore";

interface Props {
	isEditorMode: boolean;
	coverPhoto: string | undefined | null;
}

export const CoverPhoto: FC<Props> = ({ isEditorMode, coverPhoto }) => {
	const { file, updateFile } = useProfileStore();

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const MAX_LENGTH = 1;

		if (e.target.files) {
			if (Array.from(e.target.files).length > MAX_LENGTH) {
				alert(`Cannot upload files more than ${MAX_LENGTH}`);
			} else {
				const files: FileList = e.target.files;
				const imageFiles: File[] = Array.from(files).filter((file) =>
					file.type.startsWith("image/")
				);

				updateFile(imageFiles[0]);
			}
		}
	};

	const getImage = () => {
		if (isEditorMode && !file) {
			return coverPhoto;
		}

		if (!isEditorMode && coverPhoto) {
			return coverPhoto;
		}

		if (isEditorMode && file) {
			return URL.createObjectURL(file);
		}

		return null;
	};

	return (
		<Color src={`${getImage()}`} format="hex">
			{({ data }) => {
				return (
					<Box
						width="full"
						height="462px"
						backgroundImage="linear-gradient(to top, #242526, rgba(36,37,38,.9), rgba(36,37,38,.7), rgba(36,37,38,.4), rgba(36,37,38,0))"
						backgroundColor={data ?? "black"}
						display="flex"
						justifyContent="center"
						position="relative"
					>
						<Box
							width="full"
							height="full"
							position="absolute"
							display="flex"
							alignItems="center"
							justifyContent="center"
						>
							<Box
								position="relative"
								height="full"
								width="full"
								maxWidth={1250}
								borderBottomLeftRadius={10}
								borderBottomRightRadius={10}
								overflow="hidden"
								backgroundColor="gray.700"
								color="brand"
							>
								{file || coverPhoto ? (
									<Image
										src={`${getImage()}`}
										alt="cover photo"
										fill={true}
										style={{
											objectFit: "cover",
										}}
										blurDataURL="https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/306750147_5779337345461807_4270497514531994862_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=52f669&_nc_ohc=FI_gjr9LQM8AX-Bw2cm&_nc_ht=scontent.fmnl17-4.fna&oh=00_AfCsiYZHDxJDq0wRaYLByL6dAONCcAW-lJ94R1_kBI27JA&oe=64FC46CD"
										placeholder="blur"
									/>
								) : (
									<Box
										backgroundColor="gray.700"
										width="full"
										height="full"
									></Box>
								)}
							</Box>

							{isEditorMode && (
								<>
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
										cursor="pointer"
										zIndex={1}
										onChange={handleFileChange}
									></Input>

									<Box
										width="full"
										height="full"
										position="absolute"
										display="flex"
										alignItems="center"
										justifyContent="center"
										backgroundColor="#00000080"
										color="whiteAlpha.600"
									>
										<MdOutlineCameraAlt size={100} />
									</Box>
								</>
							)}
						</Box>
					</Box>
				);
			}}
		</Color>
	);
};
