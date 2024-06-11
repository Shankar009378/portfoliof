// import React from "react";
// import Card from "./Card";
// import information from "../../data/education.js";
// import "./resume.css";

// const Resume = () => {
// 	return (
// 		<section className='resume container section' id='skills'>
// 			<h2 className='section__title'>Skills</h2>
// 			<div className='resume__container  grid'>
// 				<div className='timeline grid'>
// 					{information.map((item) => {
// 						if (item.category === "skills") {
// 							return (
// 								<Card
// 									key={item.id}
// 									name={item.name}
// 									description={item.description}
// 									level={item.level}
// 									year={item.year}
// 								/>
// 							);
// 						}
// 					})}
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Resume;

import React from "react";
import "./resume.css";
import information from "../../data/education.js";

const Resume = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h2 className='section__title text'>Skills</h2>
        <div className="items">
          {information.map((item) => (
            <>
              <div
                className="item" 
                key={item.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={`${item.imageSrc}`} alt={item.title} />
                <h3 className="item_title">{item.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Resume;