"use client";
import {
	Timeline,
	TimelineItem,
	TimelineConnector,
	TimelineHeader,
	TimelineIcon,
	TimelineBody,
	Typography,
} from "@material-tailwind/react";
import { useEffect } from "react";

export default function DefaultTimeline({
	proyectos,
}: {
	proyectos: Array<string>;
}) {
	useEffect(() => {
		/* const fetchingData = async () => {
			const response = await fetch("api/github");
			const data = response.json();
			console.log(data);
		};
		fetchingData(); */
		/* fetch("https://api.github.com/users/Alexis-Julian/repos")
			.then((response) => response.json())
			.then((data) => {
				// Manejar la respuesta JSON
				console.log(data);
			})
			.catch((error) => {
				// Manejar errores
				console.error("Error al recuperar los repositorios:", error);
			}); */
	}, []);
	return <div className="text-white">probando</div>;
}
