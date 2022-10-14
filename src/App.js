import AddVisit from "./components/AddVisit/index";
import Sidebar from "./components/Sidebar";
import {
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Visitee from "./pages/Visitee";



function App() {
  return (
    <div className="">   
      <Routes>
        <Route index element={<AddVisit />} />
        <Route path="visitee" element={<Visitee />} />
      </Routes>
    </div>
  );
}

export default App;
