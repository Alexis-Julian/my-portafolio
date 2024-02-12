"use client";
import { Repository } from "@/shared/types";
import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { json } from "stream/consumers";

const TABLE_HEAD = ["Nombre", "URL Repo", "Creacion", "Ultima acutlizacion"];

export default function DefaultTimeline({
	repositories,
}: {
	repositories: Repository[] | null;
}) {
	function HandleSorting(index: number) {}

	function ParsingDate(date: Date) {
		const fecha = new Date(date);
		let dia = String(fecha.getDate());
		dia.length < 2 && (dia = "0" + dia);
		let mes = String(fecha.getMonth() + 1);
		mes.length < 2 && (mes = "0" + mes);
		const anio = fecha.getFullYear();
		return `${dia}/${mes}/${anio}`;
	}

	return repositories ? (
		<Card
			placeholder={""}
			className="h-full w-full overflow-y-scroll bg-transparent  "
		>
			<table className="w-full min-w-max table-auto text-left ">
				<thead>
					<tr className="  text-quaternary">
						{TABLE_HEAD.map((head, index: number) => (
							<th
								key={head}
								onClick={() => index != 1 && HandleSorting(index)}
								className={`border-b border-blue-gray-100  bg-primary/40 ${
									index != 1 && "lg:active:bg-white/30"
								}   transition-all   p-4`}
							>
								<p
									color="blue-gray"
									className="font-normal leading-none opacity-70  "
								>
									{head}
								</p>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{repositories.map(
						({ name, html_url, created_at, pushed_at, commits_url }, index) => {
							const fechas = [created_at, pushed_at].map((e) => ParsingDate(e));
							return (
								<tr
									key={name}
									className="even:bg-quinary backdrop-blur-md text-white hover:bg-tertiary/5 hover:text-quaternary lg:animate-fade-in-right	  transition-all"
								>
									<td className="p-4">
										<p color="blue-gray" className="font-normal">
											{name}
										</p>
									</td>
									<td className="p-4">
										<a
											color="blue-gray"
											className="font-normal"
											href={html_url}
										>
											Navegar
										</a>
									</td>
									<td className="p-4">
										<p color="blue-gray" className="font-normal">
											{fechas[0]}
										</p>
									</td>
									<td className="p-4">
										<p color="blue-gray" className="font-medium">
											{fechas[1]}
										</p>
									</td>
								</tr>
							);
						}
					)}
				</tbody>
			</table>
		</Card>
	) : (
		<div>Loading...</div>
	);
}
