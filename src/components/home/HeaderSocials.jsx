import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoMdDownload } from "react-icons/io";

const HeaderSocials = () => {
	return (
		<div className='home__socials'>
			<a
				href='https://www.linkedin.com'
				className='home__social-link'
				target='_blank'
			>
				<FaLinkedin />
			</a>

			<a href='https://twitter.com' className='home__social-link' target='_blank'>
				<FaTwitter />
			</a>

			<a href='https://github.com' className='home__social-link' target='_blank'>
				<FaGithub />
			</a>

			<a href='https://leetcode.com' className='home__social-link' target='_blank'>
				<SiLeetcode />
			</a>

			<a href='/dummyresume.pdf' className='home__social-link' target='_blank'>
				<IoMdDownload />
			</a>
		</div>
	);
};

export default HeaderSocials;
