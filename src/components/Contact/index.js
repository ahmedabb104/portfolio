import React from 'react';
import emailjs from 'emailjs-com';
import { ContactContainer, ContactH1, ContactForm, FormLabel, FormInput, FormInputBig, SubmitBtn } from './ContactElements';

const Contact = () => {

	function sendEmail(e) {
		e.preventDefault();
	
		emailjs.sendForm('service_ojc14if', 'template_eo9meu4', e.target, 'user_f5ktJmMdVXNb8ivPRBTAA')
		  .then((result) => {
			  console.log(result.text);
			  alert("Message sent");
		  }, (error) => {
			  console.log(error.text);
		  });
	  }

	return (
		<>
			<ContactContainer id="contact">
				<ContactH1>
					Contact Form
				</ContactH1>
				<ContactForm onSubmit={sendEmail}>
					<FormLabel>Name</FormLabel>
					<FormInput type="text" name="from_name" required/>
					<FormLabel>Email</FormLabel>
					<FormInput type="email" name="from_email" required/>
					<FormLabel>Message</FormLabel>
					<FormInputBig name="message" required/>
					<SubmitBtn type="submit" value="Send"/>
				</ContactForm>
			</ContactContainer>	
		</>
	)
}

export default Contact
