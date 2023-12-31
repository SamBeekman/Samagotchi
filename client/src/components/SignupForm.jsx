import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import Auth from '../utils/auth';


const SignupForm = () => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const [addUser, { error, data }] = useMutation(ADD_USER);


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

            const { data } = await addUser({
                variables: { ...userFormData },
            });

            Auth.login(data.addUser.token);


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
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                        Something went wrong with your signup!
                    </Alert>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='username'>Username</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Your username'
                            name='username'
                            onChange={handleInputChange}
                            value={userFormData.username}
                            required
                        />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='email'>Email</Form.Label>
                        <Form.Control
                            type='email'
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
                            disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                            type='submit'
                            variant='primary'>
                            Sign Up
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};

export default SignupForm;
