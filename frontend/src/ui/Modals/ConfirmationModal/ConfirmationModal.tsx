import {
	Box,
	Button,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	ModalProps,
	Text,
} from "@chakra-ui/react";
import React, { FC } from "react";

interface Props extends Omit<ModalProps, "children"> {
	title: string;
	handleConfirm: () => void;
}

export const ConfirmationModal: FC<Props> = ({
	title,
	handleConfirm,
	...restProps
}) => {
	return (
		<Modal isCentered {...restProps}>
			<ModalOverlay />
			<ModalContent backgroundColor="gray.700" color="white">
				<ModalCloseButton zIndex={1} />

				<ModalBody>
					<Box textAlign="center" pt={10} pb={2}>
						<Text>{title}</Text>
						<Flex my={4} justifyContent="center" gap={4}>
							<Button onClick={handleConfirm}>Confirm</Button>
							<Button onClick={restProps.onClose}>Cancel</Button>
						</Flex>
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
