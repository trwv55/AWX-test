import { Box, Checkbox as MuiCheckbox, Typography } from "@mui/material";
import type { CheckboxProps, SxProps, Theme } from "@mui/material";
import { CheckedIcon, UncheckedIcon } from "./icons";

interface CheckboxPropsWithLabel extends Omit<CheckboxProps, "label"> {
	label?: string;
	labelSx?: SxProps<Theme>;
	checkboxSx?: SxProps<Theme>;
}

export const Checkbox = ({ label, labelSx, checkboxSx, ...props }: CheckboxPropsWithLabel) => {
	if (label) {
		return (
			<Box display="flex" alignItems="center">
				<Typography variant="body2" sx={labelSx}>
					{label}
				</Typography>
				<MuiCheckbox {...props} icon={UncheckedIcon} checkedIcon={CheckedIcon} sx={checkboxSx} />
			</Box>
		);
	}
	return <MuiCheckbox {...props} icon={UncheckedIcon} checkedIcon={CheckedIcon} sx={checkboxSx} />;
};
