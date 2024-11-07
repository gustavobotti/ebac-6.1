import {
    Button,
    Card,
    Container,
    Description,
    Title,
} from "./styles";
import image from "../../assets/marguerita.png";

export const ShopItem = () => {
    return (
        <Card>
            <img src={image} alt="Nome do Produto" />
            <Container>
                <Title>Pizza Marguerita</Title>
                <Description>
                    A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                </Description>
                <Button>
                    Adicionar ao carrinho
                </Button>
            </Container>
        </Card>
    );
};