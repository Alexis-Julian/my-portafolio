export interface Section {
	movement: string;
	index: number;
	name: string;
}
export type CreateSectionsType = (
	navSection: string[],
	translate: number,
	screenTotal: number
) => void;
