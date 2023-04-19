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

	".rcp": {
		padding: "16px",
		borderRadius: 8,
		boxShadow:
			"0px 10px 15px rgba(31, 41, 55, 0.1), 0px 4px 6px rgba(31, 41, 55, 0.05)",
	},
};

export default global;
