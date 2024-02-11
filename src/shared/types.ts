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

export type Languages = {
	CSS?: string;
	JavaScript?: string;
	TypeScript?: string;
	Python?: string;
	HTML?: string;
	Handlebars?: string;
	Dockerfile?: string;
};

export type Repository = {
	name: string;
	html_url: string;
	languages_url: string;
	created_at: Date;
	pushed_at: Date;
	commits_url: string;
};
