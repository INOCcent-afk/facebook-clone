import { CSSProperties } from "react";

interface GlobalStyles {
	[key: string]: CSSProperties;
}
const global: GlobalStyles = {
	body: {
		color: "#000000",
	},

	"#root": {
		minHeight: "100vh",
	},
};

export default global;
