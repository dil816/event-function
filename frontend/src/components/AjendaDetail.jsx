import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";

const AjendaDetail = ({ ajenda }) => {
  const Navigate = useNavigate();

  const handleUpdate = () => {
    Navigate(`/admin/ajenda/UpdateAjenda/${ajenda._id}`);
  };

  const handleDelete = async () => {
    const response = await fetch(
      `http://localhost:4000/api/ajendas/${ajenda._id}`,
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
    <div className="seccion-details">
      <h3>{ajenda.date}</h3>
      <p>{`${ajenda.startTime} - ${ajenda.endTime}`}</p>
      <h4>{ajenda.title}</h4>
      <span>{ajenda.timeRange} min</span>
      <button className="button1" onClick={handleUpdate}>
        Edit
      </button>
      <button className="button2" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

AjendaDetail.propTypes = {
  ajenda: propTypes.object,
};

export default AjendaDetail;
