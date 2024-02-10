"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import NavSection from "./NavSections";
import { Section } from "@/app/shared/types";
import {
	ChevronDownIcon,
	PresentationChartBarIcon,
	ChevronRightIcon,
	ShoppingBagIcon,
	GlobeAltIcon,
	ClipboardDocumentIcon,
	HomeIcon,
} from "@heroicons/react/16/solid";
import {
	List,
	Accordion,
	ListItem,
	AccordionHeader,
	ListItemPrefix,
	AccordionBody,
} from "@material-tailwind/react";

export default function BurgerMenu({
	navSection,
	useSection,
	setSection,
}: {
	navSection: Array<Section>;
	useSection: Section;
	setSection: Dispatch<SetStateAction<Section>>;
}) {
	const RedesSociales = [
		{ name: "Github", url: "" },
		{ name: "Linkedin", url: "" },
	];
	const Curriculum = [{ name: "Ver sin descargar" }, { name: "Descargar" }];

	const [useHandleMenu, setHandleMenu] = useState(false);

	function HandleMenu() {
		setHandleMenu(!useHandleMenu);
	}

	function HandleMoveSection(index: number) {
		setSection(navSection[index]);
		setHandleMenu(!useHandleMenu);
	}

	const [open, setOpen] = useState<any>(0);

	const handleOpen = (value: any) => {
		setOpen(open === value ? 0 : value);
	};

	return (
		<>
			<div className="h-full w-full z-50" onClick={() => HandleMenu()}>
				<div className="bg-[url('/burger_icon.svg')] bg-center bg-no-repeat h-full w-full "></div>
			</div>
			<div
				className={`absolute h-screen w-screen   top-0 left-0 right-0 bottom-0 z-50   transition-all duration-500   flex items-center justify-center ${
					useHandleMenu ? "translate-x-[0%]" : "translate-x-[-101%]"
				}`}
			>
				<div className="  h-full w-full relative ">
					<ul className="h-full w-[80%]  flex border-r-2 border-quaternary flex-col z-50 gap-14 p-3  relative">
						<List placeholder={""} className="h-full gap-4">
							<Accordion
								placeholder={""}
								open={open === 1}
								icon={
									<ChevronDownIcon
										strokeWidth={2.5}
										className={`mx-auto h-4 w-4 transition-transform ${
											open === 1 ? "rotate-180" : ""
										}`}
									/>
								}
							>
								<ListItem
									className="p-0 changePrefix bg-transparent hover:bg-transparent focus:opacity-1 active:opacity-100 "
									selected={open === 1}
									placeholder={""}
								>
									<AccordionHeader
										onClick={() => handleOpen(1)}
										className="border-b-0 p-3"
										placeholder={""}
									>
										<ListItemPrefix placeholder={""}>
											<HomeIcon className="h-5 w-5 text-white text-2xl" />
										</ListItemPrefix>
										<p className="mr-auto font-bold text-3xl text-white">
											Secciones
										</p>
									</AccordionHeader>
								</ListItem>
								<AccordionBody className="py-1">
									<List className="p-0" placeholder={""}>
										{navSection.map((item, index: number) => {
											return (
												<ListItem
													placeholder={""}
													key={index}
													className="text-white text-2xl"
													onClick={() => HandleMoveSection(index)}
												>
													<ListItemPrefix placeholder={""}>
														<ChevronRightIcon
															strokeWidth={3}
															className="h-3 w-5"
														/>
													</ListItemPrefix>
													{item.name}
												</ListItem>
											);
										})}
									</List>
								</AccordionBody>
							</Accordion>

							<Accordion
								placeholder={""}
								open={open === 2}
								icon={
									<ChevronDownIcon
										strokeWidth={2.5}
										className={`mx-auto h-4 w-4 transition-transform ${
											open === 2 ? "rotate-180" : ""
										}`}
									/>
								}
							>
								<ListItem
									className="p-0 changePrefix bg-transparent  hover:bg-transparent focus:opacity-1 active:opacity-100"
									selected={open === 2}
									placeholder={""}
								>
									<AccordionHeader
										onClick={() => handleOpen(2)}
										className="border-b-0 p-3"
										placeholder={""}
									>
										<ListItemPrefix placeholder={""}>
											<GlobeAltIcon className="h-5 w-5 text-white" />
										</ListItemPrefix>
										<p className="mr-auto  font-bold text-white text-3xl">
											R. Sociales
										</p>
									</AccordionHeader>
								</ListItem>
								<AccordionBody className="py-1">
									<List className="p-0" placeholder={""}>
										{RedesSociales.map((red, index) => {
											return (
												<ListItem
													placeholder={""}
													key={index}
													className="text-white text-2xl"
												>
													<ListItemPrefix placeholder={""} className="">
														<ChevronRightIcon
															strokeWidth={3}
															className="h-3 w-5"
														/>
													</ListItemPrefix>
													{red.name}
												</ListItem>
											);
										})}
									</List>
								</AccordionBody>
							</Accordion>

							<Accordion
								placeholder={""}
								open={open === 3}
								icon={
									<ChevronDownIcon
										strokeWidth={2.5}
										className={`mx-auto h-4 w-4 transition-transform ${
											open === 2 ? "rotate-180" : ""
										}`}
									/>
								}
							>
								<ListItem
									className="p-0 bg-transparent changePrefix  hover:bg-transparent focus:opacity-1 active:opacity-100"
									selected={open === 3}
									placeholder={""}
								>
									<AccordionHeader
										onClick={() => handleOpen(3)}
										className="border-b-0 p-3"
										placeholder={""}
									>
										<ListItemPrefix placeholder={""}>
											<ClipboardDocumentIcon className="h-5 w-5 text-white" />
										</ListItemPrefix>
										<p className="mr-auto font-bold text-white text-3xl">
											Curriculum
										</p>
									</AccordionHeader>
								</ListItem>
								<AccordionBody className="py-1">
									<List className="p-0" placeholder={""}>
										{Curriculum.map((item, index) => {
											return (
												<ListItem
													placeholder={""}
													key={index}
													className="text-white text-2xl"
												>
													<ListItemPrefix placeholder={""}>
														<ChevronRightIcon
															strokeWidth={3}
															className="h-3 w-5"
														/>
													</ListItemPrefix>
													{item.name}
												</ListItem>
											);
										})}
									</List>
								</AccordionBody>
							</Accordion>
						</List>
					</ul>

					<div
						className="absolute right-0  h-full w-[20%] z-50  top-0 backdrop-blur-lg    p-1    bg-quinary"
						onClick={() => HandleMenu()}
					>
						<div className="h-full w-full relative flex items-center justify-center ">
							<div className="bg-[url('/cancel_icon.svg')] bg-center  z-50 h-[30px] w-[30px] rounded-full "></div>
							<div className="test h-full w-full rounded-sm blur-sm absolute  top-0 -z-10"></div>
						</div>
					</div>
					<div className="h-full w-full absolute top-0 left-0 test  -z-50    "></div>
				</div>
			</div>
		</>
	);
}
