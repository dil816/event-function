import propTypes from "prop-types";
import { Link } from "react-router-dom";
const EventTable = ({ addEvent }) => {
  const Deletehandler = async () => {
    const response = await fetch(
      `http://localhost:4000/api/events/${addEvent._id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.log(data.error);
    }

    if (response.ok) {
      console.log("delete success");
    }
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="py-4 px-6">{addEvent.eventTitle}</td>
      <td className="py-4 px-6">{addEvent.startDate}</td>
      <td className="py-4 px-6">{addEvent.startTime}</td>
      <td className="py-4 px-6">{addEvent.description}</td>
      <td className="py-4 px-6">{addEvent.photo}</td>
      <td className="py-4 px-6">{addEvent.eventType}</td>
      <td className="py-4 px-6">{addEvent.location}</td>

      <td className="py-4 px-6">
        <Link to={`/editevent/${addEvent._id}`}>
          <button className="btn btn-outline btn-error">Edit</button>
        </Link>
      </td>

      <td className="py-4 px-6">
        <button className="btn btn-outline btn-error" onClick={Deletehandler}>
          Delete
        </button>
      </td>
      <td className="py-4 px-6">
        <Link to={`/addajenda/${addEvent._id}`}>
          <button className="btn btn-outline btn-error">sessions</button>
        </Link>
      </td>
    </tr>
  );
};

EventTable.propTypes = {
  addEvent: propTypes.object,
};

export default EventTable;
