import DetailsForm from "./DetailsForm";

const Home = () => {
    return (
        <div className="home">
            <div className="description">
                <div className="headline">Learn to code by watching others</div>
                <p>
                    See how experienced developers solve problems in real-time.
                    Watching scripted tutorials is great, but understanding how
                    developers think is invaluable.
                </p>
            </div>
            <div className="offer">
                Try it free 7 days then $20/mo. thereafter
            </div>
            <div className="details-form">
                <DetailsForm />
            </div>
        </div>
    );
};

export default Home;
