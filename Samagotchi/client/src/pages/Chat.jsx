import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import moment from 'moment';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleInputChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newMessage.trim() !== '') {
            setMessages([
                ...messages,
                { text: newMessage, sender: 'user', timestamp: new Date() },
            ]);
            setNewMessage('');
        }
    };

    const handleBackButton = () => {
        window.location.href = '/friends';
    };

    return (
        <Container fluid>
            <br />
            <br />
            <h3>Chatting with Jessica...</h3>

            <Row>
                <Col md={3}>
                    <Image src="/avatar1.png" alt="avatar" fluid />
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={8}>
                    <div className="chat-box">
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.sender}`}>
                                <div className="message-header">
                                    <span className="timestamp">
                                        {moment(message.timestamp).format('LT')}
                                    </span>
                                </div>
                                <br />
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <br />
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="messageInput">
                            <Form.Control
                                type="text"
                                placeholder="Type your message..."
                                value={newMessage}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <br />
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                        <Button onClick={handleBackButton} variant="danger" type="button">
                            Back
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Chat;
