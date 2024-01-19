import PageHeader from "../Components/PageHeader";
import NavBar from "./NavBar";
import "./Pages.css"

const Planets = () => {
    return (
        <div className="planets-background">
            <NavBar></NavBar>
            <PageHeader title="Planets"/>
        </div>
    );
}

export default Planets;