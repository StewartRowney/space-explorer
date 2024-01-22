import PageHeader from "../Components/PageHeader";
import NavBar from "./NavBar";
import "./Pages.css"

const Planets = () => {
    return (
        <>
            <div className="planets-background">
                <NavBar></NavBar>
                <PageHeader title="Planets"/>
            </div>
            <div className="planet-div">
                <p>Mercury</p>
            </div>
            <div>
                <p>Venus</p>
            </div>
            <div>
                <p>Mars</p>
            </div>
            <div>
                <p>Earth</p>
            </div>

        </>
    );
}

export default Planets;