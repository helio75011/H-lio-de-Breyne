import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Acceuil from "./pages/acceuil/Acceuil";
import Fashion from "./pages/fashion/Fashion";
import Urban from "./pages/urban/Urban";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Acceuil />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/urban" element={<Urban />} />
      </Routes>
    </Router>
  );
}

export default App;
