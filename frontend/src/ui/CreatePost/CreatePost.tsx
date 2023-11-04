import {
	Box,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	ModalProps,
} from "@chakra-ui/react";
import React, { FC } from "react";

interface Props extends Omit<ModalProps, "children"> {}

export const CreatePost: FC<Props> = ({ ...restProps }) => {
	return (
		<Modal {...restProps}>
			<ModalOverlay />
			<ModalContent paddingBottom={8}>
				<ModalCloseButton zIndex={1} />
				<ModalBody>
					<Box></Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
