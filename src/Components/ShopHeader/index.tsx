import { Link } from "react-router-dom";
import { Container, Logo } from "./styles";
import logo from "../../assets/logo.svg";
import texture from "../../assets/header_bg.svg";

export const ShopHeader = () => {
  const quantity = 0;

  return (
      <Container style={{ backgroundImage: `url(${texture})` }}>
        <div className="container">
          <span> Restaurantes </span>
          <Link to="/">
            <Logo src={logo} alt="EFood Logo" />
          </Link>
          <span>
            {quantity} produto(s) no carrinho
          </span>
        </div>
      </Container>
  );
}
