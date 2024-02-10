import { Dispatch, SetStateAction } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
export default function Curriculum({
	setCurriculum,
	useCurriculum,
}: {
	setCurriculum: Dispatch<SetStateAction<boolean>>;
	useCurriculum: boolean;
}) {
	return (
		<div className="h-full w-full bg-[url('/CurriculumNew.jpg')] bg-contain  bg-center bg-no-repeat  bg-[#1a1a1a] rounded-sm border-2 border-quaternary relative">
			<div className="absolute top-0 right-0 h-[50px] w-[50px]  lg:hidden ">
				<XMarkIcon
					className="text-quaternary "
					onClick={() => setCurriculum(!useCurriculum)}
				/>
			</div>
		</div>
	);
}
