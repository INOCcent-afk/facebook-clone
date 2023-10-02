import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { cssVar } from "@chakra-ui/theme-tools";

const $bg = cssVar("tooltip-bg");
const $fg = cssVar("tooltip-fg");
const $arrowBg = cssVar("popper-arrow-bg");

const baseStyle = defineStyle(() => {
	const bg = "gray.200";
	const fg = "white";

	return {
		bg: $bg.reference,
		color: $fg.reference,
		paddingY: 2,
		paddingX: 4,
		borderRadius: 8,
		[$bg.variable]: `colors.${bg}`,
		[$fg.variable]: `colors.${fg}`,
		[$arrowBg.variable]: $bg.reference,
	};
});

export const Tooltip = defineStyleConfig({
	baseStyle,
});
