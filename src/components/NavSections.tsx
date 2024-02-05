export default function NavSection() {
	return (
		<nav className="h-full w-full">
			<ul className="h-full w-full flex items-center gap-4">
				<li className="text-2xl font-normal ">
					<p className="hover:text-quaternary textobrillante cursor-pointer  transition-all hover:textobrillante border-b-2 text-white border-quaternary hover:border-b-white ">
						Portafolio
					</p>
				</li>
				<li className="text-2xl font-normal ">
					<p className="hover:text-quaternary textobrillante cursor-pointer  transition-all hover:textobrillante border-b-2 text-white border-quaternary hover:border-b-white ">
						Proyectos
					</p>
				</li>
			</ul>
		</nav>
	);
}
