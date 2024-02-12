import HomePage from "@/components/HomePage";
import { Repository } from "@/shared/types";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";

export default async function Home() {
	let repositories;
	try {
		const response = await axios.get(process.env.DOMINIO + "/api/github");
		if (response.status == 200) {
			repositories = response.data.data.repositories;
		}
	} catch (e) {
		repositories = null;
	}

	return (
		<div className="h-full w-full bg-primary relative  flex overflow-hidden ">
			<HomePage repositories={repositories} />
			<div className="bg-cover bg-center blur-sm h-full w-full bg-quaternary opacity-15  absolute "></div>
		</div>
	);
}
{
	/* <div className="bg-cover bg-center blur-sm h-full w-full bg-[url('/abstract-timekeeper.svg')] absolute "></div> */
}
