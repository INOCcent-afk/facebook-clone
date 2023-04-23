import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
	baseStyle: {
		borderRadius: 8,
		paddingY: 2,
		paddingX: 4,
		color: "white",
	},

	variants: {
		primary: {
			backgroundColor: "brand",
		},

		secondary: {
			backgroundColor: "green.900",
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
