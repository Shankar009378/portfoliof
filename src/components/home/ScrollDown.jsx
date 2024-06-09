import React from "react";
import { Link } from "react-scroll";

const ScrollDown = () => {
	return (
		<Link to="about" smooth={true} duration={500} className="mouse__wrapper" style={{ cursor: 'pointer' }}>
			<div className='scroll__down'>
				Scroll Down
				<span className='mouse'>
					<span className='wheel'></span>
				</span>
			</div>
		</Link>
	);
};

export default ScrollDown;
