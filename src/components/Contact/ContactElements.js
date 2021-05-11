import styled from 'styled-components';

export const ContactContainer = styled.div`
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #010606;
	padding-top: 100px;
`

export const ContactH1 = styled.h1`
	font-size: 2.5rem;
	color: var(--main-colour);
	margin-bottom: 64px;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`

export const ContactForm = styled.form`
	display: block;
	max-width: 600px;
	margin: 0 auto;
	padding: 15px;
	border-radius: 5px;
	background: var(--main-colour);
	color: #f8f8ff;
	margin-bottom: 50px;
`

export const FormLabel = styled.label`
	line-height: 2;
`

export const FormInput = styled.input`
	width: 100%;
	padding: 10px;
	background: #006D94;
	color: #f8f8ff;
	border-radius: 5px;
	border: none;
	font-size: 14px;
`

export const FormInputBig = styled.textarea`
	width: 100%;
	min-height: 100px;
	padding: 10px;
	background: #006D94;
	color: #f8f8ff;
	border: none;
	border-radius: 5px;
	font-size: 14px;
`

export const SubmitBtn = styled.input`
	margin-top: 10px;
	width: 100%;
	padding-top: 10px;
	padding-bottom: 10px;
	color: #f8f8ff;
	background: #010606;
	border: none;
	border-radius: 5px;

	&:hover {
		background: #006D94;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}
`