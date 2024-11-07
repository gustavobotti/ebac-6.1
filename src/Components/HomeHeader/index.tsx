import { Link } from "react-router-dom";
import { HeaderContainer, Logo } from "./styles";
import logo from "../../assets/logo.svg";
import header_bg from "../../assets/header_bg.svg";

export const HomeHeader = () => (
    <HeaderContainer style={{ backgroundImage: `url(${header_bg})` }}>
        <div className="container">
            <Link to="/">
                <Logo src={logo} alt="EFood Logo" />
            </Link>
            <h3>
                Viva experiências gastronômicas <br /> no conforto da sua casa
            </h3>
        </div>
    </HeaderContainer>
);
