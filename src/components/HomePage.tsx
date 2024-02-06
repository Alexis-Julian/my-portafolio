"use client";
import Banner from "./Banner";
import Curriculum from "./Curriculum";
import DeployProjects from "./DeployProjects";
import Letter from "./Letter";
import NavSection from "./NavSections";
import Pagination from "./Pagination";
import { useState } from "react";
import Presentation from "./Presentation";
import { Section } from "@/app/shared/types";
import { useRef } from "react";
import AboutMe from "./AboutMe";
// import Hammer as * from "react-hammerjs";
import ReactHammer from "react-hammerjs";

const navSection = ["Portafolio", "Proyectos", "Test", "Test"];

export const Sections = navSection.map((section, index) => {
	let translate = 100 / (index + 1);
	if (translate == 100) translate = 0;
	return { movement: String(translate), index };
});
console.log(Sections);
const proyectos = [
	"Back-End Ecomeerce",
	"Back-End Ecomeerce",
	"Back-End Ecomeerce",
	"Back-End Ecomeerce",
	"Back-End Ecomeerce",
	"Back-End Ecomeerce",
	"Back-End Ecomeerce",
	"Back-End Ecomeerce",
	"Back-End Ecomeerce",
	"Back-End Ecomeerce",
];

export default function FirstPage() {
	const [useSection, setSection] = useState<Section>(Sections[0]);
	const elemento: any = useRef(null);
	let index = 0;
	function Probando() {
		return <div>123</div>;
	}
	/* 	function test() {
		return <ReactHammer ></ReactHammer>;
	}
	
 */
	const HandleSwipe = (event: any) => {
		if (event.direction === 2) {
			// Deslizamiento hacia la izquierda
			index += 1;
			setSection(Sections[index]);
		} else if (event.direction === 4) {
			// Deslizamiento hacia la derecha
			index -= 1;
			setSection(Sections[index]);
		}
	};
	return (
		<>
			<Pagination useSection={useSection} />
			<ReactHammer onSwipe={HandleSwipe}>
				<main
					ref={elemento}
					className="h-[200%] z-50 w-full transition-all duration-1000 relative  phone:h-[100%] phone:w-[400%] phone:absolute phone:flex phone:bg-quinary      "
					// style={{ transform: `translateY(-${useSection.movement}%)` }}
					style={{ transform: `translateX(-${useSection.movement}%)` }}
				>
					<div className="h-[50%] w-full  phone:h-full phone:w-[25%]  ">
						<Presentation
							setSection={setSection}
							navSection={navSection}
							useSection={useSection}
						/>
					</div>
					<div className="phone:w-[25%] phone:h-[100%]   ">
						<Curriculum setSection={setSection} />
					</div>
					<div className="phone:w-[25%] ">
						<h2 className="text-white">Probando</h2>
						{/* <Letter proyectos={proyectos} /> */}
					</div>

					<div className="phone:w-[25%] overflow-hidden">
						<AboutMe />
					</div>
					{/* <div className="h-[50%] text-quaternary overflow-hidden ">
					<DeployProjects
						setSection={setSection}
						navSection={navSection}
						useSection={useSection}
					/>
				</div> */}
				</main>
			</ReactHammer>
		</>
	);
}
