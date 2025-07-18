import HeroSection from "../sections/HeroSection";
import MostLikedRecipes from "../sections/MostLikedRecipes";

export default function HomePage() {
  return (
    <div id="home-page">
      <HeroSection />
      <MostLikedRecipes />
    </div>
  );
}
