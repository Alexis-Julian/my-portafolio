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

export default function DefaultTimeline() {
	return (
		<div className="w-[32rem] ">
			<ol className="lista">
				<li>
					<TimelineItem>
						<TimelineConnector />
						<TimelineHeader className="h-3">
							<TimelineIcon />
							<p color="blue-gray" className="leading-none">
								Timeline Title Here.
							</p>
						</TimelineHeader>
						<TimelineBody className="pb-8">
							<p color="gary" className="font-normal text-gray-600">
								The key to more success is to have a lot of pillows. Put it this
								way
							</p>
						</TimelineBody>
					</TimelineItem>
				</li>
				<li>
					<TimelineItem>
						<TimelineConnector />
						<TimelineHeader className="h-3">
							<TimelineIcon />
							<p color="blue-gray" className="leading-none">
								Timeline Title Here.
							</p>
						</TimelineHeader>
						<TimelineBody className="pb-8">
							<p color="gary" className="font-normal text-gray-600">
								The key to more success is to have a lot of pillows. Put it this
								way
							</p>
						</TimelineBody>
					</TimelineItem>
				</li>
			</ol>
		</div>
	);
}
