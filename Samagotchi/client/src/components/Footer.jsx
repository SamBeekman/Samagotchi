import reactLogo from '/react.svg'
import githubLogo from '/github-mark.png'
import linkedInLogo from '/linkedIn.png'
import './Footer.css'


function Footer() {
    return <>
        <div>
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
    </>
}

export default Footer;