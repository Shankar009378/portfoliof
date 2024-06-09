import React, { useState, useEffect } from "react";
import Logo from "../../public/assets/logo.png";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";
import { FaTools, FaClipboardList, FaPhoneAlt } from "react-icons/fa";
import "./sidebar.css";

const Sidebar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [yearRange, setYearRange] = useState("");


	useEffect(() => {
		const currentYear = new Date().getFullYear();
		const previousYear = currentYear - 1;
		setYearRange(`${previousYear}-${currentYear}`);
	}, []);

	return (
		<>
			<aside className={showMenu ? "aside show-menu" : "aside"}>
				<a href='#home' className='nav__logo'>
					<img src={Logo} alt='' />
				</a>

				<nav className='nav'>
					<div className='nav__menu'>
						<ul className='nav__list'>
							<li className='nav__item'>
								<a href='#home' className='nav__link'>
									<IoHome />
								</a>
							</li>

							<li className='nav__item'>
								<a href='#about' className='nav__link'>
									<SiAboutdotme />
								</a>
							</li>

							<li className='nav__item'>
								<a href='#skills&experiences' className='nav__link'>
									<FaTools />
								</a>
							</li>

							<li className='nav__item'>
								<a href='#projects' className='nav__link'>
									<FaClipboardList />
								</a>
							</li>

							<li className='nav__item'>
								<a href='#contact' className='nav__link'>
									<FaPhoneAlt />
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<div className='nav__footer'>
					<span className='copyright'>&copy; {yearRange}</span>
				</div>
			</aside>
			<div
				className={showMenu ? "nav__toggle nav_toggle-open hide-desktop" : "nav__toggle"}
				onClick={() => setShowMenu(!showMenu)}
			>
				{showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
			</div>
		</>
	);
};

export default Sidebar;
