import React from "react";
import Card from "./Card";
import information from "../../data/education.js";
import "./resume.css";
import Card2 from "./Card2.jsx";

const Resume = () => {
	return (
		<section className='resume container section' id='skills&experiences'>
			<h2 className='section__title'>Skills & Experiences</h2>
			<div className='resume__container  grid'>
				<div className='timeline grid'>
					{information.map((item) => {
						if (item.category === "skills") {
							return (
								<Card
									key={item.id}
									name={item.name}
									description={item.description}
									level={item.level}
									year={item.year}
								/>
							);
						}
					})}
				</div>

				<div className='timeline grid mobile-hide'>
					{information.map((item) => {
						if (item.category === "experience") {
							return (
								<Card2
									key={item.id}
									role={item.role}
									name={item.name}
									location={item.location}
									description={item.description}
									year={item.year}
								/>
							);
						}
					})}
				</div>
			</div>
		</section>
	);
};

export default Resume;
