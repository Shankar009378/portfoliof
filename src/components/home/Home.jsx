import React from "react";
import avatar from "../../../public/avatar/avatar.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import "./home.css";
import Shapes from "./Shapes";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
	return (
		<section className='home container' id='home'>
			<div className='intro'>
				<img src={avatar} alt='profile' className='home__img' />
				<h1 className='home__name'>Susie Ayala</h1>
				<span className='home__education'>Full Stack Web Developer</span>
				<HeaderSocials />
				{/* <a href='#contact' className='btn'>
					Contact me!
				</a> */}
				<ScrollDown />
			</div>
			<Shapes />
			<a href="https://wa.me/447511943208" className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
				<FaWhatsapp />
			</a>
		</section>
	);
};

export default Home;
