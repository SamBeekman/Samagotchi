
import './Homepage.css'
import { Link } from 'react-router-dom';

export default function Homepage() {
    return (
        <div>

            <h1>Home Page</h1>
            <Link to="/login">
                <button>Login</button>
            </Link>
            <Link to="/signup">
                <button>Create Account</button>
            </Link>
            <Link to="/payment">
                <button>Donate</button>
            </Link>


            <br />
            <br />

            <section>
                **About Sam-A-Gotchi**

                Welcome to Sam-A-Gotchi, your delightful digital companion in the vast realm of virtual pet games! Designed with love and creativity, Sam-A-Gotchi is an enchanting universe where imagination meets technology.

                **Our Story:**
                In the heart of innovation, a team of passionate developers and designers envisioned a game that would blend nostalgia with modernity, creating a space where players of all ages could experience the joy of nurturing a virtual pet. Thus, Sam-A-Gotchi was born. We believe in the power of companionship, even if it's in the form of pixels and lines of code.

                **Meet Your Sam-A-Gotchi:**
                Your adventure begins with an egg, soon to hatch into your very own Sam-A-Gotchi companion. Each Sam-A-Gotchi is unique, with its own personality, quirks, and needs. Watch as it grows, plays, and evolves right before your eyes. Your care and attention will shape its journey and create unforgettable memories.

                **Features:**
                - **Customization:** Personalize your Sam-A-Gotchi with a myriad of outfits, accessories, and habitats, making it truly one-of-a-kind.
                - **Activities:** Engage in various fun activities and games with your Sam-A-Gotchi, fostering a strong bond through play.
                - **Caring for Needs:** Feed, clean, and nurture your Sam-A-Gotchi, ensuring it stays happy, healthy, and full of energy.
                - **Exploration:** Embark on exciting adventures together, discovering different environments and meeting new friends.
                - **Community:** Connect with fellow Sam-A-Gotchi enthusiasts, share experiences, and participate in events to win exciting rewards.

                **Our Mission:**
                At Sam-A-Gotchi, we are on a mission to create a virtual pet experience that goes beyond entertainment. We aim to instill values of responsibility, empathy, and friendship in a playful and engaging manner. Through the magic of Sam-A-Gotchi, we encourage players to learn about companionship, love, and the significance of taking care of others.

                **Join Us:**
                Embark on this heartwarming journey with Sam-A-Gotchi and discover the joys of nurturing a lifelong digital friend. Whether you're a nostalgic adult reliving the past or a young adventurer discovering the wonders of virtual companionship for the first time, Sam-A-Gotchi welcomes you with open arms. Let the adventure begin!
            </section>

        </div>
    );
}
