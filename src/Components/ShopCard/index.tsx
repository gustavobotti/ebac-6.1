import { useNavigate } from "react-router-dom";
import { Shop } from "../../models/Shop.ts";
import { Button } from "../Button";
import star from "../../assets/star.svg";
import {
  Card,
  ContentContainer,
  Photo,
  Tag,
  TagsContainer,
  TitleContainer,
  Description,
} from "./styles";

export const ShopCard = ({
   id,
   rating,
   //menu,
   description,
   type,
   title,
   cover,
   featured,
}: Shop) => {
  const navigate = useNavigate();
  return (
      <Card>
        <Photo src={cover} alt={title} />
        <TagsContainer>
          {featured && <Tag>Destaque da semana</Tag>}
          <Tag>{type}</Tag>
        </TagsContainer>
        <ContentContainer>
          <TitleContainer>
            <h3>{title}</h3>
            <div>
              <span>{rating}</span>
              <img src={star} alt="Star" />
            </div>
          </TitleContainer>
          <Description>{description}</Description>
          <Button onClick={() => navigate(`/shop/${id}`)}>
            Saiba mais
          </Button>
        </ContentContainer>
      </Card>
  );
};
