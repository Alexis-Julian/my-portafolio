"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import NavSection from "./NavSections";
import { Section } from "@/app/shared/types";

export default function BurgerMenu({
	navSection,
	useSection,
	setSection,
}: {
	navSection: Array<Section>;
	useSection: Section;
	setSection: Dispatch<SetStateAction<Section>>;
}) {
	const RedesSociales = [{ name: "Github" }, { name: "Linkedin" }];

	const [useHandleMenu, setHandleMenu] = useState(false);

	const [useItemsOpen, setItemsOpen] = useState<any>([
		{ name: "Secciones", items: navSection, open: false },
		{ name: "R.Sociales", items: RedesSociales, open: false },
	]);

	function HandleMenu() {
		setHandleMenu(!useHandleMenu);
	}

	function HandleOpenMenu(index: number) {
		const menu: any = [];
		useItemsOpen.map((ele: any, i: number) => {
			if (useItemsOpen[index].name == ele.name) {
				useItemsOpen[index].open = !useItemsOpen[index].open;
				menu.push(useItemsOpen[index]);
			} else {
				useItemsOpen[i].open = false;
				menu.push(useItemsOpen[i]);
			}
		});
		setItemsOpen(menu);
	}

	return (
		<>
			<div className="h-full w-full z-50" onClick={() => HandleMenu()}>
				<div className="bg-[url('/burger_icon.svg')] bg-center bg-no-repeat h-full w-full "></div>
			</div>
			<div
				className={`absolute h-full w-[100%]  top-0 left-0 right-0 bottom-0 z-50   transition-all duration-500   flex items-center justify-center ${
					useHandleMenu ? "translate-x-[0%]" : "translate-x-[-101%]"
				}`}
			>
				<div className="  h-full w-full relative ">
					<ul className="h-full w-[80%] text-2xl flex border-r-2 border-quaternary flex-col z-50 gap-7 p-3  relative">
						{useItemsOpen.map((item: any, index: number) => {
							return (
								<li
									className={`transition-all font-medium 
									${!useItemsOpen[0].open && !useItemsOpen[1].open && "translate-y-[0%]"}   
									${useItemsOpen[index].open ? `translate-y-0` : `translate-y-[50%]`}  
									${useItemsOpen[index].name == "Secciones" && "translate-y-[0%]"}
									`}
									key={index}
								>
									<div className="h-full">
										<p
											className="text-5xl flex  items-center gap-4"
											onClick={() => HandleOpenMenu(index)}
										>
											<i className="not-italic text-2xl h-full text-white ">
												{useItemsOpen[index].open ? "v" : ">"}
											</i>
											<i className="not-italic">{item.name}</i>
										</p>
										<div
											className={`flex flex-col mt-[5%] ml-[10%] gap-10   h-full  	 ${
												useItemsOpen[index].open == false && "hidden"
											}`}
										>
											{item.items.map((item: any, index: number) => {
												return (
													<p key={index} className=" flex items-center ">
														<i className="not-italic   text-4xl animate-fade-in-right font-extralight text-white">
															{item.name}
														</i>
													</p>
												);
											})}
										</div>
									</div>
								</li>
							);
						})}
					</ul>
					<div className="absolute bottom-0  w-[80%] h-[10%] rounded-sm p-2 ">
						<div className="text-white h-full w-full text-4xl text-center  flex items-center justify-center">
							<p>Curriculum</p>
						</div>
					</div>
					<div
						className="absolute right-0  h-full w-[20%] z-50  top-0 backdrop-blur-lg    p-1  bg-quinary"
						onClick={() => HandleMenu()}
					>
						<div className="h-full w-full relative flex items-center justify-center">
							<div className="bg-[url('/cancel_icon.svg')] bg-center  z-50 h-[40px] w-[40px]  "></div>
							<div className="test h-full w-full rounded-sm blur-sm absolute  top-0 -z-10"></div>
						</div>
					</div>
					<div className="h-full w-full absolute top-0 left-0 test  -z-50 blur-[10px]   "></div>
				</div>
			</div>
		</>
	);
}
