import Button from "./Button";

export default function RecipeCard({ title, description, image }) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl bg-white transition-transform transform hover:scale-105 duration-300 flex flex-col">
      {/* Image: full width, no padding */}
      <img
        src={`https://healthyrecipesblogapi-production.up.railway.app${image}`}
        alt={title}
        className="w-full h-60 object-cover"
      />

      {/* Content below image: centered with padding */}
      <div className="p-6 flex flex-col items-center text-center gap-4">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <Button type="secondary">Details</Button>
      </div>
    </div>
  );
}
