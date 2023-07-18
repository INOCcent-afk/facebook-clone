import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
	baseStyle: {
		borderRadius: 8,
		paddingY: 2,
		paddingX: 4,
		color: "white",
	},

	sizes: {
		md: {},

		circledMd: {
			width: 38,
			height: 38,
		},
	},

	variants: {
		primary: {
			backgroundColor: "brand",
		},

		secondary: {
			backgroundColor: "green.900",
		},

		circledButton: {
			backgroundColor: "gray.800",
			borderRadius: "50%",
			padding: 0,

			_hover: {
				backgroundColor: "gray",
			},
		},

		gray: {
			backgroundColor: "gray.400",
		},

		unstyled: {
			padding: 0,
			height: "fit-content",
			width: "fit-content",
			fontWeight: "normal",

			...Object.fromEntries(
				[
					"_hover",
					"_active",
					"_focus",
					"_visited",
					"_focusVisible",
					"_focusWithin",
				].map((prop) => [prop, { opacity: 1 }])
			),
		},
	},

	defaultProps: {
		variant: "primary",
		size: "md",
	},
});
