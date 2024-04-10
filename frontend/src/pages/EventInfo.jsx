import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { useParams } from "react-router-dom";

const EventInfo = () => {
  const [events, setEvents] = useState(null);
  const { eventId } = useParams();
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch(
        `http://localhost:4000/api/events/${eventId}`
      );

      const data = await response.json();

     // console.log(data);
      if (response.ok) {
        setEvents(data);
      }
    };

    fetchEvents();
  }, [setEvents, eventId]);

  return (
    <>
      {events && <EventCard events={events}/>}
    </>
  );
};

export default EventInfo;
