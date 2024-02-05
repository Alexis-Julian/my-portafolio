"use client";

import { Dispatch, SetStateAction } from "react";
import ArrowDown from "./ArrowDown";
import NavSection from "./NavSections";
import { useState } from "react";

export default function Banner({
	setSection,
}: {
	setSection: Dispatch<
		SetStateAction<{
			movement: string;
			index: number;
		}>
	>;
}) {
	const [useJob, setJob] = useState<string>();
	const Jobs = ["Front End", "Back End", "Full Stack"];
	let index = 0;

	return (
		<div className="h-full w-full bg-[url('/protruding-squares.svg')] relative rounded-lg border-2 border-quaternary">
			<div className="absolute h-full w-full top-0 bottom-0 left-0 right-0 text-white  backdrop-blur-sm flex items-center justify-center   ">
				<div className="ml-4 h-full w-full flex flex-col p-2  font-extralight text-quaternary gap-2  ">
					<div className="w-full h-[10%]">
						<NavSection />
					</div>

					<div className="w-full  h-[80%] flex   flex-col items-start justify-center gap-2 ">
						<p className="font-extralight text-4xl ">Hola mi nombre es</p>
						<p className="font-medium text-8xl">Alexis Rojas</p>
						<p className="font-extralight text-4xl">y soy</p>
						<div className="flex items-center">
							<p className="font-medium text-6xl flex">
								Desarrollador Web&nbsp;
							</p>
							<p
								data-text="Full Stack..."
								className="textoFront font-medium text-6xl"
							>
								Full Stack...
							</p>
						</div>
					</div>

					<div className="h-[10%] w-full grid grid-cols-2 items-center justify-between ">
						<div className="   h-8 w-8">
							<ArrowDown setSection={setSection} />
						</div>
						<div className="flex justify-end  items-end mr-4 gap-2">
							<div className="bg-[url('/github-logo.svg')]   hover:scale-90 transition-all bg-cover bg-center bg-white border-2 border-quaternary  h-12 w-12 flex items-center justify-center cursor-pointer rounded-full"></div>
							<div className="bg-[url('/icon_linkedin.svg')] hover:scale-90 transition-all border-2 border-quaternary  h-12 w-12 flex items-center justify-center cursor-pointer rounded-full"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
