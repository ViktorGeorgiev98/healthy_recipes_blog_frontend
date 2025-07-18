import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-green-300 text-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <img src="/logo.png" alt="logo" className="h-12" />
          <h2 className="text-xl font-bold text-yellow-600 uppercase">
            Healthy Recipes
          </h2>
          <p className="text-sm">
            Delicious, nutritious meals made simple. Discover, cook, and love
            every bite.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
          <a href="/recipes" className="hover:text-yellow-600 transition">
            Recipes
          </a>
          <a href="/register" className="hover:text-yellow-600 transition">
            Register
          </a>
          <a href="/login" className="hover:text-yellow-600 transition">
            Login
          </a>
          <a href="/add-recipe" className="hover:text-yellow-600 transition">
            Add Recipe
          </a>
        </div>

        {/* Contact or Newsletter */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-gray-900">
            Stay Connected
          </h3>
          <p className="text-sm">
            Join our newsletter for the latest healthy recipe tips!
          </p>
          <input
            type="email"
            placeholder="Your email"
            className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <Button type="secondary">Subscribe</Button>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-700 mt-10 border-t border-gray-300 pt-4">
        &copy; {new Date().getFullYear()} Healthy Recipes Blog. All rights
        reserved.
      </div>
    </footer>
  );
}
