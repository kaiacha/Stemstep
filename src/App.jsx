import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Roadmaps from "./pages/Roadmaps";
import Activities from "./pages/Activities";
import CareerDetail from "./pages/CareerDetail";
import SelfAssessment from "./pages/SelfAssessment";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/self-assessment" element={<SelfAssessment />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/career/:careerId" element={<CareerDetail />} />
        <Route path="/major/:majorId" element={<CareerDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
