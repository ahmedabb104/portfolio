import styled from 'styled-components';

export const Button = styled.a`
	border-radius: 50px;
	background: ${({primary}) => (primary ? 'var(--main-colour)' : '#010606')};
	white-space: nowrap;
	padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
	color: ${({dark}) => (dark ? '#010606' : '#f8f8ff' )};
	font-size: ${({fontBig}) => (fontBig ? '24px' : '20px')};
	text-decoration: none;
	border: none;
	outline: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({primary}) => (primary ? '#f8f8ff' : 'var(--main-colour)')};
	}
`