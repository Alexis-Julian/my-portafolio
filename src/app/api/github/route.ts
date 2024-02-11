import { NextResponse } from "next/server";
import axios from "axios";
import fs from "fs";
import { Languages, Repository } from "@/shared/types";

async function getRepositories(): Promise<Repository[] | undefined> {
	const response = await axios.get(
		"https://api.github.com/users/Alexis-Julian/repos"
	);
	try {
		if (response.status == 200) {
			// Si la respuesta es exitosa, devolvemos los datos

			const a = response.data.map(
				async ({
					name,
					html_url,
					languages_url,
					created_at,
					pushed_at,
					commits_url,
				}: Repository) => {
					/* let commits: Array<any> | undefined = await getURL(commits_url);
					if (!commits) commits = []; */

					let languages: Languages | undefined = await getURL(languages_url);

					return {
						name,
						html_url,
						languages_url: languages,
						created_at,
						pushed_at,
						commits_url,
					};
				}
			);
			console.log(a);
			return a;
		} else {
			// Si la respuesta no es exitosa, devolvemos undefined
			return undefined;
		}
	} catch (err) {
		// Si ocurre un error en la petición, devolvemos undefined
		// console.error("Error al obtener los repositorios:", err);
		return undefined;
	}
}

async function getURL(URL: string) {
	const response = await axios.get(URL);
	try {
		if (response.status == 200) {
			return response.data;
		} else {
			return undefined;
		}
	} catch (err) {
		console.log("Hubo un error en la peticion ");
	}
}

export async function GET(req: Request) {
	// const fetchRepository = await getRepositories();
	try {
		if (fs.existsSync("src/data/repositories.json")) {
			console.log("El archivo existe");
			/* let commits: Array<any> | undefined = await getURL(
				"https://api.github.com/repos/Alexis-Julian/Alexis-Julian/commits"
			); */
		} else {
			const fetchRepository = await getRepositories();
			if (!fetchRepository)
				return {
					statusCode: 404,
					message: "Error",
				};

			fs.writeFileSync(
				"src/data/repositories.json",
				JSON.stringify({
					lastUpdate: new Date().toISOString(),
					repositories: fetchRepository,
				})
			);
		}
	} catch (e) {
		// console.log(e);
	}

	return NextResponse.json({ a: "Probando" });
}
