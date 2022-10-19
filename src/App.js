import {
  Routes,
  Route,
} from "react-router-dom";

import AddVisit from "./pages/AddVisit";
import Visitee from "./pages/Visitee";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TemporaryPass from "./pages/TemporaryPass";


function App() {
  return (
    <div className="">   
      <Routes>
        <Route index element={<AddVisit />} />
        <Route path="visitee" element={<Visitee />} />
        <Route path="temppass" element={<TemporaryPass />} />
      </Routes>
    </div>
  );
}

export default App;
