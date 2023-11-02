import reactLogo from '/react.svg'
import githubLogo from '/github-mark.png'
import linkedInLogo from '/linkedIn.png'
import './Footer.css'
import { Container } from 'react-bootstrap'


function Footer() {
    return <>
        <Container>
            <div className="d-flex justify-content-center">
                <a href="https://github.com/SamBeekman" target="_blank">
                    <img src={githubLogo} className="logo" alt="Github logo" />
                </a>

                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>

                <a href="https://www.linkedin.com/in/sam-beekman/" target="_blank">
                    <img src={linkedInLogo} className="logo" alt="LinkedIn logo" />
                </a>
            </div>
        </Container>
    </>
}

export default Footer;