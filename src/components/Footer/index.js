import React from 'react';
import { FooterContainer, FooterP } from './FooterElements'; 

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<>
			<FooterContainer>
				<FooterP>Ahmed Abbas &copy; { year } All Rights Reserved</FooterP>
			</FooterContainer>
		</>
	)
}

export default Footer
