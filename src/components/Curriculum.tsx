import { Dispatch, SetStateAction } from "react";

export default function Curriculum({
	setSection,
}: {
	setSection: Dispatch<
		SetStateAction<{
			movement: string;
			index: number;
		}>
	>;
}) {
	return (
		<div className="h-full w-full bg-[url('/betaCurriculum.jpg')] bg-contain  bg-center bg-no-repeat  bg-[#1a1a1a] rounded-sm border-2 border-quaternary"></div>
	);
}
