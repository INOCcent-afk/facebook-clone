import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
	// define the part you're going to style
	field: {
		color: "black",
		padding: "14px 16px",
		fontSize: 17,
	},
});

export const Input = defineMultiStyleConfig({
	baseStyle,

	sizes: {
		lg: {
			field: {
				fontSize: 17,
			},
		},
	},

	defaultProps: {
		size: "lg",
	},
});
