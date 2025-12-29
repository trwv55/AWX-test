import { Paper, RadioGroup, Typography, IconButton, Stack } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";
import { RadioButton } from "../../../../shared/ui/RadioButton";
import type { RequisiteType } from "../../types";
import { REQUISITE_TYPES, REQUISITE_TYPE_OPTIONS } from "../../constants";

interface RequisiteTypeItemProps {
	requisiteType: RequisiteType;
	onRequisiteTypeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	icon: ReactNode;
	onIconClick: () => void;
	radioGroupSx?: SxProps<Theme>;
	titleSx?: SxProps<Theme>;
	iconButtonSx?: SxProps<Theme>;
	paperSx?: SxProps<Theme>;
	checkboxSx?: SxProps<Theme>;
	radioLabelSx?: SxProps<Theme>;
}

export const RequisiteTypeItem = ({
	requisiteType,
	onRequisiteTypeChange,
	icon,
	onIconClick,
	radioGroupSx,
	titleSx,
	iconButtonSx,
	paperSx,
	radioLabelSx,
}: RequisiteTypeItemProps) => {
	const customSx: SxProps<Theme> = {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 0,
		marginTop: 5,
	};

	const radioSx: SxProps<Theme> = {
		marginRight: "10px",
	};

	return (
		<Paper variant="detailsItem" sx={paperSx}>
			<Stack spacing={2}>
				<RadioGroup value={requisiteType} onChange={onRequisiteTypeChange} sx={radioGroupSx}>
					{REQUISITE_TYPE_OPTIONS.map(type => (
						<RadioButton
							key={type}
							label={REQUISITE_TYPES[type]}
							value={type}
							radioSx={radioSx}
							labelSx={radioLabelSx}
						/>
					))}
				</RadioGroup>
				<Paper variant="detailsItem" sx={customSx}>
					<Typography variant="body2" sx={titleSx}>
						{REQUISITE_TYPES[requisiteType]}
					</Typography>
					<IconButton onClick={onIconClick} sx={iconButtonSx}>
						{icon}
					</IconButton>
				</Paper>
			</Stack>
		</Paper>
	);
};
