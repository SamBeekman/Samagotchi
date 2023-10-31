import { Container, Row, Col, Carousel, Card, CardGroup } from 'react-bootstrap';

export default function Homepage() {

    return (
        <Container fluid >
            <br />
            <Row className="mb-4 text-center font-monospace">
                <Col>
                    <h1>Welcome to Sam-A-Gotchi</h1>
                    <p>Your delightful digital companion in the vast realm of virtual pet games! Designed with love and creativity, Sam-A-Gotchi is an enchanting universe where imagination meets technology.</p>
                </Col>
            </Row>
            <Row>
                <Col className='font-monospace' md={8}>
                    <br />
                    <h2>Meet Your Sam-A-Gotchi</h2>
                    <p>
                        Your adventure begins with an egg, soon to hatch into your very own Sam-A-Gotchi companion. Each Sam-A-Gotchi is unique, with its own personality, quirks, and needs. Watch as it grows, plays, and evolves right before your eyes. Your care and attention will shape its journey and create unforgettable memories.
                    </p>
                </Col>
                <Col md={4} className="d-flex justify-content-center align-items-center">
                    <Col md={6}>
                        <Carousel interval={2000}>
                            <Carousel.Item>
                                <img src="/sprite0.png" alt="First slide" className="d-block w-100" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/sprite3.png" alt="Third slide" className="d-block w-100" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/sprite4.png" alt="Fourth slide" className="d-block w-100" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/sprite5.png" alt="Fifth slide" className="d-block w-100" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/sprite6.png" alt="Sixth slide" className="d-block w-100" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/sprite7.png" alt="Seventh slide" className="d-block w-100" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/sprite8.png" alt="Eighth slide" className="d-block w-100" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/sprite9.png" alt="Ninth slide" className="d-block w-100" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Col>
            </Row>

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
            <br />

            <Row className="mb-4">
                <CardGroup>
                    <Col md={4} className="p-3">
                        <Card border="primary" className="p-3">
                            <Card.Body>
                                <Card.Title className='text-center'>Our Story</Card.Title>
                                <Card.Text>
                                    In the heart of innovation, a team of passionate developers and designers envisioned a game that would blend nostalgia with modernity, creating a space where players of all ages could experience the joy of nurturing a virtual pet. Thus, Sam-A-Gotchi was born. We believe in the power of companionship, even if it's in the form of pixels and lines of code.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="p-3">
                        <Card border="primary" className="p-3">
                            <Card.Body>
                                <Card.Title className='text-center'>Our Mission</Card.Title>
                                <Card.Text>
                                    At Sam-A-Gotchi, we are on a mission to create a virtual pet experience that goes beyond entertainment. We aim to instill values of responsibility, empathy, and friendship in a playful and engaging manner. Through the magic of Sam-A-Gotchi, we encourage players to learn about companionship, love, and the significance of taking care of others.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="p-3">
                        <Card border="primary" className="p-3">
                            <Card.Body>
                                <Card.Title className='text-center'>Join Us</Card.Title>
                                <Card.Text>
                                    Embark on this heartwarming journey with Sam-A-Gotchi and discover the joys of nurturing a lifelong digital friend. Whether you're a nostalgic adult reliving the past or a young adventurer discovering the wonders of virtual companionship for the first time, Sam-A-Gotchi welcomes you with open arms. Let the adventure begin!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </CardGroup>
            </Row>
        </Container>
    );
}
