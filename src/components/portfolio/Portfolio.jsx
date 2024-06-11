import React, { useState } from "react";
import portfoliodata from "../../data/portfoliodata";
import { GoGlobe, GoLogoGithub } from "react-icons/go";
import "./portfolio.css";

const Portfolio = () => {
	const defaultPortData = portfoliodata.filter((element) => element.visible === true);
	const [items, setItems] = useState(defaultPortData);
	const filterItem = (categoryItem) => {
		const updateItems = portfoliodata.filter((curEl) => {
			return curEl.framework === categoryItem;
		});
		setItems((prev) => (prev = updateItems));
	};

	return (
		<section className='work container section' id='projects'>
			<h2 className='section__title'>Projects</h2>
{/* 
			<div className='work__filters'>
				<span className='work__item' onClick={() => filterItem("wordpress")}>
					WordPress
				</span>
				<span className='work__item' onClick={() => filterItem("shopify")}>
					Shopify
				</span>
				<span className='work__item' onClick={() => filterItem("figma")}>
					Figma
				</span>
				<span className='work__item' onClick={() => filterItem("react")}>
					MERN
				</span>
				<span className='work__item' onClick={() => filterItem("flutter")}>
					Flutter
				</span>
			</div> */}
			<div className='work__container grid'>
				{items.map((elem) => {
					const { id, image, title, description, category, demo, github } = elem;
					return (
						<div className='work__card' key={id}>
							<div className='work__thumbnail'>
								<img src={image} alt='' className='work__img' />
								<div className='work__mask'></div>
							</div>
							<span className='work__category'>{category}</span>
							<h3 className='work__title'>{title}</h3>
							{/* <a href={demo} className='work__button' target="_blank" rel="noopener noreferrer">
								<GoGlobe />
							</a>
							<a href={github} className='work__button2' target="_blank" rel="noopener noreferrer">
								<GoLogoGithub />
							</a> */}
							<a href={demo} target="_blank" rel="noopener noreferrer"  className="project_title_div">
								<h3>{title}</h3>
							</a>
							<div className="project_description_div">
								<p>{description}</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
