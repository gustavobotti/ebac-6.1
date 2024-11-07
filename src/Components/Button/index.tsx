import { Container } from "./styles";

type Props = {
    children: React.ReactNode;
    onClick: () => void;
};

export const Button = ({ children, onClick }: Props) => (
    <Container onClick={onClick}>
      {children}
    </Container>
);