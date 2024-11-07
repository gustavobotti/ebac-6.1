import { ShopHeader } from "../../Components/ShopHeader";
import { ShopBanner } from "../../Components/ShopBanner";
import { ShopItems } from "../../Components/ShopItems";
import image from "../../assets/hero.png";

export const ShopPage = () => {
    return (
        <>
            <ShopHeader/>
            <>
                <ShopBanner image={image} name={'La Dolce Vita Trattoria'} type={'Italiana'}
                />
                <div className="container">
                    <ShopItems/>
                </div>
            </>
        </>
    );
};