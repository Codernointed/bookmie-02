
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-bookmie-floral-white dark:from-bookmie-space-cadet-3 dark:to-bookmie-space-cadet p-4">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-bold text-bookmie-orange mb-4">404</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-bookmie-orange to-bookmie-orange/50 mx-auto mb-6"></div>
        <p className="text-2xl text-bookmie-space-cadet dark:text-white font-semibold mb-4">Page Not Found</p>
        <p className="text-bookmie-space-cadet-2 dark:text-gray-300 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button 
          onClick={() => window.location.href = '/'}
          className="bg-bookmie-space-cadet hover:bg-bookmie-space-cadet-2 text-white dark:bg-bookmie-orange dark:hover:bg-bookmie-orange/90 font-medium hover-scale"
        >
          <Home className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
