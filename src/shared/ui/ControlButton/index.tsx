import { IconButton } from "@mui/material";
import type { IconButtonProps } from "@mui/material";
import clsx from "clsx";

interface ControlButtonProps extends Omit<IconButtonProps, "children" | "type"> {
	type: "increment" | "decrement";
}

export const ControlButton = ({ type, className, ...props }: ControlButtonProps) => {
	return (
		<IconButton {...props} className={clsx("MuiIconButton-gray", className)}>
			{type === "increment" ? "+" : "−"}
		</IconButton>
	);
};
