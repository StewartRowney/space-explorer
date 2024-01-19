import "./Pages.css"
import NavBar from './NavBar';
import PageHeader from "../Components/PageHeader";

const Home = () => {
    return (
        <div className="home-background">
            <NavBar></NavBar>
            <PageHeader title="Explore"/>
        </div>
    );
}

export default Home;