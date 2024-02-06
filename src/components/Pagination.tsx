import { Dispatch, SetStateAction } from "react";

export default function Pagination({
	useSection,
}: {
	useSection: { movement: string; index: number };
}) {
	const section = [true, false];

	return (
		<div className=" phone:hidden fixed right-0 mr-[0.5%]  flex flex-col gap-2 z-50 bottom-[50%]">
			{section.map((e, index) => (
				<div
					className="h-[20px] w-[20px] bg-primary  rounded-full p-[6px] border-[0.4px] shadow shadow-tertiary border-secondary cursor-pointer"
					key={index}
				>
					<div
						className={`h-full w-full bg-quaternary rounded-full   border-[0.1px]  ${
							useSection.index == index
								? "border-quaternary"
								: "border-tertiary"
						} `}
					></div>
				</div>
			))}
		</div>
	);
}
