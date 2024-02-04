export default function Pagination() {
	const section = [true, false, false];

	return (
		<div className="fixed right-0 mr-[0.5%] flex flex-col gap-2">
			{section.map((e, index) => (
				<div
					className="h-[20px] w-[20px] bg-primary  rounded-full p-[6px] border-[0.4px] shadow shadow-tertiary border-secondary cursor-pointer"
					key={index}
				>
					<div className="h-full w-full bg-quaternary rounded-full   border-[0.1px]  border-tertiary  "></div>
				</div>
			))}
		</div>
	);
}
