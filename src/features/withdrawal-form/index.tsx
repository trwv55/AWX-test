import { Stack } from "@mui/material";
import { MethodSection } from "./MethodSection";
import { VolumesSection } from "./VolumesSection";
import { DetailsSection } from "./DetailsSection";

export const WithdrawalForm = () => {
	return (
		<Stack spacing={2.2}>
			{/* Способы вывода */}
			<MethodSection />
			{/* Объемы */}
			<VolumesSection />
			{/* Реквизиты */}
			<DetailsSection />
		</Stack>
	);
};
