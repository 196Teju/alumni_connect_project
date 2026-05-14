import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Alumni from "../pages/alumni/Alumni";
import Jobs from "../pages/jobs/Jobs";
import Messaging from "../pages/messaging/Messaging";
import Profile from "../pages/profile/Profile";
import Events from "../pages/events/Events";
import Teachers from "../pages/teachers/Teachers";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/alumni" element={<Alumni />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/messaging" element={<Messaging />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/events" element={<Events />} />
      <Route path="/teachers" element={<Teachers />} />
    </Routes>
  );
};

export default AppRoutes;