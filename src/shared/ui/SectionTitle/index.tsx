import { Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";

interface SectionTitleProps extends Omit<TypographyProps, "variant"> {
	children: React.ReactNode;
}

export const SectionTitle = ({ children, ...props }: SectionTitleProps) => {
	return (
		<Typography variant="sectionTitle" component="h2" {...props}>
			{children}
		</Typography>
	);
};

