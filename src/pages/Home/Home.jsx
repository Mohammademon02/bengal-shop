import DealsSection from "./DealsSection/DealsSection";
import HeroSection from "./HeroSection/HeroSection";
import PopularBrandSection from "./PopularBrandSection/PopularBrandSection";
import SearchCategory from "./SearchCategory/SearchCategory";


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <SearchCategory></SearchCategory>
            <DealsSection></DealsSection>
            <PopularBrandSection></PopularBrandSection>
        </div>
    );
};

export default Home;