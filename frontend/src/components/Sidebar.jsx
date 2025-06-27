import {
  FaCalendarAlt,
  FaCamera,
  FaComment,
  FaExclamationTriangle,
  FaHome,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  // helper function to detect active route
  const isActive = (path) => location.pathname === path;

  const navItems = [
    { icon: <FaHome />, label: "Dashboard", path: "/" },
    { icon: <FaCalendarAlt />, label: "Events", path: "/events" },
    { icon: <FaCamera />, label: "Garbage Classifier", path: "/classifier" },
    { icon: <FaExclamationTriangle />, label: "Litter Report", path: "/report" },
    { icon: <FaComment />, label: "Community Forum", path: "/forum" },
  ];

  return (
    <aside className="h-screen w-64 bg-green-500 text-white p-6 flex flex-col shadow-lg">
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 text-white ${
              isActive(item.path)
                ? "bg-green-700 shadow-md"
                : "hover:bg-green-600"
            }`}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            <span className="text-md font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
