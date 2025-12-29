import { useState } from "react";
import { Box, Stack } from "@mui/material";
import { SectionTitle } from "../../../shared/ui/SectionTitle";
import { VolumeItem } from "../components/VolumeItem";

export const VolumesSection = () => {
	const [giveValue, setGiveValue] = useState("1 300.00000");
	const [receiveValue, setReceiveValue] = useState("1 200.00");

	const handleGiveIncrement = () => {
		console.log("+");
	};

	const handleGiveDecrement = () => {
		console.log("-");
	};

	const handleReceiveIncrement = () => {
		console.log("+");
	};

	const handleReceiveDecrement = () => {
		console.log("-");
	};

	return (
		<Box>
			<SectionTitle>Объемы</SectionTitle>
			<Stack direction="row" spacing={2} mt={1.4}>
				<VolumeItem
					label="Отдаете (лот 1000)"
					currency="Ethereum, ETH"
					value={giveValue}
					onIncrement={handleGiveIncrement}
					onDecrement={handleGiveDecrement}
					onChange={setGiveValue}
					labelAlign="left"
				/>
				<VolumeItem
					label="Получаете (лот 1000)"
					currency="Рубль, RUR"
					value={receiveValue}
					onIncrement={handleReceiveIncrement}
					onDecrement={handleReceiveDecrement}
					onChange={setReceiveValue}
					labelAlign="right"
				/>
			</Stack>
		</Box>
	);
};
