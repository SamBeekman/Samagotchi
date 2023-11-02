import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { ADD_PET } from '../utils/mutations';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';


const Profile = () => {

    const { loading, data } = useQuery(GET_ME);
    console.log(data);

    const me = data?.me || [];

    const [addPet, { error }] = useMutation(ADD_PET);

    const handleAddPetButton = async (event) => {

        try {

            const { data } = await addPet();
            console.log(data);

        } catch (err) {
            console.error(err);
        }
    };



    return (
        <Container>
            <br />
            <Row className="mb-3">
                <Col md={3}>
                    <Image src="/avatar2.png" alt="avatar" fluid />
                </Col>
                <Col md={6}>
                    <br />
                    <h4>username: {me.username}</h4>
                    <br />

                    <h5>email: {me.email}</h5>

                    <br />
                    <Button variant='secondary'>Edit Profile</Button>
                </Col>
                <Col md={3}>
                </Col>
            </Row>

            <Container>
                <h4>My Pets</h4>

                <Row>
                    <Col md={3}>
                        <Image src="/sprite0.png" alt="avatar" fluid />
                    </Col>
                    <Col>
                        <br />
                        <br />
                        <br />
                        <h5>Name</h5>
                    </Col>
                    <Col>
                        <br />
                        <br />
                        <br />
                        <h5>Level</h5>
                    </Col>
                    <Col>
                        <br />
                        <br />
                        <br />
                        <Button variant='primary'>Hatch Egg</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Image src="/sprite1.png" alt="avatar" fluid />
                    </Col>
                    <Col>
                        <br />
                        <br />
                        <br />
                        <h5>Tri</h5>
                    </Col>
                    <Col>
                        <br />
                        <br />
                        <br />
                        <h5>Level: 11</h5>
                    </Col>
                    <Col>
                        <br />
                        <br />
                        <br />
                        <Button variant='danger'>Delete Pet</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Image src="/sprite2.png" alt="avatar" fluid />
                    </Col>
                    <Col>
                        <br />
                        <br />
                        <br />
                        <h5>Tom</h5>
                    </Col>
                    <Col>
                        <br />
                        <br />
                        <br />
                        <h5>Level: 7</h5>
                    </Col>
                    <Col>
                        <br />
                        <br />
                        <br />
                        <Button variant='danger'>Delete Pet</Button>
                    </Col>
                </Row>
            </Container>
        </Container >
    );
};

export default Profile;