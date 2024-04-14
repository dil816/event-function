import { useEffect, useState } from "react";
import EventDetails from "../components/EventDetails";
import useEventcontext from "../hooks/useEventcontext";

const EventView = () => {
  //const [events, setEvents] = useState(null);
  const { events, dispatch1 } = useEventcontext();

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:4000/api/events/");

      const data = await response.json();

      console.log(data);
      if (response.ok) {
        //setEvents(data);
        dispatch1({ type: "GET_EVENTS", payload1: data });
      }
    };

    fetchEvents();
  }, [dispatch1]);
  console.log(events);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {events &&
          events.map((evnt) => <EventDetails key={evnt._id} evnt={evnt} />)}
      </div>
    </>
  );
};

export default EventView;
