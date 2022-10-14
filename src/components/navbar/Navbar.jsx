import React, { useState } from 'react';
import { MdLocationSearching } from 'react-icons/md';
import { MdPersonPin } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import {
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
} from 'react-icons/fa';

import './NavbarStyle.css';

import { Link } from 'react-scroll';

function Navbar() {
	const [nav, setNav] = useState(false);

	const handleNav = () => setNav(!nav);

	return (
		<div name="home" className={nav ? 'navbar navbar-bg' : 'navbar'}>
			<div className={nav ? 'logo dark' : 'logo'}>
				<h2>TRAVEL WORLD.</h2>
			</div>

			<ul className="nav-menu">
				<Link to="home" smooth={true} duration={500}>
					<li>Home</li>
				</Link>
				<Link to="destinations" smooth={true} duration={500}>
					<li>Destinations</li>
				</Link>
				<Link to="carousel" smooth={true} duration={500}>
					<li>Travel</li>
				</Link>
				<Link to="search" smooth={true} duration={500}>
					<li>Book</li>
				</Link>
				<Link to="views" smooth={true} duration={500}>
					<li>Views</li>
				</Link>
			</ul>

			<div className="nav-icons">
				<MdLocationSearching className="icon" style={{ marginRight: '1rem' }} />
				<MdPersonPin className="icon" />
			</div>

			<div className="hamburger" onClick={handleNav}>
				{!nav ? (
					<GiHamburgerMenu className="icon" />
				) : (
					<AiOutlineClose className="icon" style={{ color: '#c000' }} />
				)}
			</div>

			<div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
				<ul className="mobile-nav">
					<li>Home</li>
					<li>Destinations</li>
					<li>Travel</li>
					<li>Book</li>
					<li>Views</li>
				</ul>
				<div className="mobile-menu-bottom">
					<div className="menu-icons">
						<button>Search</button>
						<button>Account</button>
					</div>
					<div className="social-icons">
						<FaFacebook className="icon" />
						<FaInstagram className="icon" />
						<FaLinkedin className="icon" />
						<FaTwitter className="icon" />
						<FaGithub className="icon" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
