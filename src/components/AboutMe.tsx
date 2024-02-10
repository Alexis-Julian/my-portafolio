export default function AboutMe() {
	return (
		<div className="h-full w-full flex flex-col relative items-center justify-center border-r-2  border-quaternary phone:border-2 phone:border-tertiary phone:bg-[url('/protruding-squares.svg')] phone:rounded-md">
			<div className="w-[80%] h-full flex flex-col gap-8  backdrop-blur-sm   justify-around">
				<div
					className="phone:absolute phone:inline-block phone:mt-[10%] phone:h-[10%] rounded-sm border-secondary border-2     left-0 top-0 right-0 hidden
                "
				>
					<p className=" backdrop-blur-lg h-full w-full flex items-center justify-center  text-white text-4xl">
						Sobre mi
					</p>
				</div>

				<h2 className=" phone:collapse text-6xl text-center grow-1 font-extralight text-white bg-quinary rounded-md  shadow-md shadow-secondary ">
					- SOBRE MI -
				</h2>
				<div className=" flex items-start justify-center grow-1">
					<div className="h-[300px] w-[300px] flex items-center justify-center ">
						<span className="loader h-full w-full relative     ">
							<div className="h-[90%] w-[90%]   bg-[url('/profile.jpg')] bg-center rounded-full    z-50 "></div>
							<div className="h-full w-full top-0 left-0  blur-lg absolute -z-50 double  rounded-full"></div>
						</span>
					</div>
				</div>
				<div className=" flex items-center  pb-8 grow-1 z-50   lg:justify-center">
					<p className="text-center text-white font-bold lg:font-extrabold text-lg lg:text-2xl  z-50   ">
						Hola mi nombre es Alexis y soy Desarrollador Full Stack con una
						sólida experiencia en el diseño y desarrollo de aplicaciones web
						escalables y eficientes. Experto en tecnologías frontend como NextJs
						y backend con Express , MySQL, MongoDB y FireBase.
					</p>
				</div>
			</div>
			{/*  */}
		</div>
	);
}
