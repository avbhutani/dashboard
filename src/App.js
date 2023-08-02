import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/doctor/home/dashboard";
import Appointments from "./pages/doctor/home/appointment";
import Schedules from "./pages/doctor/home/schedules";
import Profile from "./pages/doctor/home/profile";
import Transaction from "./pages/doctor/home/transactions";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} exact />
        <Route path="/Appointments" element={<Appointments />} exact />
        <Route path="/Schedules" element={<Schedules />} exact />
        <Route path="/Profile" element={< Profile />} exact />
        <Route path="/transactions" element={< Transaction />} exact />
      </Routes>
    </div>
  );
}

export default App;
