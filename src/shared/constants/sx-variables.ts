import type { SxProps, Theme } from "@mui/material";

export const sxVariables = {
	padding: {
		small: "10px",
		medium: "16px",
		large: "20px",
	},
	spacing: {
		small: 1,
		medium: 2,
		large: 3,
	},
} as const;

export const commonSx = {
	flexCenter: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	} as SxProps<Theme>,
	flexBetween: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	} as SxProps<Theme>,
};
