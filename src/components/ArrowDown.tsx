import { Dispatch, SetStateAction } from "react";

export default function ArrowDown({
	setSection,
}: {
	setSection: Dispatch<
		SetStateAction<{
			movement: string;
			index: number;
		}>
	>;
}) {
	function HandleMovementSection() {
		setSection({ movement: "50", index: 1 });
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