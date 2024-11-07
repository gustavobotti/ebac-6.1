import { ShopCard } from "../ShopCard";
import { Container } from "./styles";
import sushi from "../../assets/sushi.png";
import pasta from "../../assets/pasta.png";

export const Shops = () => {
  return (
      <Container>
        <ShopCard
            id={1}
            rating={5}
            description={'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'}
            type={'Japonesa'}
            title={'Hioki Sushi'}
            cover={sushi}
            featured={true}
        />
        <ShopCard
            id={1}
            rating={4.8}
            description={'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'}
            type={'Italiana'}
            title={'La Dolce Vita Trattoria'}
            cover={pasta}
            featured={false}
        />
        <ShopCard
            id={1}
            rating={4.7}
            description={'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'}
            type={'Italiana'}
            title={'La Dolce Vita Trattoria'}
            cover={pasta}
            featured={false}
        />
        <ShopCard
            id={1}
            rating={4.7}
            description={'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'}
            type={'Italiana'}
            title={'La Dolce Vita Trattoria'}
            cover={pasta}
            featured={false}
        />
        <ShopCard
            id={1}
            rating={4.6}
            description={'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'}
            type={'Italiana'}
            title={'La Dolce Vita Trattoria'}
            cover={pasta}
            featured={false}
        />
        <ShopCard
            id={1}
            rating={4.6}
            description={'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'}
            type={'Italiana'}
            title={'La Dolce Vita Trattoria'}
            cover={pasta}
            featured={false}
        />
      </Container>
  );
};
