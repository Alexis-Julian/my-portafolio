"use client";

import { Dispatch, SetStateAction } from "react";
import ArrowDown from "./ArrowDown";
import NavSection from "./NavSections";
import { useState } from "react";
import { Section } from "@/app/shared/types";

export default function Banner({
	setSection,
	navSection,
	useSection,
}: {
	setSection: Dispatch<SetStateAction<Section>>;
	navSection: Array<Section>;
	useSection: Section;
}) {
	return (
		<div className="h-full w-full bg-[url('/protruding-squares.svg')] relative rounded-lg border-2 border-quaternary">
			<div className="absolute h-full w-full top-0 bottom-0 left-0 right-0 text-white  backdrop-blur-sm flex items-center justify-center   ">
				<div className=" h-full w-full flex flex-col p-2 pl-4 font-extralight text-quaternary gap-2  ">
					<div className="w-full h-[10%]">
						<NavSection
							navSection={navSection}
							useSection={useSection}
							setSection={setSection}
						/>
					</div>

					<div className="animate-fade-in-right w-full h-[80%] flex lg:gap-2 lg:items-start flex-col justify-center gap-0 items-center   animation-animation ">
						<p className="font-extralight text-4xl">Hola mi nombre es</p>
						<p className="lg:text-8xl font-medium text-6xl">Alexis Rojas</p>
						<p className="font-extralight text-4xl">y soy</p>
						<div className="lg:flex-row flex items-center flex-col">
							<p className="lg:text-6xl font-medium flex text-4xl  ">
								Desarrollador Web&nbsp;
							</p>
							<p
								data-text="Full Stack..."
								className="lg:text-6xl textoFront font-medium  text-4xl"
							>
								Full Stack...
							</p>
						</div>
					</div>

					<div className="h-[10%] w-full grid lg:grid-cols-2 grid-cols-1 items-center justify-between ">
						<div className="   h-8 w-8 hidden lg:inline-block">
							<ArrowDown setSection={setSection} />
						</div>
						<div className="flex lg:justify-end  lg:items-end items-center justify-center  mr-4 lg:gap-2 gap-14">
							<div className="bg-[url('/github-logo.svg')]   hover:scale-90 transition-all bg-cover bg-center bg-white border-2 border-quaternary  h-12 w-12 flex items-center justify-center cursor-pointer rounded-full"></div>
							<div className="bg-[url('/icon_linkedin.svg')] hover:scale-90 transition-all border-2 border-quaternary  h-12 w-12 flex items-center justify-center cursor-pointer rounded-full"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
