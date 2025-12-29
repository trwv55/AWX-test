import { Box, Input, Paper, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { ControlButton } from "../../../../shared/ui/ControlButton";

interface VolumeItemProps {
	label: string;
	currency: string;
	value: string;
	onIncrement: () => void;
	onDecrement: () => void;
	onChange?: (value: string) => void;
	labelAlign?: "left" | "right";
	boxSx?: SxProps<Theme>;
}

export const VolumeItem = ({
	label,
	currency,
	value,
	onIncrement,
	onDecrement,
	onChange,
	labelAlign = "left",
	boxSx,
}: VolumeItemProps) => {
	return (
		<Box sx={boxSx}>
			<Typography variant="body2" color="text.secondary" sx={{ mb: 1 }} textAlign={labelAlign}>
				{label}
			</Typography>
			<Paper variant="volumeInput" elevation={0} sx={{ padding: "10px" }}>
				<Box textAlign="center">
					<Typography variant="body2" color="text.secondary">
						{currency}
					</Typography>
				</Box>
				<Box display="flex" alignItems="center" gap={1}>
					<ControlButton type="decrement" onClick={onDecrement} sx={{ width: "24px", height: "24px" }} />
					<Input
						type="text"
						value={value}
						onChange={e => onChange?.(e.target.value)}
						disableUnderline
						inputProps={{ style: { textAlign: "center" } }}
					/>
					<ControlButton type="increment" onClick={onIncrement} sx={{ width: "24px", height: "24px" }} />
				</Box>
			</Paper>
		</Box>
	);
};
