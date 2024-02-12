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

			return response.data.map(
				({
					name,
					html_url,
					created_at,
					pushed_at,
					commits_url,
				}: Repository) => {
					return {
						name,
						html_url,
						created_at,
						pushed_at,
						commits_url,
					};
				}
			);
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

export async function GET(req: Request): Promise<any> {
	try {
		if (fs.existsSync("src/data/repositories.json")) {
			const file = JSON.parse(
				await fs.promises.readFile("src/data/repositories.json", "utf8")
			);

			return NextResponse.json({
				statusCode: 200,
				message: "Read file",
				data: file,
				statusText: "OK",
			});
		} else {
			const fetchRepository = await getRepositories();
			// console.log(fetchRepository);

			if (!fetchRepository)
				return {
					statusCode: 404,
					message: "Error",
				};
			fs.promises.writeFile(
				"src/data/repositories.json",
				JSON.stringify({
					lastUpdate: new Date().toISOString(),
					repositories: fetchRepository,
				})
			);
			return NextResponse.json({
				statusCode: 200,
				message: "Written file",
				statusText: "OK",
			});
		}
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "An error occured";
		return NextResponse.json(
			{ message: errorMessage, ok: false },
			{ status: 503 }
		);
	}
}
