"use client";
import {
	Timeline,
	TimelineItem,
	TimelineConnector,
	TimelineHeader,
	TimelineIcon,
	TimelineBody,
	Typography,
} from "@material-tailwind/react";

export default function DefaultTimeline({
	proyectos,
}: {
	proyectos: Array<string>;
}) {
	function ItemList() {
		return (
			<TimelineItem>
				<TimelineConnector className="linetime" />
				<TimelineHeader className="h-3 outside">
					<TimelineIcon />
					<p color="blue-gray" className="leading-none text-white">
						Timeline Title Here.
					</p>
				</TimelineHeader>
				<TimelineBody className="pb-8">
					<p color="gary" className="font-normal text-tertiary">
						The key to more success is to have a lot of pillows. Put it this
					</p>
				</TimelineBody>
			</TimelineItem>
		);
	}
	return (
		<div className="w-[32rem]">
			<Timeline>
				{proyectos.map((proyecto, index) => {
					{
						return <ItemList key={index} />;
					}
				})}
			</Timeline>
		</div>
	);
}
