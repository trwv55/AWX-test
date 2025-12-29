import { Box, Radio as MuiRadio, Typography } from "@mui/material";
import type { RadioProps, SxProps, Theme } from "@mui/material";
import { CheckedRadioIcon, UncheckedRadioIcon } from "./icons";

interface RadioButtonProps extends Omit<RadioProps, "label"> {
	label?: string;
	labelSx?: SxProps<Theme>;
	radioSx?: SxProps<Theme>;
}

export const RadioButton = ({ label, labelSx, radioSx, ...props }: RadioButtonProps) => {
	if (label) {
		return (
			<Box display="flex" alignItems="center">
				<MuiRadio {...props} icon={UncheckedRadioIcon} checkedIcon={CheckedRadioIcon} sx={radioSx} />
				<Typography variant="body2" sx={labelSx}>
					{label}
				</Typography>
			</Box>
		);
	}
	return <MuiRadio {...props} icon={UncheckedRadioIcon} checkedIcon={CheckedRadioIcon} sx={radioSx} />;
};
