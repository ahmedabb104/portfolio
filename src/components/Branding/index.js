import React from 'react';
import Video from '../../videos/video.mp4';
import { BrandingContainer, BrandingBg, VideoBg, BrandingContent, BrandingH1, BrandingP, BrandingBtnWrapper } from './BrandingElements';
import { Button } from '../ButtonElement';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineFilePdf } from 'react-icons/ai';

const Branding = () => {
	return (
		<>
			<BrandingContainer>
				<BrandingBg>
					<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
				</BrandingBg>
				<BrandingContent>
					<BrandingH1>Ahmed Abbas</BrandingH1>
					<BrandingP>McMaster University Computer Science</BrandingP>
					<BrandingBtnWrapper>
						<Button href="https://www.linkedin.com/in/ahmedabbascs/" target="_blank">
							<AiOutlineLinkedin style={{fontSize: '28px'}}/>LinkedIn
						</Button>
						<Button href="https://github.com/ahmedabb104" target="_blank" style={{margin: '10px'}}>
							<AiOutlineGithub style={{fontSize: '28px'}} />Github
						</Button>
						<Button href="https://drive.google.com/file/d/1DhwDSZAjZrwQRaz1vxJo_EFZZSUNcBMn/view?usp=sharing" target="_blank">
							<AiOutlineFilePdf />Resume
						</Button>
					</BrandingBtnWrapper>
				</BrandingContent>
			</BrandingContainer>	
		</>
	)
}

export default Branding
