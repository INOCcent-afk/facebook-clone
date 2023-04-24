import { avatarAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
	avatarAnatomy.keys
);

export const Avatar = defineMultiStyleConfig({
	sizes: {
		md: {
			container: {
				height: 38,
				width: 38,
			},
		},
	},

	defaultProps: {
		size: "md",
	},
});
