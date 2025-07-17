import HeroSection from "../sections/HeroSection";
import NewestRecipes from "../sections/NewestRecipes";

export default function HomePage() {
  return (
    <div id="home-page">
      <HeroSection />
      <NewestRecipes />
    </div>
  );
}
