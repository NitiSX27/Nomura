import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import OrganizerDashboard from "./pages/OrganizerDashboard";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Landing Page (no navbar/sidebar) */}
        <Route path="/" element={<Landing />} />

        {/* Dashboard Pages (wrapped in MainLayout) */}
        <Route element={<MainLayout />}>
          <Route path="/volunteer" element={<VolunteerDashboard />} />
          <Route path="/organizer" element={<OrganizerDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
