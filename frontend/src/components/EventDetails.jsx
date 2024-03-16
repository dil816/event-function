const EventDetails = () => {
  return (
    <>
      <div className="ml-5 mr-5 mt-8 max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-auto h-auto"
          src="https://picsum.photos/id/237/400/150"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">MEGA Launch Event</div>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
            March 15 2024
          </span>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
            7:00 pm - 10:00 pm
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #MEGALaunch
          </span>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
