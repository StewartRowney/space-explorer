import "../Pages/Pages.css"

const PageHeader = (props) => {
    return (
        <div className="header-container">
            <p className="header">{props.title}</p>
        </div>
    );
}

export default PageHeader;