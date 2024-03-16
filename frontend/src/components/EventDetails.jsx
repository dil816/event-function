import propTypes from "prop-types";
const EventDetails = ({ evnt }) => {
  return (
    <>
      <div className="ml-5 mr-5 mt-8 max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-auto h-auto"
          src="https://picsum.photos/id/237/400/150"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{evnt.eventTitle}</div>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {evnt.startDate}
          </span>
          <p className="text-gray-700 text-base">
            {evnt.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {evnt.startTime}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {`#${evnt.eventType}`}
          </span>
        </div>
      </div>
    </>
  );
};

EventDetails.propTypes = {
  evnt: propTypes.object,
};

export default EventDetails;
