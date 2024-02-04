import ArrowDown from "./ArrowDown";

export default function Banner() {
	return (
		<div className="h-full w-full bg-[url('/protruding-squares.svg')] relative rounded-lg border-2 border-quaternary">
			<div className="absolute h-full w-full top-0 bottom-0 left-0 right-0 text-white  backdrop-blur-sm flex items-center justify-center   ">
				{/* <i className="text-8xl">
					Alexis <i className="block">Projectos</i>
				</i> */}
				<div className="text-8xl flex flex-col font-extralight text-quaternary gap-2  ">
					<i className="border-t-2 border-quaternary p-3">Alexis </i>
					<i className="border-b-2 border-quaternary ml-3 p-3">- Project </i>
					<div className=" absolute  bottom-[10%] right-[50%] left-[50%]  h-8 w-8">
						<ArrowDown />
					</div>
				</div>
			</div>
		</div>
	);
}
