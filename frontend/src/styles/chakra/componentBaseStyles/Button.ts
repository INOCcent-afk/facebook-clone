import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
	baseStyle: {
		borderRadius: 15,
	},
	variants: {
		unstyled: {
			padding: 0,
			height: "fit-content",
			width: "fit-content",
		},
	},
});
