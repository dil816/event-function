import { useEffect, useState } from "react";
import EventDetails from "../components/EventDetails";

const EventView = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:4000/api/events/");

      const data = await response.json();

      console.log(data);
      if (response.ok) {
        setEvents(data);
      }
    };

    fetchEvents();
  }, [setEvents]);
  console.log(events);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        <EventDetails />
        {events &&
          events.map((evnt) => {
            <EventDetails key={evnt} evnt={evnt} />;
          })}
      </div>
    </>
  );
};

export default EventView;
