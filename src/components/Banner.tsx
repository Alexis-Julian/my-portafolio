"use client";

import { Dispatch, SetStateAction } from "react";
import ArrowDown from "./ArrowDown";
import NavSection from "./NavSections";
import { useState } from "react";
import { Section } from "@/shared/types";
import BurgerMenu from "./BurgerMenu";

export default function Banner({ setSection, navSection, useSection }: { setSection: Dispatch<SetStateAction<Section>>; navSection: Array<Section>; useSection: Section }) {
  return (
    <div className="h-full w-full relative rounded-lg   bg-[url('/probando.svg')] bg-cover bg-center bg-no-repeat">
      <div className="bg-center bg-cover bg-no-repeat backdrop-blur-sm  h-full w-full top-0 bottom-0 left-0 right-0 text-white z-50   flex items-center justify-center       ">
        <div className=" h-full w-full flex flex-col p-2 pl-4 font-extralight text-quaternary gap-2  ">
          <div className="w-full h-[10%] ">
            <div className="hidden lg:inline-block">
              <NavSection navSection={navSection} useSection={useSection} setSection={setSection} />
            </div>
            <div className="flex lg:hidden  h-full w-full items-center justify-start ">
              {/* <div className="h-[40px] w-[40px]  ">
								<BurgerMenu
									navSection={navSection}
									useSection={useSection}
									setSection={setSection}
								/>
							</div> */}
            </div>
          </div>

          <div className="hidden animate-fade-in-right w-full h-[80%] lg:flex lg:gap-2 lg:items-start flex-col justify-center gap-0 items-center   animation-animation ">
            <p className="font-extralight text-4xl">Hola mi nombre es</p>
            <p className="lg:text-8xl font-medium text-6xl">Alexis Rojas</p>
            <p className="font-extralight text-4xl">y soy</p>
            <div className="lg:flex-row flex items-center flex-col">
              <p className="lg:text-6xl font-medium flex text-4xl  ">Desarrollador Web&nbsp;</p>
              <p data-text="Full Stack..." className="lg:text-6xl textoFront font-medium  text-4xl">
                Full Stack...
              </p>
            </div>
          </div>
          <div className="relative lg:hidden animate-fade-in-right w-full h-[80%] ">
            <div className="bg-quinary backdrop-blur-sm -z-50 absolute h-full w-full opacity-70 rounded-md border-2 border-white border-dotted "></div>
            <span className="text-5xl  gap-2 h-full  text-center flex items-center flex-col justify-start pt-[10%]  text-white">
              <p className="self-end">¡Hola mi nombre es</p>
              <p className="font-bold text-quaternary">Alexis Rojas</p>
              <p>y soy</p>
              <p className="font-bold flex text-quaternary">Desarrollador Web</p>
              <p className="font-bold text-quaternary">Full Stack Junior!</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
