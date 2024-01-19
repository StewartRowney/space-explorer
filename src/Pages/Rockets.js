import PageHeader from "../Components/PageHeader";
import NavBar from "./NavBar";
import "./Pages.css"

const Rockets = () => {
    return (
        <div className="rockets-background">
            <NavBar></NavBar>
            <PageHeader title="Rockets"/>
        </div>
    );
}

export default Rockets;