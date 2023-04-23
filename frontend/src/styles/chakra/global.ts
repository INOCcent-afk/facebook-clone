import { CSSProperties } from "react";

interface GlobalStyles {
	[key: string]: CSSProperties;
}
const global: GlobalStyles = {
	body: {
		minHeight: "100vh",
		color: "#000000",
	},

	"#root": {
		minHeight: "100vh",
	},
};

export default global;
