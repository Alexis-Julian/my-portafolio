"use client";
import Curriculum from "./Curriculum";
import Letter from "./Letter";
import { useEffect, useState } from "react";
import Presentation from "./Presentation";
import { Repository, Section } from "@/shared/types";
import AboutMe from "./AboutMe";
import ReactHammer from "react-hammerjs";
import SpinnerLoading from "./SpinnerLoading";
import BurgerMenu from "./BurgerMenu";
import ArrowDown from "./ArrowDown";

function CreateLayout({ ancho, alto }: { alto: number; ancho: number }, CreateSections: any) {
  const navSection = ["Portafolio", "Proyectos"];

  if (ancho < 960) navSection.push("Sobre mi");

  const screenTotal = 100 * navSection.length;

  let translate: number = Number((100 / navSection.length).toFixed(1));

  return CreateSections(navSection, translate, screenTotal);
}

function CreateSections(navSection: Array<String>, translate: number, screenTotal: Number) {
  const Sections = navSection.map((section, index) => {
    return { name: section, movement: String(translate * index), index };
  });
  return { Sections, translate, screenTotal };
}

let index = 0;

export default function FirstPage({ repositories }: { repositories: Repository[] | null }) {
  //Mover logica de estilos a css
  const [openCurriculum, setCurriculum] = useState<boolean>(false);

  const [useTamano, setTamano] = useState<{
    ancho: number;
    alto: number;
  }>({ ancho: 0, alto: 0 });

  useEffect(() => {
    setTamano({
      ancho: window.innerWidth,
      alto: window.innerHeight,
    });
  }, []);

  const { Sections, translate, screenTotal } = CreateLayout(useTamano, CreateSections);

  const [useSection, setSection] = useState<Section>(Sections[0]);

  const HandleSwipe = (event: any) => {
    if (useTamano.ancho > 960) return null;

    if (event.direction === 2) {
      // Deslizamiento hacia la izquierda

      if (useSection.index < Sections.length - 1) return setSection(Sections[useSection.index + 1]);
      return setSection(Sections[0]);
    } else if (event.direction === 4) {
      // Deslizamiento hacia la derecha

      if (useSection.index > 0) return setSection(Sections[useSection.index - 1]);
      return setSection(Sections[Sections.length - 1]);
    }
  };

  return (
    <>
      {useTamano.ancho > 0 ? (
        <div>
          <div className="h-[60px] w-[60px]  fixed top-0 p-3 z-[999] lg:hidden  ">
            <BurgerMenu navSection={Sections} useSection={useSection} setSection={setSection} setCurriculum={setCurriculum} useCurriculum={openCurriculum} />
          </div>
          <div className="h-[10%] w-full lg:grid lg:grid-cols-2 grid-cols-1 items-center justify-between fixed bottom-0 ml-4 z-[99] hidden  ">
            <div className="   h-8 w-8 hidden lg:inline-block">
              <ArrowDown setSection={setSection} useSection={useSection} navSection={Sections} />
            </div>
          </div>
          <ReactHammer onSwipe={HandleSwipe}>
            <main
              className={`lg:relative  lg:flex-col z-50 absolute flex bg-quinary transition-all duration-1000 `}
              style={{
                transform: useTamano.ancho > 960 ? `translateY(-${useSection.movement}%)` : `translateX(-${useSection.movement}%)`,

                height: useTamano.ancho > 960 ? `${screenTotal}%` : "100%",
                width: useTamano.ancho < 960 ? `${screenTotal}%` : "100%",
              }}
            >
              {/* Celular y Desktop */}
              <div
                className={`lg:grid lg:grid-cols-2 lg:gap-4 lg:p-2 | p-0  relative border-2 border-quaternary `}
                style={{
                  height: useTamano.ancho > 960 ? `${translate}%` : "100%",
                  width: useTamano.ancho < 960 ? `${translate}%` : "100%",
                }}
              >
                <Presentation setSection={setSection} navSection={Sections} useSection={useSection} />

                <div
                  className={` w-full h-full top-0 z-[9999] absolute transition-all  ${
                    openCurriculum ? "translate-y-[0%]" : "translate-y-[100%]"
                  } lg:translate-y-[0%] lg:z-[9999]  lg:inline-block lg:relative  lg:w-full   lg:h-full`}
                >
                  <Curriculum setCurriculum={setCurriculum} useCurriculum={openCurriculum} />
                </div>
              </div>

              {/* Celular */}

              <div
                className={`p-[0.2px] relative lg:grid lg:grid-cols-2 `}
                style={{
                  height: useTamano.ancho > 960 ? `${translate}%` : "100%",
                  width: useTamano.ancho < 960 ? `${translate}%` : "100%",
                }}
              >
                <div className="overflow-hidden h-full   w-full  p-5   z-50 text-white relative   border-2 border-quaternary  ">
                  <div className="h-[80%]  mt-10">
                    <Letter repositories={repositories} />
                  </div>
                </div>

                <div className="hidden lg:inline-block lg:h-full lg:w-full z-50">
                  <AboutMe />
                </div>

                <div className="absolute rounded-lg  h-full w-full   phone:bg-[url('/protruding-squares.svg')]  -z-10  top-0"></div>
              </div>
              {/* Celular */}

              <div
                className={`overflow-hidden lg:hidden inline-block`}
                style={{
                  height: useTamano.ancho > 960 ? `${translate}%` : "100%",
                  width: useTamano.ancho < 960 ? `${translate}%` : "100%",
                }}
              >
                <AboutMe />
              </div>
            </main>
          </ReactHammer>
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-center ">
          <SpinnerLoading />
        </div>
      )}
    </>
  );
}
