import {
  FaCalendarAlt,
  FaCamera,
  FaComment,
  FaExclamationTriangle,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-70 bg-green-500 text-white p-6 shadow-lg">
      
      <nav className="flex flex-col space-y-5">
        <Link to="/" className="flex items-center text-lg hover:bg-green-600 px-4 py-2 rounded">
          <FaHome className="mr-3" /> Dashboard
        </Link>
        <Link to="/events" className="flex items-center text-lg hover:bg-green-600 px-4 py-2 rounded">
          <FaCalendarAlt className="mr-3" /> Events
        </Link>
        <Link to="/classifier" className="flex items-center text-lg hover:bg-green-600 px-4 py-2 rounded">
          <FaCamera className="mr-3" /> Garbage Classifier
        </Link>
        <Link to="/report" className="flex items-center text-lg hover:bg-green-600 px-4 py-2 rounded">
          <FaExclamationTriangle className="mr-3" /> Litter Report
        </Link>
        <Link to="/forum" className="flex items-center text-lg hover:bg-green-600 px-4 py-2 rounded">
          <FaComment className="mr-3" /> Community Forum
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
