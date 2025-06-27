import { useEffect, useState } from "react";
import axios from "axios";
import { FaBolt, FaMedal, FaRecycle, FaUser } from "react-icons/fa";

const VolunteerDashboard = () => {
  const [volunteer, setVolunteer] = useState(null);
  const [topVolunteers, setTopVolunteers] = useState([]);

  const events = [
    { title: "Beach Cleanup", date: "June 30", location: "Juhu Beach" },
    { title: "Tree Plantation", date: "July 3", location: "Borivali Park" },
    { title: "Plastic Drive", date: "July 10", location: "Andheri Station" },
    { title: "Awareness March", date: "July 14", location: "Marine Drive" },
  ];

  const userName = "Nitish Bhosle"; // Replace this with the actual logged-in user name

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get(
          `http://localhost:5000/api/volunteers/${encodeURIComponent(userName)}`
        );
        const topRes = await axios.get(`http://localhost:5000/api/volunteers/top`);
        setVolunteer(userRes.data);
        setTopVolunteers(topRes.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  if (!volunteer) return <p className="p-6 text-gray-600">Loading dashboard...</p>;

  return (
    <div className="bg-green-50 min-h-screen w-full px-6 py-7">
      {/* Welcome */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h2 className="text-green-800 mb-1 text-2xl font-bold">
          👋 Welcome Back, <span className="text-teal-700">{volunteer.name}</span>
        </h2>
        <p className="text-gray-800">Ready to accelerate environmental change today?</p>
        <p className="text-green-600 font-medium mt-1 text-sm">💚 You're making a difference!</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white flex flex-col p-4 rounded-xl shadow">
          <div className="flex items-center justify-between mb-2">
            <FaBolt className="text-yellow-500 text-2xl" />
            <span className="text-green-500 text-sm font-semibold">+15</span>
          </div>
          <h3 className="text-gray-800 text-2xl font-bold">{volunteer.points}</h3>
          <span className="text-gray-800 text-sm mt-1">Impact Points</span>
          <div className="h-2 bg-yellow-100 rounded mt-3">
            <div className="h-2 bg-yellow-400 rounded w-[80%]"></div>
          </div>
        </div>

        <div className="bg-white flex flex-col p-4 rounded-xl shadow">
          <div className="flex items-center justify-between mb-2">
            <FaMedal className="text-orange-500 text-2xl" />
            <span className="text-green-500 text-sm font-semibold">↑</span>
          </div>
          <h3 className="text-gray-800 text-2xl font-bold">{volunteer.rank}</h3>
          <span className="text-gray-800 text-sm mt-1">Rank</span>
          <div className="h-2 bg-orange-100 rounded mt-3">
            <div className="h-2 bg-orange-400 rounded w-[60%]"></div>
          </div>
        </div>

        <div className="bg-white flex flex-col p-4 rounded-xl shadow">
          <div className="flex items-center justify-between mb-2">
            <FaRecycle className="text-blue-500 text-2xl" />
            <span className="text-green-500 text-sm font-semibold">+2kg</span>
          </div>
          <h3 className="text-gray-800 text-2xl font-bold">{volunteer.waste_collected} kg</h3>
          <span className="text-gray-800 text-sm mt-1">Waste Collected</span>
          <div className="h-2 bg-blue-100 rounded mt-3">
            <div className="h-2 bg-blue-400 rounded w-[40%]"></div>
          </div>
        </div>

        <div className="bg-white flex flex-col p-4 rounded-xl shadow">
          <div className="flex items-center justify-between mb-2">
            <FaUser className="text-purple-600 text-2xl" />
            <span className="text-green-500 text-sm font-semibold">+1</span>
          </div>
          <h3 className="text-gray-800 text-2xl font-bold">{volunteer.event_participated}</h3>
          <span className="text-gray-800 text-sm mt-1">Events Joined</span>
          <div className="h-2 bg-purple-100 rounded mt-3">
            <div className="h-2 bg-purple-400 rounded w-[50%]"></div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-green-800 mb-3">📅 Upcoming Events</h3>
        <div className="flex overflow-x-auto space-x-4 pb-2">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="min-w-[220px] bg-white p-4 rounded-xl shadow-md border-l-4 border-green-500"
            >
              <h4 className="font-semibold text-lg text-green-700">{event.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{event.date}</p>
              <p className="text-sm text-gray-500">{event.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Volunteers */}
      <div>
        <h3 className="text-xl font-bold text-green-800 mb-3">🏆 Top Volunteers</h3>
        <div className="space-y-3">
          {topVolunteers.map((v, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-white rounded-xl shadow px-4 py-3 border-l-4 border-yellow-400"
            >
              <div className="flex items-center space-x-3">
                <span className="text-yellow-600 font-bold text-lg">{idx + 1}.</span>
                <span className="text-gray-800 font-medium">{v.name}</span>
              </div>
              <span className="text-green-600 font-semibold">{v.points} pts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Reusable Stat Card (Unused but included for completeness)
const StatCard = ({ icon, label, value }) => (
  <div className="bg-white flex flex-col p-4 rounded-xl shadow">
    <div className="flex items-center justify-between mb-2">
      <div className="text-green-600 text-2xl">{icon}</div>
    </div>
    <h3 className="text-gray-800 text-2xl font-bold">{value}</h3>
    <span className="text-gray-800 text-sm mt-1">{label}</span>
  </div>
);

export default VolunteerDashboard;
