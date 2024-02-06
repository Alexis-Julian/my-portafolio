"use client";
import { Section } from "@/app/shared/types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Sections } from "./HomePage";
export default function NavSection({
	navSection,
	useSection,
	setSection,
}: {
	navSection: Array<String>;
	useSection: Section;
	setSection: Dispatch<SetStateAction<Section>>;
}) {
	const [useChangeSection, setChangeSection] = useState<Section>({
		movement: "0",
		index: 0,
	});

	useEffect(() => {
		if (useSection) setChangeSection(useSection);
	}, [useSection]);

	function ChangeSection(index: number) {
		setSection(Sections[index]);
	}

	return (
		<nav className="h-full w-full">
			<ul className="h-full w-full flex items-center gap-4">
				{navSection.map((section, index) => {
					console.log(useChangeSection.index == index);
					return (
						<li
							key={index}
							className="text-2xl font-normal "
							onClick={() => ChangeSection(index)}
						>
							<p
								className={` ${
									useChangeSection.index == index
										? "text-white border-white border-b-2"
										: "text-quaternary"
								} hover:text-white textobrillante cursor-pointer  transition-all hover:textobrillante `}
							>
								{section}
							</p>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
