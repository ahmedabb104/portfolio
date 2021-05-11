import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 420;
	width: 100%;
	height: 100%;
	background: #0d0d0d;
	display: grid;
	align-items: center;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; 
`

export const CloseIcon = styled(FaTimes)`
	color: #f8f8ff;
`

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`

export const SidebarWrapper = styled.div`
	color: #f8f8ff;
	margin-top: 100px;
`

export const SidebarMenu = styled.ul`
	display: grid;
	grid-template-rows: repeat(6, 80px);
	grid-template-columns: 1fr;
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 60px)
	}
`

export const SidebarLink = styled(LinkS)`
	color: #f8f8ff;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	font-weight: bold;
	list-style: none;
	cursor: pointer;
	text-decoration: none;
	transition: 0.2s ease-in-out;

	&:hover {
		color: var(--main-colour);
		transition: 0.2s ease-in-out;
	}
`