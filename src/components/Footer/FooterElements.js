import styled from 'styled-components';

export const FooterContainer = styled.div`
	height: 50px;
	width: 100%;
	padding 30px;
	background: #101522;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const FooterP = styled.p`
	color: #f8f8ff;
	font-size: 14px;

	@media screen and (max-width: 347px) {
		font-size: 10px;
	}
`