import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
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

	variants: {
		gray: {
			field: {
				border: "1px solid",
				borderColor: "gray",

				_hover: {
					borderColor: "black",
				},
			},
		},
	},

	defaultProps: {
		size: "lg",
	},
});
