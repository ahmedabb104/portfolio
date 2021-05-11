import React, { useState } from 'react'
import Branding from '../components/Branding';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Info from '../components/Info';
import { objectOne } from '../components/Info/Data';
import Navbar from '../components/Navbar'
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar'

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle}/>
			<Navbar toggle={toggle}/>
			<Branding />
			<Info {...objectOne}/>
			<Projects />
			<Contact />
			<Footer />
		</>
	)
}

export default Home
