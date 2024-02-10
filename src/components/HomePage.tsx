"use client";
import Banner from "./Banner";
import Curriculum from "./Curriculum";
import DeployProjects from "./DeployProjects";
import Letter from "./Letter";
import NavSection from "./NavSections";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import Presentation from "./Presentation";
import { Section } from "@/app/shared/types";
import { useRef } from "react";
import AboutMe from "./AboutMe";
import ReactHammer from "react-hammerjs";
import { CreateSectionsType } from "@/app/shared/types";
import SpinnerLoading from "./SpinnerLoading";
import BurgerMenu from "./BurgerMenu";

function CreateLayout(
	{ ancho, alto }: { alto: number; ancho: number },
	CreateSections: any
) {
	const navSection = ["Portafolio", "Proyectos"];

	if (ancho < 960) navSection.push("Sobre mi");

	const screenTotal = 100 * navSection.length;

	let translate: number = Number((100 / navSection.length).toFixed(1));

	return CreateSections(navSection, translate, screenTotal);
}

function CreateSections(
	navSection: Array<String>,
	translate: number,
	screenTotal: Number
) {
	const Sections = navSection.map((section, index) => {
		return { name: section, movement: String(translate * index), index };
	});
	return { Sections, translate, screenTotal };
}

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

let index = 0;

export default function FirstPage() {
	//Mover logica de estilos a css

	const [useTamano, setTamano] = useState<{
		ancho: number;
		alto: number;
	}>({ ancho: 0, alto: 0 });

	useEffect(() => {
		setTamano({
			ancho: window.innerWidth,
			alto: window.innerHeight,
		});
	}, []);

	const { Sections, translate, screenTotal } = CreateLayout(
		useTamano,
		CreateSections
	);

	const [useSection, setSection] = useState<Section>(Sections[0]);
	const HandleSwipe = (event: any) => {
		if (useTamano.alto > 960) return null;

		if (event.direction === 2 && index < Sections.length - 1) {
			// Deslizamiento hacia la izquierda
			index += 1;
			setSection(Sections[index]);
		} else if (event.direction === 4 && index > 0) {
			// Deslizamiento hacia la derecha
			index -= 1;
			setSection(Sections[index]);
		}
	};
	return (
		<>
			{useTamano.ancho > 0 ? (
				<div>
					<div className="h-[60px] w-[60px]  fixed top-0 p-3 z-[999] lg:hidden  ">
						<BurgerMenu
							navSection={Sections}
							useSection={useSection}
							setSection={setSection}
						/>
					</div>
					<ReactHammer onSwipe={HandleSwipe}>
						<main
							className={`lg:relative  lg:flex-col z-50 absolute flex bg-quinary transition-all duration-1000 `}
							style={{
								transform:
									useTamano.ancho > 960
										? `translateY(-${useSection.movement}%)`
										: `translateX(-${useSection.movement}%)`,

								height: useTamano.ancho > 960 ? `${screenTotal}%` : "100%",
								width: useTamano.ancho < 960 ? `${screenTotal}%` : "100%",
							}}
						>
							{/* Celular y Desktop */}
							<div
								className={`lg:grid lg:grid-cols-2 lg:gap-4 lg:p-2 | p-0   `}
								style={{
									height: useTamano.ancho > 960 ? `${translate}%` : "100%",
									width: useTamano.ancho < 960 ? `${translate}%` : "100%",
								}}
							>
								<Presentation
									setSection={setSection}
									navSection={Sections}
									useSection={useSection}
								/>
								<div className=" lg:inline-block hidden	">
									<Curriculum />
								</div>
							</div>

							{/* Celular */}

							<div
								className={`p-[0.2px] relative lg:grid lg:grid-cols-2 `}
								style={{
									height: useTamano.ancho > 960 ? `${translate}%` : "100%",
									width: useTamano.ancho < 960 ? `${translate}%` : "100%",
								}}
							>
								<div className="h-full w-full border-2 border-quaternary z-50 text-white relative  ">
									{/* <Letter proyectos={proyectos} /> */}
								</div>

								<div className="hidden lg:inline-block lg:h-full lg:w-full z-50">
									<AboutMe />
								</div>

								<div className="absolute border-4 border-white rounded-lg  h-full w-full  blur-sm phone:bg-[url('/protruding-squares.svg')]  z-10  top-0"></div>
							</div>
							{/* Celular */}

							<div
								className={`overflow-hidden lg:hidden inline-block`}
								style={{
									height: useTamano.ancho > 960 ? `${translate}%` : "100%",
									width: useTamano.ancho < 960 ? `${translate}%` : "100%",
								}}
							>
								<AboutMe />
							</div>
						</main>
					</ReactHammer>
				</div>
			) : (
				<div className="h-full w-full flex items-center justify-center ">
					<SpinnerLoading />
				</div>
			)}
		</>
	);
}
