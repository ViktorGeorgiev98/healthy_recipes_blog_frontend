import About from "../sections/About";
import HeroSection from "../sections/HeroSection";
import MostLikedRecipes from "../sections/MostLikedRecipes";
import StrongestPoints from "../sections/StrongestPoints";

export default function HomePage() {
  return (
    <div id="home-page">
      <HeroSection />
      <MostLikedRecipes />
      <About />
      <StrongestPoints />
    </div>
  );
}
