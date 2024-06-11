import React from "react";
import "./about.css";

const About = () => {
	return (
		<section className='container' id='about'>
			<h2 className='section__title'>About Me</h2>
			<div className='about__container grid'>
				<div className='about__data grid'>
					<div className='about__info'>
						<p className='about__description'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent maurisLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris..
						</p>
						{/* <div className='about__download'>
							<a href='https://github.com' className='btn '>
								Download CV
							</a>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
