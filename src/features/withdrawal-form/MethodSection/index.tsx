import { useState } from "react";
import { Box, Stack } from "@mui/material";
import { SelectButton } from "../../../shared/ui/SelectButton";
import { SectionTitle } from "../../../shared/ui/SectionTitle";
import type { MethodType } from "../types";
import { DEFAULT_METHOD, METHOD_TYPES, METHODS } from "../constants";

export const MethodSection = () => {
	const [selectedMethod, setSelectedMethod] = useState<MethodType>(DEFAULT_METHOD);

	const handleMethodChange = (method: MethodType) => {
		setSelectedMethod(method);
	};

	return (
		<Box>
			<SectionTitle>Способ вывода</SectionTitle>
			<Stack direction="row" spacing={1.25} mt={2.5}>
				{METHOD_TYPES.map(method => (
					<SelectButton key={method} selected={selectedMethod === method} onClick={() => handleMethodChange(method)}>
						{METHODS[method]}
					</SelectButton>
				))}
			</Stack>
		</Box>
	);
};

