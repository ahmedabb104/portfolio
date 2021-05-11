import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, Heading, Caption, Column2, ImgWrap, Img } from './InfoElements'

const Info = ({lightBg, id, imgStart, header, darkText, caption, img, alt}) => {
	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<Heading>
									{header}
								</Heading>
								<Caption darkText={darkText}>
									{caption}
								</Caption>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} style={{boxShadow: "36px -36px 0px 0px rgba(0,185,251,0.75)", WebkitBoxShadow: "36px -36px 0px 0px rgba(0,185,251,0.75)"}} />
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	)
}

export default Info
