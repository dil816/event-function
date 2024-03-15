import { Routes, Route } from "react-router-dom";
import Ajendas from "./pages/Ajendas";
import Navbar from "./components/Navbar";
import UpdateAjenda from "./pages/UpdateAjenda";
import EventView from "./pages/EventView";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/admin/ajenda" element={<Ajendas />} />
        <Route path="/Events" element={<EventView />} />
        <Route
          path="/admin/ajenda/UpdateAjenda/:id"
          element={<UpdateAjenda />}
        />
      </Routes>
    </>
  );
}

export default App;
