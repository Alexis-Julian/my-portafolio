import { Dispatch, SetStateAction } from "react";
import { Section } from "@/shared/types";
// import { Sections } from "./HomePage";
export default function ArrowDown({
	setSection,
}: {
	setSection: Dispatch<SetStateAction<Section>>;
}) {
	function HandleMovementSection() {
		setSection({ index: 1, movement: "50", name: "Proyectos" });
	}
	return (
		<div
			className="text-white h-full w-full bg-quaternary animate-bounce bg-re  rounded-full bottom-0 cursor-pointer"
			onClick={() => HandleMovementSection()}
		>
			<div className="bg-[url('/arrow_down_icon.svg')] h-full w-full bg-center bg-cover animate-pulse"></div>
		</div>
	);
}

// { movement: "50", index: 2 }
