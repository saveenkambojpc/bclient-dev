import {
  Routes,
  Route,
} from "react-router-dom";

import AddVisit from "./pages/AddVisit";
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
