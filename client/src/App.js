import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ProblemPage from "./Pages/ProblemPage";
import DailyActivityPage from "./Pages/DailyActivityPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/problemList" element={<ProblemPage />} />
        <Route path="/dailyActivity" element={<DailyActivityPage />} />
      </Routes>
    </Router>
  );
}

export default App;
