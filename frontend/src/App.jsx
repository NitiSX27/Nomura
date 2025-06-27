import Landing from "./pages/Landing"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import VolunteerDashboard from "./pages/VolunteerDashboard"
import OrganizerDashboard from "./pages/OrganizerDashboard"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/volunteer" element={<VolunteerDashboard/>}/>
          <Route path="/organizer" element={<OrganizerDashboard/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
