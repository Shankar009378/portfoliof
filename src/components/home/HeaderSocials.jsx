import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoMdDownload, IoMdMail } from "react-icons/io";

const HeaderSocials = () => {
	return (
		<div className='home__socials'>
			<a
				href='https://www.linkedin.com/in/susie-ayala-490692220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
				className='home__social-link'
				target='_blank'
			>
				<FaLinkedin />
			</a>

			{/* <a href='https://twitter.com' className='home__social-link' target='_blank'>
				<FaTwitter />
			</a> */}

			<a href='https://github.com/SusanaAyala' className='home__social-link' target='_blank'>
				<FaGithub />
			</a>

			<a href='mailto:susieeee.ayala96.sa@gmail.com' className='home__social-link' target='_blank'>
				<IoMdMail />
			</a>

			{/* <a href='https://leetcode.com' className='home__social-link' target='_blank'>
				<SiLeetcode />
			</a> */}

			{/* <a href='/dummyresume.pdf' className='home__social-link' target='_blank'>
				<IoMdDownload />
			</a> */}
		</div>
	);
};

export default HeaderSocials;
