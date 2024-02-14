import { Dispatch, SetStateAction } from "react";
import { Section } from "@/shared/types";
// import { Sections } from "./HomePage";
export default function ArrowDown({ setSection, useSection, navSection }: { setSection: Dispatch<SetStateAction<Section>>; useSection: Section; navSection: Array<Section> }) {
  function HandleMovementSection() {
    if (useSection.index == 0) return setSection(navSection[1]);

    setSection(navSection[0]);
  }
  return (
    <div className="text-white h-full w-full bg-quaternary animate-bounce bg-re  rounded-full bottom-0 cursor-pointer" onClick={() => HandleMovementSection()}>
      <div className={`bg-[url('/arrow_down_icon.svg')] h-full w-full bg-center bg-cover animate-pulse transition-all duration-1000 ${useSection.index == 1 && "rotate-180"}`}></div>
    </div>
  );
}

// { movement: "50", index: 2 }
