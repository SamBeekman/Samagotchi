export default function Play() {
    return (
        <div>

            <h1>Play Page</h1>

            <section>

                <div className="action-buttons">
                    <button className="action feed">Feed</button>
                    <button className="action sleep">Sleep</button>
                    <button className="action clean">Clean</button>
                    <button className="action walk">Walk</button>
                </div>

                <div className="happiness-level">
                    Happiness
                    <button className="happiness1">1</button>
                    <button className="happiness2">2</button>
                    <button className="happiness3">3</button>
                    <button className="happiness4">4</button>
                    <button className="happiness5">5</button>
                </div>

                <div className="pet-buttons">
                    Pets
                    <button className="pet1">1</button>
                    <button className="pet2">2</button>
                    <button className="pet3">3</button>
                </div>

                <div className="sprite-window">
                    SPRITE
                </div>

            </section>

        </div>
    );
}
