import About from "../About/About";
import Banner from "../Banner/Banner";
import Choose from "../Choose/Choose";
import Testimonials from "../Testimonials/Testimonials";
import Trusted from "../Trusted/Trusted";


const Home = () => {
    return (
        <div>
            <Banner />

            <About />

            <Trusted />

            <Choose />

            <Testimonials />
        </div>
    );
};

export default Home;