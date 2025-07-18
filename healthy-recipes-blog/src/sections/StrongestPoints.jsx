import CommunityCard from "../components/CommunityCard";

export default function StrongestPoints() {
  return (
    <section
      id="strongest-points"
      className="py-20 flex flex-col items-center justify-center gap-20 w-full bg-white"
    >
      <h2 className="text-3xl font-bold uppercase tracking-widest italic text-green-300 hover:rotate-5 transition-all duration-300">
        More Than Just a Blog
      </h2>
      <div className="grid grid-cols-3 gap-20 justify-items-start">
        <CommunityCard
          title="Nutrition-Packed Recipes"
          description="Every recipe is crafted with a healthy balance of protein, carbs, and fats — making clean eating easy and delicious. No more guesswork, just real food with real benefits."
        />
        <CommunityCard
          title="Quick & Easy Meals"
          description="Whether you’re short on time or just starting out in the kitchen, our step-by-step recipes help you whip up healthy meals in under 30 minutes — with minimal effort and ingredients."
        />
        <CommunityCard
          title="Delicious Without Compromise"
          description="We believe healthy doesn’t mean boring. Each dish is full of flavor, vibrant colors, and satisfying textures — proving that you don’t have to sacrifice taste for health.

"
        />
        <CommunityCard
          title="Plant-Based & Protein Options"
          description="Whether you’re vegan, vegetarian, or just trying to eat less meat, we’ve got options. Our recipes are flexible, inclusive, and built to suit every dietary lifestyle"
        />
        <CommunityCard
          title="Community & Inspiration"
          description="Join a growing community of food lovers and wellness seekers. Share your creations, save your favorites, and get inspired by others who are on the same journey.

"
        />
        <CommunityCard
          title="Simple Ingredients, Real Results"
          description="No fancy superfoods or hard-to-find items. We keep it real with everyday ingredients that are affordable, accessible, and full of nutritional value"
        />
      </div>
    </section>
  );
}
