import { Banner } from "./styles";

type Props = {
    image: string;
    name: string;
    type: string;
};

export const ShopBanner = ({ image, name, type }: Props) => (
    <>
        <Banner style={{backgroundImage: `url(${image})`}}>
            <div className="overlay"/>
            <div className="container">
                <p>{type}</p>
                <h2>{name}</h2>
            </div>
        </Banner>
    </>
);
