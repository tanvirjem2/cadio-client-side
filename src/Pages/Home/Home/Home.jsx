import About from "../About/About";
import Banner from "../Banner/Banner";
import Choose from "../Choose/Choose";
import System from "../System/System";
import Testimonials from "../Testimonials/Testimonials";
import Trusted from "../Trusted/Trusted";


const Home = () => {
    return (
        <div>
            <Banner />

            <About />

            <Trusted />

            <Choose />

            <System />

            <Testimonials />
        </div>
    );
};

export default Home;