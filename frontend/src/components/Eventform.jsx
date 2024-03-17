import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Eventform = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [eventType, setEventType] = useState("");
  const [file, setFile] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = new FormData();

    submitData.append("eventTitle", eventTitle);
    submitData.append("startDate", startDate);
    submitData.append("startTime", startTime);
    submitData.append("location", location);
    submitData.append("description", description);
    submitData.append("eventType", eventType);
    submitData.append("file", file);

    axios
      .post("http://localhost:4000/api/events/", submitData)
      .then(() => {
        setEventTitle("");
        setStartDate("");
        setStartTime("");
        setLocation("");
        setDescription("");
        setEventType("");
        //setFile(null);

        console.log("new event added");
        navigate("/admin/events");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="mt-9 flex flex-col items-center justify-center">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Start Date
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="Date"
                placeholder="Jane"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Start Time
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="Time"
                placeholder="Doe"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Event Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
              />
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Description
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Poster
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="File"
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Location
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Albuquerque"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Event Type
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  onChange={(e) => setEventType(e.target.value)}
                >
                  <option>choose</option>
                  <option>Virtual Event</option>
                  <option>Meeting</option>
                  <option>Product Launch</option>
                  <option>Party</option>
                  <option>Seminars</option>
                  <option>workshop</option>
                  <option>festival</option>
                  <option>Conference</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Demo
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <button className="btn mt-5">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Eventform;
