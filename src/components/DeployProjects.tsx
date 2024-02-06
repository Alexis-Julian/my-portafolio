import { Dispatch, SetStateAction } from "react";
import Letter from "./Letter";
import NavSection from "./NavSections";
import { Section } from "@/app/shared/types";

export default function DeployProjects({
	setSection,
	navSection,
	useSection,
}: {
	setSection: Dispatch<SetStateAction<Section>>;
	navSection: Array<Section>;
	useSection: Section;
}) {
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
	return (
		<div className="h-full w-full bg-[url('/protruding-squares.svg')] relative  ">
			<div className="h-full w-[90%] mx-auto backdrop-blur-md border-x-2 border-quaternary shadow-lg shadow-quaternary  flex flex-col items-center justify-center relative ">
				<div className="h-[10%] w-full relative pl-4 ">
					<NavSection
						navSection={navSection}
						useSection={useSection}
						setSection={setSection}
					/>
				</div>
				<div className="h-[80%] w-full  rounded-lg border-y-2 border-dotted border-quaternary z-50 grid grid-cols-2 gap-2  py-5 ">
					<div className="h-full w-full flex flex-col items-center justify-center border-r-2  border-quaternary">
						<div className="w-[80%] h-full flex flex-col gap-8    justify-around">
							{/*  */}
							<h2 className=" text-6xl text-center grow-1 font-extralight text-white bg-quinary rounded-md  shadow-md shadow-secondary ">
								- SOBRE MI -
							</h2>
							<div className=" flex items-start justify-center grow-1">
								<div className="h-[300px] w-[300px] flex items-center justify-center ">
									<span className="loader h-full w-full relative     ">
										<div className="h-[90%] w-[90%]   bg-[url('/stikcer-transformed.png')]  bg-cover bg-bottom z-50 "></div>
										<div className="h-full w-full top-0 left-0  blur-lg absolute -z-50 double  rounded-full"></div>
									</span>
								</div>
							</div>
							{}
							<div className=" flex items-center pb-8 grow-1">
								<p className="text-center text-white font-bold text-lg ">
									Hola mi nombre es Alexis y soy Desarrollador Full Stack con
									una sólida experiencia en el diseño y desarrollo de
									aplicaciones web escalables y eficientes. Experto en
									tecnologías frontend como NextJs y backend con Express ,
									MySQL, MongoDB y FireBase.
								</p>
							</div>
						</div>
						{/*  */}
					</div>
					<div className="h-full w-full grid  overflow-hidden items-center justify-center border-l-2  border-quaternary">
						<div className="h-full w-full flex items-center justify-center ">
							<Letter proyectos={proyectos} />
						</div>
					</div>
				</div>
				<div className="h-[10%] w-full">1</div>
			</div>
		</div>
	);
}
