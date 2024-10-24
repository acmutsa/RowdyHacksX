export type DeArray<T> = T extends (infer R)[] ? R : T;

type PartnerType = "gold" | "silver" | "bronze" | "title" | "partner";

export interface Partner {
	name: string;
	logo: string;
	tier: PartnerType;
	url: string;
}
