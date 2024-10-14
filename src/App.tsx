import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import WorkDailyTask from "./pages/WorkDailyTask";
import WorkMonthlyGoal from "./pages/WorkMonthlyGoal";
import WorkDeadLines from "./pages/WorkDeadLines";

function App() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/work/daily" element={<WorkDailyTask />} />
          <Route path="/work/monthly" element={<WorkMonthlyGoal />} />
          <Route path="/work/deadline" element={<WorkDeadLines />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
