import { HomeHeader } from "../../Components/HomeHeader";
import { Shops } from "../../Components/HomeShops";
import { MainContainer } from "../../GlobalStyle";

export const Home = () => {
    return (
        <>
            <HomeHeader />
            <div className="container">
                <MainContainer>
                    <Shops />
                </MainContainer>
            </div>
        </>
    );
};
