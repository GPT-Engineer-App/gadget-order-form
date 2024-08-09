import { Home, LogIn } from "lucide-react";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Login",
    to: "/",
    icon: <LogIn className="h-4 w-4" />,
    page: <Login />,
  },
  {
    title: "Order",
    to: "/order",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
];
