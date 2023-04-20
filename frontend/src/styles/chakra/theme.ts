import { extendTheme } from "@chakra-ui/react";
import { Button } from "./componentBaseStyles/Button";
import global from "./global";

export const theme = extendTheme({
	styles: {
		global,
	},

	components: {
		Button,
	},

	colors: {
		brand: "#1877f2",
		gray: {
			"50": "#f0f2f5",
		},
	},

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
