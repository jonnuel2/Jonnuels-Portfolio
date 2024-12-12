import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
         {/* Routes with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
