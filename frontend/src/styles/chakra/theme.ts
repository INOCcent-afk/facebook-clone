import { extendTheme } from "@chakra-ui/react";
import { Button, Input } from "./componentBaseStyles";
import global from "./global";

export const colors = {
	brand: "#1877f2",
	green: {
		"900": "#42b72a",
	},
	gray: {
		"50": "#f0f2f5",
		"100": "#f5f6f7",
		"500": "#4e4f50",
		"600": "#B0B3B8",
		"700": "#242526",
		"800": "#3a3b3c",
		"900": "#18191a",
	},
};

export const theme = extendTheme({
	styles: {
		global,
	},

	components: {
		Button,
		Input,
	},

	colors,

	shadows: {
		gray: "0 0 0 1px #dddfe2",
	},

	fonts: {
		// eslint-disable-next-line quotes
		heading: `"Helvetica Neue",Helvetica,Arial,sans-serif`,

		// eslint-disable-next-line quotes
		body: `"Helvetica Neue",Helvetica,Arial,sans-serif`,
	},
});
