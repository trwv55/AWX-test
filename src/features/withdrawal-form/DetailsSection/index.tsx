import { useCallback, useState } from "react";
import { Box, Stack } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";
import { SectionTitle } from "../../../shared/ui/SectionTitle";
import { Checkbox } from "../../../shared/ui/Checkbox";
import { DetailsItem } from "../components/DetailsItem";
import { RequisiteTypeItem } from "../components/RequisiteTypeItem";
import type { RequisiteType } from "../types";
import { DEFAULT_REQUISITE_TYPE } from "../constants";

const radioGroupSx: SxProps<Theme> = { display: "flex", flexDirection: "row", gap: 2 };

const RequisiteTypeItemSx: SxProps<Theme> = { padding: "15px 20px 20px" };

const detailsItemPaperSx: SxProps<Theme> = {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "15px 20px",
};

const checkboxSx: SxProps<Theme> = {
	padding: 0,
};

const titleSx: SxProps<Theme> = {
	fontSize: "20px",
	fontWeight: "500",
};

const radioLabelSx: SxProps<Theme> = {
	fontSize: "16px",
};

export const DetailsSection = () => {
	const [saveDetails, setSaveDetails] = useState(true);
	const [requisiteType, setRequisiteType] = useState<RequisiteType>(DEFAULT_REQUISITE_TYPE);

	const handleRequisiteTypeChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setRequisiteType(event.target.value as RequisiteType);
	}, []);

	const handleEditClick = useCallback((field: string) => {
		console.log(`Edit ${field}`);
	}, []);

	return (
		<Box>
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<SectionTitle>Реквизиты</SectionTitle>
				<Checkbox
					label="Сохранить реквизиты"
					checked={saveDetails}
					onChange={e => setSaveDetails(e.target.checked)}
					labelSx={{ color: "#9e9e9e", fontSize: "16px", fontWeight: "500" }}
				/>
			</Box>
			<Stack spacing={1.2} sx={{ mt: 2 }}>
				<RequisiteTypeItem
					requisiteType={requisiteType}
					onRequisiteTypeChange={handleRequisiteTypeChange}
					icon={<EditIcon />}
					onIconClick={() => handleEditClick("card")}
					paperSx={RequisiteTypeItemSx}
					radioGroupSx={radioGroupSx}
					titleSx={titleSx}
					checkboxSx={checkboxSx}
					radioLabelSx={radioLabelSx}
				/>
				<DetailsItem
					title="ФИО владельца"
					icon={<EditIcon />}
					onIconClick={() => handleEditClick("owner")}
					paperSx={detailsItemPaperSx}
					titleSx={titleSx}
				/>
				<DetailsItem
					title="Адрес"
					icon={<EditIcon />}
					onIconClick={() => handleEditClick("address")}
					paperSx={detailsItemPaperSx}
					titleSx={titleSx}
				/>
			</Stack>
		</Box>
	);
};
