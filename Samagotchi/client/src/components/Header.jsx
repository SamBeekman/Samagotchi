import Image from 'react-bootstrap/Image';

function Header() {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Image src="/logo.jpg" alt="payment form" fluid />
        </div>
    );
}

export default Header;