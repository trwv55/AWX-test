import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import clsx from "clsx";

interface SelectButtonProps extends Omit<ButtonProps, "variant"> {
	selected?: boolean;
}

export const SelectButton = ({ selected = false, className, ...props }: SelectButtonProps) => {
	return <Button variant={selected ? "contained" : "outlined"} className={clsx(className)} {...props} />;
};
