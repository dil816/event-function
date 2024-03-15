import EventDetails from "../components/EventDetails";

const EventView = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        <EventDetails />
        <EventDetails />
        <EventDetails />
        <EventDetails />
      </div>
    </>
  );
};

export default EventView;
