import { Button } from 'react-bootstrap';
import Auth from '../utils/auth';

export default function Signup() {
    return (
        <>
            <br />
            <div className="text-center">
                <Button style={{ width: '70%' }} onClick={() => Auth.logout()}>Logout</Button>
            </div>
        </>
    );
}
