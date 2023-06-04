import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ProblemPage from "./Pages/ProblemPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/problemList" element={<ProblemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
