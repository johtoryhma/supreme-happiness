import "../style/header.css";
const Header = ({text}) => {
    return (
        <div className="header-container">
            <h1>{text}</h1>
        </div>
    )
}

export default Header;