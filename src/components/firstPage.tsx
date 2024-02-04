import Banner from "./Banner";
import Curriculum from "./Curriculum";
import Pagination from "./Pagination";

export default function FirstPage() {
	return (
		<section className="z-10 h-full w-full grid grid-cols-2 items-center justify-center ">
			<Pagination />

			<div className="w-full h-full flex items-center justify-center p-5 ">
				<div className="bg-white h-full w-full relative  ">
					<div className="absolute h-full w-full z-50 ">
						<Banner />
					</div>
					<div className="bg-white h-full w-full absolute transition-all curriculum   mx-[2%] rounded-md">
						<Curriculum />
					</div>
				</div>
			</div>
		</section>
	);
}
