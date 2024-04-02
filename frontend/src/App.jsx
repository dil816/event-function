import { Routes, Route } from "react-router-dom";
import Ajendas from "./pages/Ajendas";
import Navbar from "./components/Navbar";
import UpdateAjenda from "./pages/UpdateAjenda";
import EventView from "./pages/EventView";
import { AddEvent } from "./pages/AddEvent";
import Events from "./pages/Events";
import EditEvent from "./pages/EditEvent";
import EventInfo from "./pages/EventInfo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/admin/ajenda" element={<Ajendas />} />
        <Route path="/admin/addajenda/:eventId" element={<Ajendas />} />
        <Route path="/events" element={<EventView />} />
        <Route path="/admin/addevent" element={<AddEvent />} />
        <Route path="/admin/editevent/:id" element={<EditEvent />} />
        <Route path="/admin/events" element={<Events />} />
        <Route
          path="/admin/ajenda/UpdateAjenda/:id"
          element={<UpdateAjenda />}
        />
        <Route path="/events/:eventId" element={<EventInfo />} />
      </Routes>
    </>
  );
}

export default App;
