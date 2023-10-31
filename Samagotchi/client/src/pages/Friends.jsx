import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { ADD_PET } from '../utils/mutations';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import { MDBCol } from "mdbreact";

const Friends = () => {

    const { loading, data } = useQuery(GET_ME);
    console.log(data);

    const me = data?.me || [];

    const [addPet, { error }] = useMutation(ADD_PET);


    const handleChatButton = () => {
        window.location.href = '/chat';
    };


    return (
        <Container>
            <br /><br />
            <Row className="justify-content-center">
                <MDBCol >
                    <div className="active-pink-3 active-pink-4 mb-4">
                        <input className="form-control" type="text" placeholder="Search for friends" aria-label="Search" />
                    </div>
                </MDBCol>
            </Row>
            <br />
            <h4>My Friends</h4>
            <br />
            <Row>
                <Col md={3}>
                    <Image src="/avatar1.png" alt="avatar" fluid />
                    <Button variant='outline-danger'>Remove friend</Button>
                </Col>
                <Col>
                    <br />
                    <br />
                    <br />
                    <h5>Jessica</h5>
                </Col>
                <Col>
                    <Image src="/sprite5.png" alt="sprite" fluid />
                </Col>
                <Col>
                    <br />
                    <br />
                    <br />
                    <Button onClick={handleChatButton} variant='primary'>Chat with friend</Button>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={3}>
                    <Image src="/avatar4.png" alt="avatar" fluid />
                    <Button variant='outline-danger'>Remove friend</Button>
                </Col>
                <Col>
                    <br />
                    <br />
                    <br />
                    <h5>Sarah</h5>
                </Col>
                <Col>
                    <Image src="/sprite7.png" alt="sprite" fluid />
                </Col>
                <Col>
                    <br />
                    <br />
                    <br />
                    <Button onClick={handleChatButton} variant='primary'>Chat with friend</Button>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={3}>
                    <Image src="/avatar3.png" alt="avatar" fluid />
                    <Button variant='outline-danger'>Remove friend</Button>
                </Col>
                <Col>
                    <br />
                    <br />
                    <br />
                    <h5>Max</h5>
                </Col>
                <Col>
                    <Image src="/sprite3.png" alt="sprite" fluid />
                </Col>
                <Col>
                    <br />
                    <br />
                    <br />
                    <Button onClick={handleChatButton} variant='primary'>Chat with friend</Button>
                </Col>
            </Row>
        </Container >
    );
};

export default Friends;


