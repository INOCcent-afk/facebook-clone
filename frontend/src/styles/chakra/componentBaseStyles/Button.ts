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

			_hover: {
				_disabled: {
					backgroundColor: "brand",
				},
			},
		},

		secondary: {
			backgroundColor: "green.900",

			_hover: {
				_disabled: {
					backgroundColor: "green.900",
				},
			},
		},

		circledButton: {
			backgroundColor: "gray.800",
			borderRadius: "50%",
			padding: 0,

			_hover: {
				backgroundColor: "gray",

				_disabled: {
					backgroundColor: "gray",
				},
			},
		},

		gray: {
			backgroundColor: "gray.400",

			_hover: {
				_disabled: {
					backgroundColor: "gray.400",
				},
			},
		},

		lightGray: {
			backgroundColor: "gray.800",

			_hover: {
				_disabled: {
					backgroundColor: "gray.800",
				},
			},
		},

		circleUnstyled: {
			padding: 0,
			height: 10,
			width: 10,
			fontWeight: "normal",
			borderRadius: "50%",

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

			_hover: {
				backgroundColor: "gray.800",
			},
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
