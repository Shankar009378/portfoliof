import React from "react";
import avatar from "../../public/avatar/avatar.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import "./home.css";
import Shapes from "./Shapes";

const Home = () => {
	return (
		<section className='home container' id='home'>
			<div className='intro'>
				<img src={avatar} alt='profile' className='home__img' />
				<h1 className='home__name'>Susie Ayala</h1>
				<span className='home__education'>Full Stack Web Developer</span>
				<HeaderSocials />
				<a href='#contact' className='btn'>
					Contact me!
				</a>
				<ScrollDown />
			</div>
			<Shapes />
		</section>
	);
};

export default Home;
