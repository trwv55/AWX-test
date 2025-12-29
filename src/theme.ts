import { createTheme } from "@mui/material/styles";

const checkboxCheckedColor = "#ffd216";

declare module "@mui/material/styles" {
	interface TypographyVariants {
		body1: React.CSSProperties;
		body2: React.CSSProperties;
		sectionTitle: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		sectionTitle?: React.CSSProperties;
	}
}

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		sectionTitle: true;
	}
}

declare module "@mui/material/Paper" {
	interface PaperPropsVariantOverrides {
		volumeInput: true;
		detailsItem: true;
	}
}

const theme = createTheme({
	typography: {
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
		].join(","),
		sectionTitle: {
			fontSize: "18px",
			fontWeight: 600,
			lineHeight: 1.5,
		},
	},
	components: {
		MuiContainer: {
			styleOverrides: {
				root: {
					minHeight: "100vh",
					backgroundColor: "#f5f5f5",
					padding: "15px 20px",
					maxWidth: "600px",
					margin: "0 auto",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
					borderRadius: "14px",
					padding: "8px 15px",
					boxShadow: "none",
					"& .MuiTouchRipple-root": {
						display: "none",
					},
					"&:hover": {
						boxShadow: "none",
					},
					"&:active": {
						boxShadow: "none",
					},
				},
				contained: {
					backgroundColor: "#030a11",
					color: "#ffffff",
					boxShadow: "none",
					"&:hover": {
						backgroundColor: "#030a11",
						boxShadow: "none",
					},
				},
				outlined: {
					backgroundColor: "#ffffff",
					color: "#030a11",
					borderColor: "#e0e0e0",
					boxShadow: "none",
					"&:hover": {
						backgroundColor: "#ffffff",
						borderColor: "#030a11",
						boxShadow: "none",
					},
				},
			},
			defaultProps: {
				disableRipple: true,
			},
		},
		MuiPaper: {
			variants: [
				{
					props: { variant: "volumeInput" },
					style: {
						backgroundColor: "#ffffff",
						borderRadius: "8px",
					},
				},
				{
					props: { variant: "detailsItem" },
					style: {
						backgroundColor: "#ffffff",
						borderRadius: "8px",
					},
				},
			],
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					backgroundColor: "transparent",
					borderRadius: "4px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					"& > *": {
						lineHeight: 1,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					},
					"&:hover": {
						backgroundColor: "#f5f5f5",
					},
					"&:active": {
						backgroundColor: "#e0e0e0",
					},
					"&.MuiIconButton-gray": {
						backgroundColor: "#e0e0e0",
						borderRadius: "50%",
						"&:hover": {
							backgroundColor: "#bdbdbd",
						},
						"&:active": {
							backgroundColor: "#9e9e9e",
						},
					},
					"& .MuiTouchRipple-root": {
						display: "none",
					},
				},
			},
			defaultProps: {
				disableRipple: true,
			},
		},
		MuiCheckbox: {
			styleOverrides: {
				root: {
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					"& .MuiSvgIcon-root": {
						fill: checkboxCheckedColor,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						"&:hover": {
							backgroundColor: "white",
						},
					},
					"&.Mui-checked": {
						"& .MuiIconButton-label": {
							position: "relative",
							zIndex: 0,
							border: "1px solid #bbbbbb",
							borderRadius: 3,
						},
						"& .MuiIconButton-label:after": {
							content: '""',
							left: 10,
							top: 10,
							height: 18,
							width: 18,
							position: "absolute",
							backgroundColor: "#000000",
							zIndex: -1,
							borderColor: "transparent",
						},
					},
					"&:not(.Mui-checked) .MuiIconButton-label": {
						position: "relative",
						zIndex: 0,
						border: "1px solid #bbbbbb",
						borderRadius: 3,
					},
					"&:not(.Mui-checked) .MuiIconButton-label:after": {
						content: '""',
						left: 10,
						top: 10,
						height: 18,
						width: 18,
						position: "absolute",
						backgroundColor: "#ffffff",
						zIndex: -1,
						borderColor: "transparent",
					},
					"& .MuiTouchRipple-root": {
						display: "none",
					},
				},
			},
			defaultProps: {
				disableRipple: true,
			},
		},
		MuiRadio: {
			styleOverrides: {
				root: {
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					padding: 0,
					"& .MuiSvgIcon-root": {
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					},
					"& .MuiTouchRipple-root": {
						display: "none",
					},
				},
			},
			defaultProps: {
				disableRipple: true,
			},
		},
	},
});

export default theme;
