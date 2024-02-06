import { Dispatch, SetStateAction } from "react";
import Banner from "./Banner";
import Curriculum from "./Curriculum";
import { Section } from "@/app/shared/types";

export default function Presentation({
	setSection,
	navSection,
	useSection,
}: {
	setSection: Dispatch<SetStateAction<Section>>;
	navSection: Array<String>;
	useSection: Section;
}) {
	console.log(useSection);

	return (
		<section className="z-10 h-full w-full grid grid-cols-2 items-center justify-center phone:grid-cols-1 phone:w-[100%] bg-white   ">
			<div className="w-full h-full flex items-center justify-center p-5 phone:p-0 ">
				<div className="bg-white h-full w-full relative  ">
					<div className="absolute h-full w-full z-50 ">
						<Banner
							setSection={setSection}
							navSection={navSection}
							useSection={useSection}
						/>
					</div>
					{/* 	<div className="bg-white h-full w-full absolute transition-all curriculum   mx-[2%] rounded-md">
						<Curriculum setSection={setSection} />
					</div> */}
				</div>
			</div>
		</section>
	);
}
