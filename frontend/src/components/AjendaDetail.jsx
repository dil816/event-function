import propTypes from "prop-types";
import useAjendacontext from "../hooks/useAjendacontext";

const AjendaDetail = ({ ajend }) => {
  //const Navigate = useNavigate();
  const { ajenda, dispatch } = useAjendacontext();

  const handleUpdate = async () => {
    //Navigate(`/admin/ajenda/UpdateAjenda/${ajend._id}`);
    //setAjendas(data);
    dispatch({ type: "GET_ID", payload: ajenda, payload1: ajend._id });
  };

  const handleDelete = async () => {
    const response = await fetch(
      `http://localhost:4000/api/ajendas/${ajend._id}`,
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
      dispatch({ type: "DELETE_AJENDA", payload: data });
    }
  };

  return (
    <div className="seccion-details">
      <h3>{ajend.date}</h3>
      <p>{`${ajend.startTime} - ${ajend.endTime}`}</p>
      <h4>{ajend.title}</h4>
      <span>{ajend.timeRange} min</span>
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
  ajend: propTypes.object,
};

export default AjendaDetail;
