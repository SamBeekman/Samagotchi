import { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { Form, Button, Alert, Row, Container } from 'react-bootstrap';




const LoginForm = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {

            const { data } = await login({
                variables: { ...userFormData },
            });

            Auth.login(data.login.token);

        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <>
            <Container fluid>
                <Row>
                    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                            Something went wrong with your login credentials!
                        </Alert>
                        <Form.Group className='mb-3'>
                            <Form.Label htmlFor='email'>Email</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Your email address'
                                name='email'
                                onChange={handleInputChange}
                                value={userFormData.email}
                                required
                            />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label htmlFor='password'>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Your password'
                                name='password'
                                onChange={handleInputChange}
                                value={userFormData.password}
                                required
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                            <Button
                                disabled={!(userFormData.email && userFormData.password)}
                                type='submit'
                                variant='primary'>
                                Login
                            </Button>
                        </div>
                    </Form>
                </Row>
            </Container>
        </>
    );
};

export default LoginForm;
