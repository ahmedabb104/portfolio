import styled from 'styled-components';

export const ProjectsContainer = styled.div`
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #010606;
`

export const ProjectsGrid = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;
	gap: 16px;
	padding: 0 50px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
` 

export const ProjectsCard = styled.div`
	background: #f8f8ff;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	height: 320px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.2);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
	}
`

export const ProjectsImg = styled.img`
	max-height: 160px;
	max-width: 160px;
	width: auto;
	height: auto;
	margin-bottom: 10px;
`

export const ProjectsH1 = styled.h1`
	font-size: 2.5rem;
	color: var(--main-colour);
	margin-bottom: 64px;
	margin-top: 32px;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`

export const ProjectsH2 = styled.h2`
	font-size: 1rem;
	margin-bottom: 10px;
`

export const ProjectsP = styled.p`
	font-size: 1rem;
	text-align: center;
	margin-bottom: 10px;
`

export const BtnWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`