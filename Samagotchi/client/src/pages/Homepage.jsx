import './Homepage.css'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

export default function Homepage() {

    return (
        // <div>

        //     <Link to="/login">
        //         <Button>Login</Button>
        //     </Link>
        //     <Link to="/login">
        //         <Button>Create Account</Button>
        //     </Link>
        //     <Link to="/payment">
        //         <Button>Donate</Button>
        //     </Link>


        //     <br />
        //     <br />

        <Container fluid >
            <br />
            <Row className="mb-4 text-center font-monospace">
                <Col>
                    <h1>Welcome to Sam-A-Gotchi</h1>
                    <p>Your delightful digital companion in the vast realm of virtual pet games! Designed with love and creativity, Sam-A-Gotchi is an enchanting universe where imagination meets technology.</p>
                </Col>
            </Row>
            <Row>
                <Col className='font-monospace' md={6}>
                    <br />
                    <h2>Meet Your Sam-A-Gotchi</h2>
                    <p>
                        Your adventure begins with an egg, soon to hatch into your very own Sam-A-Gotchi companion. Each Sam-A-Gotchi is unique, with its own personality, quirks, and needs. Watch as it grows, plays, and evolves right before your eyes. Your care and attention will shape its journey and create unforgettable memories.
                    </p>
                </Col>
                <Col md={6}>
                    <Image src="/samagotchi1.png" alt="banner" fluid />
                </Col>
            </Row>

            <br />

            <Row className="mb-4 font-monospace">
                <Col md={12}>
                    <h2>Features</h2>
                    <ul>
                        <li>Customization: Personalize your Sam-A-Gotchi with outfits, accessories, and habitats.</li>
                        <li>Activities: Engage in various fun activities and games with your Sam-A-Gotchi.</li>
                        <li>Caring for Needs: Feed, clean, and nurture your Sam-A-Gotchi.</li>
                        <li>Exploration: Embark on exciting adventures, discovering different environments and meeting new friends.</li>
                        <li>Community: Connect with fellow Sam-A-Gotchi enthusiasts, share experiences, and participate in events.</li>
                    </ul>
                </Col>
            </Row>

            <br />

            <Row className="mb-4">
                <Col md={4}>
                    <h2>Our Story</h2>
                    <p>
                        In the heart of innovation, a team of passionate developers and designers envisioned a game that would blend nostalgia with modernity, creating a space where players of all ages could experience the joy of nurturing a virtual pet. Thus, Sam-A-Gotchi was born. We believe in the power of companionship, even if it's in the form of pixels and lines of code.
                    </p>
                </Col>
                <Col md={4}>
                    <h2>Our Mission</h2>
                    <p>
                        At Sam-A-Gotchi, we are on a mission to create a virtual pet experience that goes beyond entertainment. We aim to instill values of responsibility, empathy, and friendship in a playful and engaging manner. Through the magic of Sam-A-Gotchi, we encourage players to learn about companionship, love, and the significance of taking care of others.
                    </p>
                </Col>
                <Col md={4}>
                    <h2>Join Us</h2>
                    <p>
                        Embark on this heartwarming journey with Sam-A-Gotchi and discover the joys of nurturing a lifelong digital friend. Whether you're a nostalgic adult reliving the past or a young adventurer discovering the wonders of virtual companionship for the first time, Sam-A-Gotchi welcomes you with open arms. Let the adventure begin!
                    </p>
                </Col>
            </Row>
        </Container>


        // </div>
    );
}
