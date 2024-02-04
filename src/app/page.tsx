import Image from "next/image";
import FirstPage from "@/components/firstPage";

export default function Home() {
	return (
		<div className="h-full w-full bg-primary relative overflow-hidden flex ">
			<FirstPage />
			<div className="bg-cover bg-center blur-sm h-full w-full bg-quaternary opacity-15  absolute "></div>
		</div>
	);
}
{
	/* <div className="bg-cover bg-center blur-sm h-full w-full bg-[url('/abstract-timekeeper.svg')] absolute "></div> */
}
