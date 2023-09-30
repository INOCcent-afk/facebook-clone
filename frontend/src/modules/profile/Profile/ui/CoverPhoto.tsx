import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";
import Color from "color-thief-react";

interface Props {}

export const CoverPhoto: FC<Props> = () => {
	return (
		<Color src="/images/MOCK_COVER_PHOTO.jpg" format="hex">
			{({ data, loading, error }) => {
				console.log(error);

				return (
					<Box
						width="full"
						height="462px"
						backgroundImage="linear-gradient(to top, #242526, rgba(36,37,38,.9), rgba(36,37,38,.7), rgba(36,37,38,.4), rgba(36,37,38,0))"
						backgroundColor={data ?? "gray.700"}
						display="flex"
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
						>
							<Image
								src="https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/306750147_5779337345461807_4270497514531994862_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=52f669&_nc_ohc=FI_gjr9LQM8AX-Bw2cm&_nc_ht=scontent.fmnl17-4.fna&oh=00_AfCsiYZHDxJDq0wRaYLByL6dAONCcAW-lJ94R1_kBI27JA&oe=64FC46CD"
								alt="cover photo"
								fill={true}
								style={{
									objectFit: "cover",
								}}
							/>
						</Box>
					</Box>
				);
			}}
		</Color>
	);
};
