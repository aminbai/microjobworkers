import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-navy-700 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist. You can return to the homepage or explore our features.
          </p>
          <Link to="/">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
