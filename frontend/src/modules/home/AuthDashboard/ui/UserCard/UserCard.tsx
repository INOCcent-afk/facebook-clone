import { Box, Button, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";

type Props =
	| { type: "user"; imageUrl: string; name: string }
	| { type: "add_account" };

export const UserCard: FC<Props> = (props): JSX.Element => {
	const CARD_HEIGHT = 160;
	const CARD_WIDTH = 160;

	const isUser = props.type === "user";

	return (
		<Box position="relative">
			<Button
				variant="unstyled"
				position="absolute"
				top={1}
				left={1}
				zIndex={10}
			>
				<AiFillCloseCircle
					size={20}
					aria-label="remove previous signedin user"
				/>
			</Button>
			<Button
				borderRadius={4}
				overflow="hidden"
				width={CARD_WIDTH}
				height={206}
				backgroundColor="white"
				border={1}
				boxShadow="gray"
				_hover={{
					opacity: 1,
				}}
				variant="unstyled"
			>
				<VStack height="full">
					<Box
						position="relative"
						height={CARD_HEIGHT}
						width={CARD_WIDTH}
						display="flex"
						alignItems="center"
						justifyContent="center"
						backgroundColor="gray.100"
					>
						{isUser ? (
							<Image
								fill
								priority
								src={props.imageUrl}
								alt={`Profile image of ${props.name}`}
							/>
						) : (
							<Box color="brand">
								<AiFillPlusCircle size={48} />
							</Box>
						)}
					</Box>
					<Box
						textAlign="center"
						flex={1}
						height="full"
						marginTop="0px !important"
						display="flex"
						alignItems="center"
						color={isUser ? "black" : "brand"}
					>
						<Text>{isUser ? props.name : "Add Account"} </Text>
					</Box>
				</VStack>
			</Button>
		</Box>
	);
};
