import Link from "next/link";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";

interface NavbarProps {
	screen: string;
	title: string;
	isVisible: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ screen, title, isVisible }) => {
	return (
		<nav className="bg-[#fdf3d3] top-0 sticky z-99">
			{screen === "details" ? (
				<div className="border-b-2 border-blue-500">
					<div className="flex items-center justify-start h-[50px] text-blue-700 ">
						<Link href={"/"}>
							<AiOutlineLeft size={30}> </AiOutlineLeft>
						</Link>
						{!isVisible ? <p className="line-clamp-1">{title}</p> : null}
					</div>
				</div>
			) : (
				<div className="border-b-2 border-blue-500 justify-center flex py-2">
					<a href="/" className="text-blue-800 font-bold text-lg">
						MOVIEPARK
					</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
