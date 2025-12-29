import type { MethodType, RequisiteType } from "./types";

export const METHODS: Record<MethodType, string> = {
	banks: "Банки",
	cash: "Наличные",
	courier: "Курьер",
} as const;

export const DEFAULT_METHOD: MethodType = "banks";

export const METHOD_TYPES = Object.keys(METHODS) as MethodType[];

export const REQUISITE_TYPES: Record<RequisiteType, string> = {
	card: "Номер карты",
	contract: "Номер договора",
} as const;

export const DEFAULT_REQUISITE_TYPE: RequisiteType = "card";

export const REQUISITE_TYPE_OPTIONS = Object.keys(REQUISITE_TYPES) as RequisiteType[];

