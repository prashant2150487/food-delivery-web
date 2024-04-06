import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Layout from "./layouts/Layout";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>h</Layout>} />
        {/* <Route path="/search" element={<Layout></Layout>} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
