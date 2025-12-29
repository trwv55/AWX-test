import { Paper, Typography, IconButton } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";

interface DetailsItemProps {
	title: string;
	icon: ReactNode;
	onIconClick: () => void;
	titleSx?: SxProps<Theme>;
	iconButtonSx?: SxProps<Theme>;
	paperSx?: SxProps<Theme>;
}

export const DetailsItem = ({ title, icon, onIconClick, titleSx, iconButtonSx, paperSx }: DetailsItemProps) => {
	return (
		<Paper variant="detailsItem" sx={paperSx}>
			<Typography variant="body2" sx={titleSx}>
				{title}
			</Typography>
			<IconButton onClick={onIconClick} sx={iconButtonSx}>
				{icon}
			</IconButton>
		</Paper>
	);
};

