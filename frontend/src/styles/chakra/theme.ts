import { extendTheme } from "@chakra-ui/react";
import global from "./global";

const theme = extendTheme({
	styles: {
		global,
	},

	colors: {
		brand: "#1877f2",
		gray: {
			"50": "#f0f2f5",
		},
	},

	fonts: {
		// eslint-disable-next-line quotes
		heading: `"Helvetica Neue",Helvetica,Arial,sans-serif`,

		// eslint-disable-next-line quotes
		body: `"Helvetica Neue",Helvetica,Arial,sans-serif`,
	},
});

export default theme;
