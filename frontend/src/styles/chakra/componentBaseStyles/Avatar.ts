import { avatarAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
	avatarAnatomy.keys
);

export const Avatar = defineMultiStyleConfig({
	sizes: {
		lg: {
			container: {
				height: "60px",
				width: "60px",
			},
		},
		md: {
			container: {
				height: "38px",
				width: "38px",
			},
		},
		sm: {
			container: {
				height: "24px",
				width: "24px",
			},
		},
	},

	defaultProps: {
		size: "md",
	},
});
