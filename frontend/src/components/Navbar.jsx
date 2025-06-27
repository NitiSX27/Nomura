import { FaUserFriends, FaCog, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Brand */}
      <h1 className="text-green-600 text-3xl font-extrabold">EcoCatalyst</h1>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Role Badge */}
        <div className="flex items-center bg-green-100 rounded-full px-4 py-1 shadow-inner">
          <div className="text-center mr-3">
            <p className="text-sm font-bold text-green-700">215</p>
            <p className="text-xs text-green-800">Guardian</p>
          </div>
          <div className="w-3 h-3 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold">
            
          </div>
        </div>

        {/* Username */}
        <p className="text-gray-800 font-medium">Nitish Bhosle</p>

        {/* Icons */}
        <div className="flex items-center gap-4 text-green-700 text-lg">
          <FaUserFriends className="hover:text-green-900 cursor-pointer transition" />
          <FaCog className="hover:text-green-900 cursor-pointer transition" />
          <FaSignOutAlt className="hover:text-red-600 cursor-pointer transition" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
