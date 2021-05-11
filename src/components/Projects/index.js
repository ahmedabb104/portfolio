import React from 'react';
import { ProjectsContainer, ProjectsH1, ProjectsGrid, ProjectsCard, ProjectsImg, ProjectsH2, ProjectsP, BtnWrapper } from './ProjectsElements';
import PomoWatch from '../../images/pomowatch.png'
import QuoteGenerator from  '../../images/quotegenerator.png';
import PasswordGenerator from '../../images/passwordgenerator.png';
import SnakeGame from '../../images/snakegame.png';
import { Button } from '../ButtonElement';
import { AiOutlineGithub } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';

const Projects = () => {
	return (
		<>
			<ProjectsContainer id="projects">
				<ProjectsH1>Projects</ProjectsH1>
				<ProjectsGrid>
					<ProjectsCard>
						<ProjectsImg src={PomoWatch}/>
						<ProjectsH2>PomoWatch</ProjectsH2>
						<ProjectsP>A flexible Pomodoro timer, created using React.</ProjectsP>
						<BtnWrapper>
							<Button href="https://pomowatch.netlify.app/" target="_blank" style={{fontSize: "18px", padding:"12px 20px", marginRight:"5px"}}><BiWorld style={{fontSize: "20px"}} />Site</Button>
							<Button href="https://github.com/ahmedabb104/pomowatch" target="_blank" style={{fontSize: "18px", padding:"12px 20px"}}><AiOutlineGithub style={{fontSize: "20px"}}/>Code</Button>
						</BtnWrapper>
					</ProjectsCard>
					<ProjectsCard>
						<ProjectsImg src={QuoteGenerator}/>
						<ProjectsH2>Quote Generator</ProjectsH2>
						<ProjectsP>A quote generator, created using React</ProjectsP>
						<BtnWrapper>
							<Button href="http://ahmedsquotegenerator.netlify.app/" target="_blank" style={{fontSize: "18px", padding:"12px 20px", marginRight:"5px"}}><BiWorld style={{fontSize: "20px"}} />Site</Button>
							<Button href="https://github.com/ahmedabb104/quote-generator" target="_blank" style={{fontSize: "18px", padding:"12px 20px"}}><AiOutlineGithub style={{fontSize: "20px"}}/>Code</Button>
						</BtnWrapper>
					</ProjectsCard>
					<ProjectsCard>
						<ProjectsImg src={PasswordGenerator}/>
						<ProjectsH2>Password Generator</ProjectsH2>
						<ProjectsP>A password generator, created using HTML, CSS, and vanilla JS</ProjectsP>
						<BtnWrapper>
							<Button href="https://ahmedspasswordgenerator.netlify.app/" target="_blank" style={{fontSize: "18px", padding:"12px 20px", marginRight:"5px"}}><BiWorld style={{fontSize: "20px"}} />Site</Button>
							<Button href="https://github.com/ahmedabb104/Password-Generator" target="_blank" style={{fontSize: "18px", padding:"12px 20px"}}><AiOutlineGithub style={{fontSize: "20px"}}/>Code</Button>
						</BtnWrapper>
					</ProjectsCard>
					<ProjectsCard>
						<ProjectsImg src={SnakeGame}/>
						<ProjectsH2>Snake Game</ProjectsH2>
						<ProjectsP>Classic snake game, created with the Pygame library</ProjectsP>
						<Button href="https://github.com/ahmedabb104/Snake-Game" target="_blank" style={{fontSize: "18px", padding:"12px 20px"}}><AiOutlineGithub style={{fontSize: "20px"}}/>Code</Button>
					</ProjectsCard>
				</ProjectsGrid>
			</ProjectsContainer>	
		</>
	)
}

export default Projects
