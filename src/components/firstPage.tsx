"use client";
import Banner from "./Banner";
import Curriculum from "./Curriculum";
import Letter from "./Letter";
import Pagination from "./Pagination";
import { useState } from "react";

export default function FirstPage() {
	const Sections = [
		{ movement: "0", index: 0 },
		{ movement: "50", index: 1 },
	];

	const [useSection, setSection] = useState(Sections[0]);

	function DescripitionPersonal() {
		return (
			<section className="z-10 h-full w-full grid grid-cols-2 items-center justify-center ">
				<div className="w-full h-full flex items-center justify-center p-5 ">
					<div className="bg-white h-full w-full relative  ">
						<div className="absolute h-full w-full z-50 ">
							<Banner setSection={setSection} />
						</div>
						<div className="bg-white h-full w-full absolute transition-all curriculum   mx-[2%] rounded-md">
							<Curriculum setSection={setSection} />
						</div>
					</div>
				</div>
			</section>
		);
	}

	function DeployProjects() {
		const proyectos = [
			"test",
			"test",
			"test",
			"test",
			"test",
			"test",
			"test",
			"test",
			"test",
			"test",
		];
		return (
			<div className="h-full w-full bg-[url('/protruding-squares.svg')] relative  ">
				<div className="h-full w-[90%] mx-auto backdrop-blur-md border-x-2 border-quaternary shadow-lg shadow-quaternary grid grid-cols-2 ">
					{/* <Letter /> */}
					<div>Probando</div>
					<div className="h-full w-full grid grid-rows-2 overflow-hidden items-center justify-center">
						<div>
							<Letter />
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<>
			<Pagination useSection={useSection} />
			<main
				className="h-[200%] z-50 w-full transition-all duration-1000 relative "
				style={{ transform: `translateY(-${useSection.movement}%)` }}
			>
				<div className="h-[50%] w-full ">
					{/* Mi descripcion personal donde esta mi curricullum  */}
					<DescripitionPersonal />{" "}
				</div>
				<div className="h-[50%] text-quaternary overflow-hidden">
					{/*  Deploys de proyectos o visualizacion de los proyectos realizados */}
					<DeployProjects />
				</div>
			</main>
		</>
	);
}
